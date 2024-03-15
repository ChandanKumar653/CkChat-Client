import React from "react";

const Test1 = () => {
  return (
    <div className="bg-blue-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Jharkhand Government
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Empowering the State, Empowering You
          </p>
          <button className="bg-white text-blue-900 py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-75 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://s3-us-west-2.amazonaws.com/rustik-images/wp-content/uploads/2020/07/22165116/Jharkhand_Rustik-Travel_1349x550.jpg"
            alt="Jharkhand Government"
            className="mx-auto"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Test1;
