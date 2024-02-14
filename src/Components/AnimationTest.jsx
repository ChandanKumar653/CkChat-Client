import React from 'react'
import Lottie from 'lottie-react'
// import animationData from '../Assets/Animations/Animation - 1707885614247.json';
import animation2 from '../Assets/Animations/Animation2.json';
// import animation3 from  '../Assets/Animations/Animation3.json';
export default function AnimationTest() {
  return (
    <>
      <div></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
        }}
      >
        {/* <Lottie animationData={animationData} /> */}
        <Lottie animationData={animation2} />

        {/* <Lottie animationData={animation3} /> */}
      </div>
    </>
  );
}
