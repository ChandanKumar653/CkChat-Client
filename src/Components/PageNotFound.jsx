import React from 'react'
import Lottie from 'lottie-react'
import pnf from '../Assets/Animations/PageNotFound.json';
export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%] ">
        <Lottie animationData={pnf} />
      </div>
    </div>
  );
}
