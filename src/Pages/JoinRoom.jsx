import { Button, Stack, TextField } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
export default function JoinRoom() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        userName:'',
        roomId:''
    });
    const handleChange=async(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleEnter=async(e)=>{
 e.preventDefault();
//  alert(formData.roomId);
navigate(`/chat/${formData.userName}/${formData.roomId}`);
    }
    
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleEnter}>
          <Stack direction={"column"} spacing={1}>
            <TextField
              required
              name="userName"
              label="User Name"
              value={formData.userName}
              variant="outlined"
              onChange={handleChange}
            />
            <br />
            <TextField
              required
              name="roomId"
              label="Room Id"
              value={formData.roomId}
              variant="outlined"
              onChange={handleChange}
            />
            <br />
            <Button
              variant="contained"
              color="warning"
              type="submit"
           
            >
              Enter
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}
