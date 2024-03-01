import React, { useEffect, useState } from 'react'
import { useSocket } from '../Providers/Socket';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserList from './UserList';
export default function Room() {
  
    const {socket}=useSocket();
    const {roomId,userName}=useParams();
   const [message, setMessage] = useState("");
   const [allMessage, setAllMessage] = useState([]);

    const handleRoomJoined=(data)=>{
        // const {userName}=data;
    // console.log("new user ",userName,"joined");
    toast.success(`${data.userName} has joined the room`);
  
    }
//     useEffect(()=>{
//  socket.emit("join-room", { roomId: roomId, userName: userName }); 
//  socket.on("user-joined",handleRoomJoined);

//     },[socket,roomId,userName])

useEffect(() => {
 
  socket.on("user-joined", handleRoomJoined);

  // Event listener for "user-left"
  socket.on("user-left", handleUserLeft);

  // Cleanup function to remove event listeners when component unmounts
  //  socket.emit("get-roomUsers", { roomId: roomId });
   if (socket) {
     // Receive messages from the server
     socket.on("room-message", (data) => {
      //  console.log("room-message",data);
       // if(data.userName!==userName)
       setAllMessage((prevMessages) => [...prevMessages, data]);
     });
   }

 
  return () => {
   
 if (socket) {
   socket.off("room-message");
 }

    socket.off("user-joined", handleRoomJoined);
    // socket.emit("user-left",{userName:userName,roomId:roomId})
    socket.off("user-left", handleUserLeft);
    //  socket.emit("leave-room", {roomId,userName});
    // socket.disconnect();
  };
}, [socket, roomId, userName]);

// Function to handle when a user leaves the room
const handleUserLeft = (data) => {
  // Implement your logic here
  // console.log("Under use left",data);
toast.error(`${data} has left the room`);
  // console.log(`${data} has left the room.`);
};



  //  useEffect(() => {

  //    if (socket) {
  //      // Receive messages from the server
  //      socket.on("room-message", (data) => {
  //       // console.log("room-message");
  //       // if(data.userName!==userName)
  //   setAllMessage((prevMessages) => [...prevMessages, data]);
  //      });
  //    }

  //    return () => {
  //      // Clean up the event listener when the component unmounts
  //      if (socket) {
  //        socket.off("room-message");
  //      }
  //    };
  //  }, [socket,userName]);








   const handleSubmit=async(e)=>{
    e.preventDefault();
if(message===''){
  alert("Pls type some message");
  return;
}else{
  
    setMessage('');
    let data={
      userName:userName,
      message:message,
      roomId:roomId
    }
   setAllMessage((prevMessages) => [...prevMessages, data]);
     socket.emit("room-message",data);
}
   }




// console.log("allMessage",allMessage);
  return (
    <>
      <div className="flex">
        <UserList roomId={roomId} />
        <div className="pl-12 text-white ml-70 ">
          {allMessage?.map((item, index) => (
            <div
              key={index}
              style={{
                marginLeft: item.userName === userName ? "250px" : "80vw",
                backgroundColor: item.userName === userName ? "green" : "white",
                padding: "5px",
                maxWidth: "fit-content",
                borderRadius: "15px",
                marginBottom: "8px",
                color:item.userName===userName?"white":"black"
              }}
            >
              <p>{item.message}</p>
              <p >By: {item.userName === userName ? "Me" : item.userName}</p>

              <br />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center absolute bottom-10 w-full">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="bg-gray-300 h-10 px-4 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
            >
              Send
            </button>
          </form>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          // transition: "Bounce"
        />
      </div>
    </>
  );
}
