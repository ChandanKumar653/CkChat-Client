import React from "react";
import { useNavigate } from "react-router-dom";
// import img from '../Assets/Images/speak.png';
import { Button } from "@mui/material";
export default function NavBar() {
  const navigate=useNavigate();
  const data = [
    {
      Path: "/",
      title: "Home",
    },
    {
      Path: "/chat",
      title: "Chat",
    },
    {
      Path: "/about-us",
      title: "About Us",
    },

    {
      Path: "/contact-us",
      title: "Contact Us",
    },
    {
      Path: "/sign-up",
      title: "Sign Up",
    },
    {
      Path: "/sign-in",
      title: "Sign In",
    },
  ];
  return (
    <>
      <nav className="bg-[#0e0e0f] w-full py-2 justify-between items-center navbar">
        {/* <img src={img} alt="logo" className=" w-[50px] h-[35px] m-2"/> */}

        <ul className="list-none lg:flex hidden  justify-end items-center flex-1">
          <>
            <li className="mr-auto text-white text-[28px] font-bold shadow-2xl cursor-pointer animate-bounce w-6 h-8 custom-3d-text">
              <div>
                {/* <img src={img} alt="logo" className="ml-9"/> */}
                <p>CkChat</p>
              </div>
            </li>

            {data.map((item, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[20px] text-white ${
                  index === data.length - 1 ? "mr-0" : "mr-10 md:mr-24"
                }`}
              >
                {index === data.length - 1 ? (
                  <Button
                    variant="contained"
                    // color="error"
                    style={{
                      background: "linear-gradient(135deg, #D0312D, #FF5733)",
                    }}
                  >
                    {item.title}
                  </Button>
                ) : (
                  <button onClick={()=>{navigate(item.Path)}} className="hover:text-red-700 active:text-red-700  focus:text-red-700  font-semibold">
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </>
        </ul>
      </nav>
    </>
  );
}
