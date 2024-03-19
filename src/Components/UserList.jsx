import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSocket } from "../Providers/Socket";
import Avatar from "@mui/material/Avatar";

export default function UserList(props) {
  const { socket } = useSocket();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let body = {
        roomId: props.roomId,
      };
      try {
        // const res = await axios.post("http://localhost:3001/getUsers", body, {
        const res = await axios.post(
          "https://ckchat-server.onrender.com/getUsers",
          body,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQ2tDaGF0IiwiaWF0IjoxNzA5MTM1OTQwfQ.i7p3Qlsxlkwp-LxZGkeetOHJ_98Ial9SQuQXk5YV72o",
            },
          }
        );
        if (res.status === 200) {
          setData(res.data.users);
        }
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchData();

    socket.on("user-joined", fetchData);
    socket.on("user-left", fetchData);

    return () => {
      socket.off("user-joined", fetchData);
      socket.off("user-left", fetchData);
    };
  }, [props.roomId, socket]);

  return (
    <div className="flex items-center justify-center h-screen mt-[-50px]">
      <div className="h-fullflex flex-start absolute left-0 w-[200px]">
        <div className="h-full w-60 bg-gray-900 overflow-y-auto rounded-lg shadow-lg">
          <div className="bg-blue-900 text-white py-3 px-4 rounded-t-lg">
            <h2 className="text-lg font-semibold">User(s) in room: {props.roomId} </h2>
          </div>
          <div className="divide-y divide-gray-700">
            {data?.map((item, index) => (
              <div key={index} className="flex items-center p-3">
                <Avatar>{item.charAt(0)}</Avatar>
                <p className="text-white ml-2">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
