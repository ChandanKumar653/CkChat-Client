import React, { useCallback, useEffect, useState,useRef } from 'react'
import { useSocket } from '../Providers/Socket';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserList from './UserList';
import { Button } from '@mui/material';
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom';
import { usePeer } from '../Providers/Peer';
export default function Room() {
  const navigate = useNavigate();
  const { socket } = useSocket();
  const {createOffer}=usePeer();
  const { roomId, userName } = useParams();
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState([]);
  const [myStream, setMyStream] = useState(null);
  const handleRoomJoined = useCallback(
   async (data) => {
      // const {userName}=data;
      // console.log("new user ",userName,"joined");
      toast.success(`${data.userName} has joined the room`);

const offer=await createOffer();
socket.emit('call-user',{roomId,userName,offer});
    },
    [userName,roomId,createOffer,socket]
  );
  //     useEffect(()=>{
  //  socket.emit("join-room", { roomId: roomId, userName: userName });
  //  socket.on("user-joined",handleRoomJoined);

  //     },[socket,roomId,userName])

  const handleLeaveRoom = useCallback(() => {
    socket.emit("leave-room", { roomId, userName });
    navigate("/join-room",{replace:true});
  }, [roomId, socket, userName,navigate]);

  // Function to handle when a user leaves the room
  const handleUserLeft = useCallback((data) => {
    // Implement your logic here
    // console.log("Under use left",data);
    toast.error(`${data} has left the room`);
  
    // console.log(`${data} has left the room.`);
  }, []);

const handleIncommingCall=useCallback(async(data)=>{
  const {from,offer}=data;
console.log("incomming call from ",from,offer);

},[])

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

socket.on("incomming-call",handleIncommingCall);


    return () => {
      if (socket) {
        socket.off("room-message");
      }

      socket.off("user-joined", handleRoomJoined);
      // socket.emit("user-left",{userName:userName,roomId:roomId})
      socket.off("user-left", handleUserLeft);
       socket.off("incomming-call", handleIncommingCall);
      //  socket.emit("leave-room", {roomId,userName});
      // socket.disconnect();
    };
  }, [socket, roomId, userName, handleRoomJoined, handleUserLeft,handleIncommingCall]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") {
      alert("Pls type some message");
      return;
    } else {
      setMessage("");
      let data = {
        userName: userName,
        message: message,
        roomId: roomId,
      };
      setAllMessage((prevMessages) => [...prevMessages, data]);
      socket.emit("room-message", data);
    }
  };

  const handleCall = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    setMyStream(stream);
  }, []);

  // console.log("allMessage",allMessage);
const containerRef = useRef(null);
useEffect(() => {
  if (containerRef.current) {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }
}, [allMessage]);
  return (
    <>
      <div className="flex h-screen">
        <div className="hidden md:flex">
          <UserList roomId={roomId} />
        </div>

        <div className="hidden" >
          <Button variant="outlined" color="warning" onClick={handleCall}>
            Call
          </Button>
          <br />
          <br />
        
        </div>
        <div>
          {myStream && (
            <ReactPlayer
              className="react-player"
              // url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              url={myStream}
              // controls
              muted
              playing
              // controls
              width="50%"
              height="50%"
            />
          )}
        </div>

        <div
          ref={containerRef}
          className="p-4 md:p-12 text-white mx-auto mb-16 md:ml-80 overflow-y-auto w-full"
        >
          {/* {allMessage?.map((item, index) => (
            <div
              key={index}
              style={{
                marginLeft: item.userName === userName ? "250px" : "80vw",
                backgroundColor: item.userName === userName ? "green" : "white",
                padding: "5px",
                maxWidth: "fit-content",
                borderRadius: "15px",
                marginBottom: "8px",
                color: item.userName === userName ? "white" : "black",
              }}
            >
              <p>{item.message}</p>
              <p>By: {item.userName === userName ? "Me" : item.userName}</p>

              <br />
            </div>
          ))} */}

          {allMessage?.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:
                  item.userName === userName ? "flex-end" : "flex-start",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  backgroundColor:
                    item.userName === userName ? "#DCF8C6" : "#3B3B3B", // Adjusted background color for other users' messages
                  color: item.userName === userName ? "#000000" : "#FFFFFF", // Adjusted text color for better visibility
                  padding: "10px",
                  borderRadius: "10px",
                  // maxWidth: "70%",
                }}
              >
                <p style={{ margin: 0 }}>{item.message}</p>
              </div>
              <p
                style={{ margin: "5px", fontSize: "0.8rem", color: "#888888" }}
              >
                {item.userName === userName ? "You" : item.userName}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center absolute bottom-10 w-full ">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="bg-gray-300 h-10 rounded-l-lg focus:outline-none w-[7rem] md:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
            >
              Send
            </button>
          </form>
          &nbsp;&nbsp;
          <Button variant="outlined" color="warning" onClick={handleLeaveRoom}>
            Leave
          </Button>
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
