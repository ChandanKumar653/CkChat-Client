import React, { useState } from "react";
import Header from "./Header";
import UsersList from "./UsersList";
import Chats from "./Chats";
import { useMediaQuery } from "@mui/material";
import FirstScreen from "./FirstScreen";
 
export default function Index() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [clicked, setClicked] = useState(false);

  const userClicked = () => {
    setClicked(true);
  };

  const changeUserClicked = () => {
    setClicked(false);
  };

  return (
    <div>
      <Header userClicked={clicked} changeUserClicked={changeUserClicked} />
      <div className="md:flex">
        <div
          // className={`w-full ${isSmallScreen ? "w-0" : "w-1/5"}`}
          style={{
            display: clicked ? (isSmallScreen ? "none" : "block") : "block",
          }}
        >
          <UsersList userClicked={userClicked} />
        </div>

        <div
          className={`w-full ${isSmallScreen ? "w-full" : "w-full"} ${
            clicked ? "block" : "hidden"
          }  `}
        >
          <Chats />
        </div>
        <div
          className={`w-full ${
            clicked ? "hidden" : "block"
          }  `}
        >
          <FirstScreen/>
        </div>
      </div>
    </div>
  );
}
