import React,{useEffect, useState} from 'react'
// import { Grid,InputAdornment,IconButton,TextField } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Skeleton ,Grid,useMediaQuery} from '@mui/material';
import { useSelector } from 'react-redux';
import {makeTrueOrFalse} from '../../Redux/Slices/PersonalChatSlice';
import { useDispatch } from 'react-redux';
export default function Chats(props) {
const dispatch=useDispatch();
    // const isSmallScreen = useMediaQuery("(max-width:600px)");
      const isSmallScreen = useMediaQuery("(max-height:600px)");
  const screenHeight = isSmallScreen ? 400 : 600; // Adjust the default screen height as needed

  // Calculate the number of skeleton messages needed to fill the screen height
  const messageCount = Math.ceil(screenHeight / 40);

 const data = useSelector((state) => state.personalChat);

const [message,setMessage]=useState('');
const [showEmoji,setShowEmoji]=useState(false);
  const handleSendMessage=async(e)=>{
e.preventDefault();
  }
  const handleEmojiClick = (emojiObject) => {
    // console.log(emojiObject.emoji);
    setMessage(message + emojiObject.emoji);
  };

useEffect(() => {
  dispatch(makeTrueOrFalse("loading"));
  async function test() {
    const delay = 2000;
    setTimeout(() => {
      dispatch(makeTrueOrFalse("success"));
    }, delay);
  }
  test();
}, [dispatch, data?.userInfo?.data]);
if (data?.userChatData?.status==="loading"){

  // Generate an array of random booleans to determine whether each message should be on the left or right
  const positions = Array.from(
    { length: messageCount },
    () => Math.random() < 0.5
  );

  return (
    <Grid
      container
      spacing={2}
      style={{
        height: "90vh",
        overflowY: "auto",
        marginTop: "5px",
        backgroundColor: "#2C2D2D",
      }}
    >
      {[...Array(messageCount).keys()].map((index) => (
        <Grid key={index} item xs={12}>
          <Grid
            container
            justifyContent={positions[index] ? "flex-end" : "flex-start"}
          >
            <Grid item>
              <Skeleton
                variant="rectangular"
                height={40}
                width={200}
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.7)",
                  marginLeft: "10px",
                  marginRight: "10px",
                  borderRadius: "10px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
  return (
    <div
      className="bg-[#0e0e0f] flex flex-col justify-between md:h-[100%] h-screen"
      // style={{ height: isSmallScreen ? "93vh" : "91vh" }}
    >
      <div className="flex items-center justify-center">{message}</div>
      <div className="flex items-center justify-center">
        {showEmoji ? <EmojiPicker onEmojiClick={handleEmojiClick} /> : null}
      </div>
      <div className="flex justify-center mb-[10rem] md:mb-[4rem]">
        <form
          className="flex items-center bg-gray-800 rounded-lg px-4 py-2 border border-[white]"
          onSubmit={handleSendMessage}
        >
          <button
            className="ml-2 text-white focus:outline-none"
            onClick={() => {
              setShowEmoji(!showEmoji);
            }}
          >
            <EmojiEmotionsIcon />
          </button>

          <input
            type="text"
            required
            value={message}
            placeholder="Enter message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="ml-2 text-white bg-transparent focus:outline-none rounded-l-lg py-1 px-2 w-full lg:w-96"
          />
          <div className="flex items-center">
            <button className="ml-2 text-white focus:outline-none">
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
