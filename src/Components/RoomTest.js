import React, { useState } from "react";

const RoomTest = () => {
  // Sample available users data
  const availableUsers = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
  ];

  // State to manage the message input
  const [message, setMessage] = useState("");
  // State to store sent messages
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 p-4 w-full md:w-1/4">
        <h2 className="text-xl font-bold mb-4">Available Users</h2>
        {/* Display available users */}
        <ul>
          {availableUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Chat Room</h1>
        {/* Display messages */}
        <div
          className="border p-4 mb-4"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          {messages.map((msg) => (
            <div key={msg.id} className="mb-2">
              {msg.text}
            </div>
          ))}
        </div>
        {/* Message input box */}
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border p-2 mr-2"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-200 p-4 w-full md:w-1/4">
        {/* Video Call Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Start Video Call
        </button>
        {/* Leave Room Button */}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default RoomTest;
