import React, { useEffect, useState } from 'react'
import { useSocket } from '../Providers/Socket';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Room() {
  
    const {socket}=useSocket();
    const {roomId,userName}=useParams();
   const [message, setMessage] = useState("");
   const [allMessage, setAllMessage] = useState([]);

    const handleRoomJoined=(data)=>{
        const {userName}=data;
    console.log("new user ",userName,"joined");
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
       // console.log("room-message");
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
    <div>
      <div className="pl-12 text-white">
        {allMessage?.map((item, index) => (
          <div key={index} style={{marginLeft:item.userName===userName?"0":"80vw"}}>
            <p>{item.message}</p>
            <p>By: {item.userName === userName ? "Me" : item.userName}</p>
            <br />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center absolute bottom-10 w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            style={{ backgroundColor: "grey", height: "3vh" }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "blue",
              border: "1px solid blue",
              borderRadius: "40px",
              fontSize: "40px",
              padding: "3px",
              color: "white",
            }}
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
  );
}
