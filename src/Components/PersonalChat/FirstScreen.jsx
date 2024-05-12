import Lottie from 'lottie-react';
import React from 'react'
import ChatAnimation from '../../Assets/Animations/Chat.json'
export default function FirstScreen() {
  return (
    <div className="bg-gradient-to-b from-[#0e0e0f] to-[#fff] h-full w-full overflow-hidden flex items-center justify-center">
      <Lottie animationData={ChatAnimation} style={{width:"40vw"}}/>
    </div> //#007bff
  );
}
