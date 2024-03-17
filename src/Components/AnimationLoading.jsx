import React from "react";
import Lottie from "lottie-react";
import animation from "../Assets/Animations/A8.json";
import animation1 from "../Assets/Animations/A9.json";
// import animation2 from "../Assets/Animations/A4.json";
import animation3 from "../Assets/Animations/A5.json";
import animation4 from "../Assets/Animations/A6.json";
 import animation5 from "../Assets/Animations/Animation - 1707885614247.json";

export default function AnimationLoading() {
  const animations = [
    animation,
    animation1,
    // animation2,
    animation3,
    animation4,
animation5
  ];

  // Function to generate a random index
  const getRandomAnimationIndex = () =>
    Math.floor(Math.random() * animations.length);

  // Selecting a random animation from the array
  const randomAnimation = animations[getRandomAnimationIndex()];

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-[50%]">
        <Lottie animationData={randomAnimation} />
      </div>
    </div>
  );
}
