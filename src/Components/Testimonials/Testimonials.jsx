import React from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      profileImage:
        "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain",
    },
    {
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      author: "Jane Smith",
      profileImage:
        "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      profileImage:
        "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain",
    },
    {
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      author: "Jane Smith",
      profileImage:
        "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain",
    },
   
   
  ];



  
  return (
    <div className="bg-[#0e0e0f] mt-0.5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 lg:gap-15">
          {testimonialData.map((item, index) => (
            <div
              key={index}
              style={{
                // position: "relative",
               
                background: "transparent",
                border: "2px solid rgba(255,255,255,.5)",
                borderRadius: "20px",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                backdropFilter: "blur(15px)",
              }}
              className=" hover:animate-bounce bg-opacity-0.9 bg-[#0e0e0f] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 backdrop-filter backdrop-blur-lg bg-gradient-to-b from-gray-700 to-gray-800 hover:scale-105"
            >
              <img
                src={item.profileImage}
                alt="Profile"
                className="mx-auto w-20 h-20 rounded-full border-4 border-white mb-4 transform hover:translate-y-1 transition duration-300"
              />
              <p className="text-center text-white text-sm italic">
                {item.text}
              </p>
              <p className="text-center font-semibold mt-2 text-white">{`- ${item.author}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
