import React from "react";
import Lottie from "lottie-react";
// import animation2 from "../../Assets/Animations/Animation2.json";
import animation2 from "../../Assets/Animations/Animation - 1707885614247.json";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export default function MobileInfo() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  // const animations = [
  //   animation,
  //   animation2
  // ];

  // // Function to generate a random index
  // const getRandomAnimationIndex = () =>
  //   Math.floor(Math.random() * animations.length);

  // // Selecting a random animation from the array
  // const randomAnimation = animations[getRandomAnimationIndex()];

  return (
    <div className="bg-[#0e0e0f] w-full overflow-hidden pt-2  flex justify-center items-center md:block">
      <div className="bg-[#0e0e0f]  h-auto">
        <div className="md:flex block mx-auto  items-center justify-center h-full">
          <div>
            {/* <div className={`${isMobile ? "hidden" : "block"}`}>
              <br />
              <br />
            </div> */}
            {/* <div className="flex items-center text-white justify-center md:justify-start">
              <KeyboardDoubleArrowLeftIcon sx={{ color: "red" }} />
              <div
                className="bg-white bg-opacity-10 border border-transparent p-2 font-bold"
                style={{ borderRadius: "150px" }}
              >
                <p className="text-[14px]">Collaboration With Chat</p>
              </div>
              <KeyboardDoubleArrowRightIcon sx={{ color: "red" }} />
            </div> */}
            <br />
            <div className="w-full flex justify-center items-center md:justify-start">
              <div className="font-bold md:text-[50px] text-[30px] font-serif text-center md:text-left">
                <span className="text-white">Introducing </span>
                <br />
                <span className="text-white">Mobile</span>
                <span style={{ color: "red" }}> Compability</span>
                {/* <br />
                <span style={{ color: "red" }}>Chat.</span> */}
              </div>
            </div>
            <br />
            <div className="text-white w-full flex items-center justify-center md:justify-start text-center p-4 md:p-0 md:text-left">
              <p>
                Our web chat app is now fully optimized for mobile devices,
                ensuring you stay connected wherever you are. Connect, chat, and
                collaborate effortlessly, anytime, anywhere!
              </p>
            </div>
            <br />
            <div
              className="flex items-center"
              style={{ justifyContent: isMobile ? "center" : "start" }}
            >
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
                    navigate("/sign-in");
                  }}
                >
                  JOIN NOW
                  <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
                </button>
              </div>
            </div>
          </div>
          <div className={`${isMobile ? "block" : "hidden"}`}>
            <br />
          </div>
          <div className="md:w-[80%] w-full md:ml-auto">
            <Lottie animationData={animation2} />
          </div>
        </div>
      </div>
    </div>
  );
}
