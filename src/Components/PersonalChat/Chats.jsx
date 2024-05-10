import React,{useState} from 'react'
// import { Grid,InputAdornment,IconButton,TextField } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useMediaQuery } from '@mui/material';
export default function Chats(props) {

    const isSmallScreen = useMediaQuery("(max-width:600px)");

const [message,setMessage]=useState('');
const [showEmoji,setShowEmoji]=useState(false);
  const handleSendMessage=async(e)=>{
e.preventDefault();
  }
  const handleEmojiClick = (emojiObject) => {
    // console.log(emojiObject.emoji);
    setMessage(message + emojiObject.emoji);
  };
  return (
    <div
      className="bg-black flex flex-col justify-between"
      style={{ height:isSmallScreen?"93vh": "91vh" }}
    >
      <div className="flex items-center justify-center">{message}</div>
      <div className="flex items-center justify-center">
        {showEmoji ? <EmojiPicker onEmojiClick={handleEmojiClick} /> : null}
      </div>
      <div className="flex justify-center mb-[4rem]">
        <form
          className="flex items-center bg-gray-800 rounded-lg px-4 py-2 border border-[red]"
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
