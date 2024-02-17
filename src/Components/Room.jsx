import React, { useEffect, useState } from 'react'
import { useSocket } from '../Providers/Socket';
import { useParams } from 'react-router-dom';
export default function Room() {

    const {socket}=useSocket();
    const {roomId,userName}=useParams();
    const handleRoomJoined=(data)=>{
        const {userName}=data;
    console.log("new user ",userName,"joined");
    }
    useEffect(()=>{
 socket.emit("join-room", { roomId: roomId, userName: userName }); 
 socket.on("user-joined",handleRoomJoined);
    },[socket,roomId,userName])
   const [message,setMessage]=useState('');
const [allMessage,setAllMessage]=useState([]);

   useEffect(() => {

     if (socket) {
       // Receive messages from the server
       socket.on("room-message", (data) => {
        console.log("room-message");
        // if(data.userName!==userName)
    setAllMessage((prevMessages) => [...prevMessages, data]);
       });
     }

     return () => {
       // Clean up the event listener when the component unmounts
       if (socket) {
         socket.off("room-message");
       }
     };
   }, [socket,userName]);










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




console.log("allMessage",allMessage);
  return (
    <div>
      <div className='pl-12'>
{allMessage?.map((item,index)=>(
  <div key={index}>
  <p>{item.message}</p><p>By: {item.userName===userName?"Me":item.userName}</p><br/>
  </div>
))}
      </div>
      <div className='flex items-center justify-center absolute bottom-10 w-full'>
        <form onSubmit={handleSubmit}>
          <input type="text" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} style={{backgroundColor:"grey",height:"3vh",}}/>
          <button type="submit" style={{backgroundColor:"blue",border:"1px solid blue",borderRadius:"40px",fontSize:"40px",padding:"3px",color:"white"}}>Send</button>
        </form>
      </div>
    </div>
  );
}
