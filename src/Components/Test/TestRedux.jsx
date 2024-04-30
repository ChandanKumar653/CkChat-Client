import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { increment, decrement } from "../../Redux/Slices/TestSlice";
import { getNews } from "../../Redux/Slices/ApiSlice";

export default function TestRedux() {

  const count = useSelector((state) => state.counter);
  const data = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const [text, setText] = useState(count);
  console.log(text);

  // Handle API call when the button is clicked
  const handleApiCall = () => {
    dispatch(
      getNews({
        tag: "popular",
        language: "english",
      })
    );
  };

  // Check if the data is still loading
  if (data?.news.status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  // Check if there's an error
  if (data?.news?.status === "error") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error! {data.error}</p>
      </div>
    );
  }

  return (
    <div className="m-[40px] ">
      {data?.news?.data?.map((item, index) => (
        <div key={index} className="  grid place-content-center text-white">
          <strong>Title</strong>
          {item.title}
          <strong>Thumbnail</strong>
         <img src={item.thumbImage} alt={item.thumbImage}/>
        </div>
      ))}
      {/* {JSON.stringify(data?.news?.data)} */}
      <br />
      <br />
      <input
        type="text"
        value={count.value}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="border-black border-[1px] rounded"
      />
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="b-blue bg-blue-500 text-white rounded "
      >
        Add
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="b-blue bg-blue-500 text-white rounded "
      >
        Remove
      </button>
      <button
        onClick={handleApiCall}
        className="b-blue bg-blue-500 text-white rounded "
      >
        Api Call
      </button>
    </div>
  );
}
