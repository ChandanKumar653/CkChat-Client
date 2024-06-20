import React,{ useState} from 'react'
// import { Grid,InputAdornment,IconButton,TextField } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import { Tooltip } from '@mui/material';
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
// import { useMediaQuery} from '@mui/material';
import { useSelector } from 'react-redux';
// import {makeTrueOrFalse} from '../../Redux/Slices/PersonalChatSlice';
// import { useDispatch } from 'react-redux';
import Lottie from 'lottie-react';
import Loading from "../../Assets/Animations/Loading.json";

import Loading1 from '../../Assets/Animations/Loading1.json';
import Loading2 from '../../Assets/Animations/Loading2.json';
export default function Chats() {
  // const dispatch = useDispatch();
  // const isSmall = useMediaQuery("(max-width:600px)");
  // const isSmallScreen = useMediaQuery("(max-height:600px)");
  // const screenHeight = isSmallScreen ? 400 : 600;

  // const messageCount = Math.ceil(screenHeight / 40);

  // const data = useSelector((state) => state.personalChat);
  const users = useSelector((state) => state.getAllUser?.userData);

  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const handleSendMessage = async (e) => {
    e.preventDefault();
  };
  const handleEmojiClick = (emojiObject) => {
    // console.log(emojiObject.emoji);
    setMessage(message + emojiObject.emoji);
  };

  // const colors = ["#A52A2A", "#007bff"];
  // const getColor = () =>
  //   Math.floor(Math.random() * colors.length);

//   useEffect(() => {
//     // dispatch(makeTrueOrFalse("loading"));

//     // const delay = 2000;
//     // setTimeout(() => {
//     //   dispatch(makeTrueOrFalse("success"));
//     // }, delay);
// dispatch(getAllUsers());
//   }, [dispatch, data?.userInfo?.data]);

  const animations = [Loading, Loading2, Loading1];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Shuffle the animations array
  shuffleArray(animations);

  // Function to get a random animation from the shuffled array
  const getRandomAnimation = () =>
    animations[Math.floor(Math.random() * animations.length)];

  // Example usage:
  const randomAnimation= getRandomAnimation(); // Get a random animation

  if (users?.status === "loading") {
    return (
      <div className="h-screen md:h-full flex items-centern justify-center ">
        <Lottie animationData={randomAnimation} style={{ width: "30vw" }} />
      </div>
    );

    // const positions = Array.from(
    //   { length: messageCount },
    //   () => Math.random() < 0.4
    // );

    // return (
    //   <Grid
    //     container
    //     spacing={2}
    //     style={{
    //       height: "90vh",
    //       overflowY: "auto",
    //       marginTop: "5px",
    //       // backgroundColor: "#2C2D2D",
    //     }}
    //     className="bg-gradient-to-b from-[#0e0e0f] to-[grey]"
    //   >
    //     {[...Array(messageCount).keys()].map((index) => (
    //       <Grid key={index} item xs={12}>
    //         <Grid
    //           container
    //           justifyContent={positions[index] ? "flex-end" : "flex-start"}
    //         >
    //           <Grid item>
    //             <Skeleton
    //               variant="rectangular"
    //               height={isSmall?30:40}
    //               width={isSmall?100:200}
    //               sx={{
    //                 bgcolor: "rgba(255, 255, 255, 0.7)",
    //                 marginLeft: "10px",
    //                 marginRight: "10px",
    //                 borderRadius: "10px",
    //               }}
    //             />
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     ))}
    //   </Grid>
    // );
  }

  return (
    <div
      className={`bg-gradient-to-b from-[#0e0e0f] to-[#fff] flex flex-col justify-between md:h-[100%] h-screen`}
      // style={{ height: isSmallScreen ? "93vh" : "91vh" }}
    >
      <div className="flex items-center justify-center">{message}</div>
      <div className="flex items-center justify-center">
        {showEmoji ? (
          <>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </>
        ) : null}
      </div>
      <div className="flex justify-center mb-[10rem] md:mb-[4rem]">
        <form
          className="flex items-center bg-gray-800 rounded-lg px-4 py-2 border border-[white]"
          onSubmit={handleSendMessage}
        >
          <div
            className="ml-2 text-white focus:outline-none cursor-pointer"
            onClick={() => {
              setShowEmoji(!showEmoji);
            }}
          >
            <Tooltip title="Emoji">
              <EmojiEmotionsIcon />
            </Tooltip>
          </div>
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
              <Tooltip title="Send">
                <SendIcon />
              </Tooltip>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
