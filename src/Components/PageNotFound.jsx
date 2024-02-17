import React from 'react'
import Lottie from 'lottie-react'
import pnf from '../Assets/Animations/PageNotFound.json';
export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center bg-[#0e0e0f] h-screen">
      <div className="w-[70%]">
        <Lottie animationData={pnf} />
      </div>
    </div>
  );
}
