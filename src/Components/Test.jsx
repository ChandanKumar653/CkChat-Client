import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Test = () => {
  const [messages, setMessages] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [input, setInput] = useState("");
  // const socket = io("http://localhost:3001"); // Use your server URL here
  const socket = io("https://ckchat-server.onrender.com/");

  useEffect(() => {
    // Receive messages from the server
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect(); // Disconnect the socket when the component unmounts
    };
  }, [socket]);

  const sendMessage = () => {
    setMyMessages((prevMessages) => [...prevMessages, input]);
    socket.emit("chat message", input); // Send message to the server
    setInput("");
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <ul style={{ float: "right" }}>
        {myMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Test;
