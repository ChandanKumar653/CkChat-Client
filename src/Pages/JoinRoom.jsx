import React from "react";
import "./stars.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Stack } from "@mui/material";
export default function JoinRoom() {
  const navigate = useNavigate();
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
    navigate(`/chat/${formData.userName}/${formData.roomId}`);
  };

  return (
    <div>
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* <div id="title">
          <span>PURE CSS</span>
          <br />
          <span>PARALLAX PIXEL BACKGROUND</span>
        </div> */}
        <div className="flex items-center justify-center min-h-screen">
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
                variant="contained"
                color="primary"
                type="submit"
                style={{ backgroundColor: "silver", color: "black" }}
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
