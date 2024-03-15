import React, { useEffect } from "react";
import "./stars.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Stack } from "@mui/material";
import { useSocket } from "../Providers/Socket";
import { useCallback } from "react";
export default function JoinRoom() {
  const { socket } = useSocket();
  const navigate = useNavigate();

  //  const handleJoinedRoom = async (data) => {
  //    navigate(`/chat/${data.userName}/${data.roomId}`);
  //  };

  
  const handleJoinedRoom = useCallback(
    async (data) => {
      navigate(`/chat/${data.userName}/${data.roomId}`);
    },
    [navigate]
  );



  useEffect(() => {
    socket.on("joined-room", handleJoinedRoom);
    return () => {
      // Clean up the event listener when the component unmounts
      socket.off("joined-room", handleJoinedRoom);
    };
  }, [socket, handleJoinedRoom]);

  const [formData, setFormData] = useState({
    userName: "",
    roomId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEnter = (e) => {
    e.preventDefault();
    socket.emit("join-room", {
      roomId: formData.roomId,
      userName: formData.userName,
    });
    // navigate(`/chat/${formData.userName}/${formData.roomId}`);
  };

  return (
    <div>
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
          <span>
            HELLO <span className="font-bold">GUEST,</span>
          </span>
          <br />
          <span>CHOOSE A USERNAME AND JOIN THE ROOM</span>
        </div>
        <div className="flex items-center justify-center min-h-screen  mt-[-2rem]">
          <form onSubmit={handleEnter}>
            <Stack direction="column" spacing={2}>
              <TextField
                required
                name="userName"
                label="User Name"
                value={formData.userName}
                variant="outlined"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                onChange={handleChange}
              />
              <TextField
                required
                name="roomId"
                label="Room Id"
                value={formData.roomId}
                variant="outlined"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                onChange={handleChange}
              />
              <Button
                variant="outlined"
                color="warning"
                type="submit"
                // style={{ backgroundColor: "silver", color: "black" }}
              >
                Enter
              </Button>
            </Stack>
          </form>
        </div>
      </section>
    </div>
  );
}
