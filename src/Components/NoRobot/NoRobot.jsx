import React from "react";
import Lottie from "lottie-react";
import animation from "../../Assets/Animations/A8.json";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import animation5 from "../../Assets/Animations/Animation - 1707885614247.json";

export default function NoRobot() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div
        className="bg-[#0e0e0f]  flex justify-center items-center "
        style={{
          // position: "relative",

          background: "transparent",
          // border: "2px solid rgba(255,255,255,.1)",
          // borderRadius: "20px",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // boxShadow: "0 2px 3px rgba(128, 128, 128, 0.5)",
          backdropFilter: "blur(15px)",
        }}
      >
        <div className="  lg:flex lg:items-center">
          <div className="lg:w-[80%] w-full">
            <Lottie animationData={animation} />
          </div>
          <div className="text-white inline-block lg:w-full m-4">
            <div className="font-bold md:text-[50px] text-[30px] font-serif ">
              <span className="text-white"> Stopping Robots</span>

              <span style={{ color: "orangered" }}> on our chat app</span>
            </div>
            <p className="text-lg leading-relaxed hidden md:block">
              Our chat app is designed with robust security measures to prevent
              automated bots from disrupting your conversations. Through a
              combination of advanced algorithms and user behavior analysis, we
              can detect and block suspicious activities in real-time.
              Additionally, we employ CAPTCHA challenges and other human
              verification techniques to ensure that only legitimate users have
              access to our platform.
            </p>
            <p className="text-md leading-relaxed mt-4">
              Rest assured that your privacy and security are our top
              priorities. By continuously monitoring and improving our anti-bot
              measures, we strive to provide you with a safe and enjoyable
              chatting experience.
            </p>

            <br />
            <div
              className="flex items-center"
              style={{
                // background: "linear-gradient(135deg, #D0312D, #FF5733)",
                background: " linear-gradient(135deg, #FF4500, #FF5733)",
                border: "1px solid #D0312D",
                borderRadius: "40px",
                color: "white",
                height: "auto",
                width: "fit-content",
                padding: "10px",
                marginRight: "30px", // Add margin between the button div and the icon div
              }}
            >
              <button
                style={{
                  borderRadius: "40px",
                  color: "white",

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
          </div>
        </div>
      </div>
    </>
  );
}
