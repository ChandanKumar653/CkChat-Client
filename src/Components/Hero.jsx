import React from 'react'
import Lottie from "lottie-react";
import animation2 from "../Assets/Animations/Animation2.json";
import animation from "../Assets/Animations/Animation - 1707885614247.json";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useNavigate } from 'react-router-dom';
export default function Hero() {
    const navigate=useNavigate();

      const animations = [
        animation,
        animation2
      ];

      // Function to generate a random index
      const getRandomAnimationIndex = () =>
        Math.floor(Math.random() * animations.length);

      // Selecting a random animation from the array
      const randomAnimation = animations[getRandomAnimationIndex()];



  return (
    <div className="bg-[#0e0e0f] h-screen">
      <div className="block md:flex">
        <div>
          <br />
          <br />
          <br />
          <br />

          <div className="flex items-center text-white ">
            <KeyboardDoubleArrowLeftIcon sx={{ color: "red" }} />
            <div
              className="bg-white bg-opacity-10 border border-transparent p-2 font-bold"
              style={{ borderRadius: "150px" }}
            >
              <p className="text-[14px]">Collaboration With Chat</p>
            </div>
            <KeyboardDoubleArrowRightIcon sx={{ color: "red" }} />
          </div>

          <br />

          <div className="font-bold md:text-[50px] text-[30px] font-serif ">
            <span className="text-white">We are Digital</span>
            <br />
            <span className="text-white">Creative</span>
            <span style={{ color: "red" }}> Web</span>
            <br />
            <span style={{ color: "red" }}>Chat.</span>
          </div>

          <br />

          <div className="text-white w-[80%]">
            <p>
              This is a modern chat app which do not records or stores any
              history. So you don't have to worry about privacy anymore.
            </p>
          </div>

          <br />
          <div className="flex items-center">
            <div
              className="flex items-center"
              style={{
                background: "linear-gradient(135deg, #D0312D, #FF5733)",
                border: "1px solid #D0312D",
                borderRadius: "50px",
                color: "white",
                height: "auto",
                width: "fit-content",
                padding: "10px",
                marginRight: "30px", // Add margin between the button div and the icon div
              }}
            >
              <button
                style={{
                  borderRadius: "50px",
                  color: "white",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => {
                  navigate("/about-us");
                }}
              >
                KNOW MORE
                <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
              </button>
            </div>
            <div>
              <PlayCircleFilledIcon
                onClick={() => {
                  navigate("/watch-video");
                }}
                style={{
                  fontSize: "3rem",
                  backgroundColor: "red",
                  color: "white",
                  border: "1px solid red",
                  padding: "4px",
                  borderRadius: "30%",
                  cursor: "pointer",
                }}
              />
              &nbsp; &nbsp;
              <span className="text-white"> Watch Video</span>
            </div>
          </div>
        </div>
        <div className="md:w-[80%] sm-w[100%] md:ml-auto">
          <Lottie animationData={randomAnimation} />
        </div>
      </div>
    </div>
  );
}
