import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Avatar,TextField,InputAdornment,IconButton, LinearProgress } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
import {addUser} from '../../Redux/Slices/PersonalChatSlice';
import { getAllUsers } from "../../Redux/Slices/GetAllUserSlice";
export default function UsersList(props) {
  const [searchText,setSearchText]=useState('');
  const dispatch=useDispatch();
   const [clickedIndex, setClickedIndex] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
   const { decoded } = useSelector((state) => state.auth.local);
 var {data,status,error} = useSelector((state) => state.getAllUser?.userData);
data = data ? [...data] : [];
//  console.log("data test=",data);
let dataIndex=data.findIndex(item => item.email === decoded.email);
if(dataIndex!==-1){
  data.splice(dataIndex, 1);
}
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

if(status==="error"){
return (<>
<p>Error {error}</p>
</>)
}




  const handleSearch=async(e)=>{
e.preventDefault();
  }
//   let data=[
//     {
//     name:"Chandan Kumar",
//     profileImage:""
//   },
//     {
//     name:"Rahul Kumar",
//     profileImage:""
//   },
//     {
//     name:"Karan Sharma",
//     profileImage:""
//   },
//     {
//     name:"Ayush Kumar",
//     profileImage:""
//   },
//     {
//     name:"Satish Verma",
//     profileImage:""
//   },
//     {
//     name:"Dest Kumar",
//     profileImage:""
//   },
//     {
//     name:"Gest Kumar",
//     profileImage:""
//   },
//     {
//     name:"Lk Kumar",
//     profileImage:""
//   },
//     {
//     name:"Vest Kumar",
//     profileImage:""
//   },
//     {
//     name:"Jest Kumar singh bahadur kundan kumar yadav",
//     profileImage:""
//   },
//     {
//     name:"Jest Kumar",
//     profileImage:""
//   },
//     {
//     name:"Jest Kumar",
//     profileImage:""
//   },
//     {
//     name:"Jest Kumar",
//     profileImage:""
//   },
//     {
//     name:"Jest Kumar",
//     profileImage:""
//   },
//     {
//     name:"Jest Kumar",
//     profileImage:""
//   },

// ]


 const handleClick = (index,name,profileImage,email) => {
  let temp={
    name:name,
    profileImage:profileImage,
    email:email
  }
  console.log(temp);
  dispatch(addUser(temp));
  props.userClicked(true);
   setClickedIndex(index);
   props.userClicked(true);
 };
  return (
    <div className="block">
      <div className="w-full md:w-[20rem] bg-gray-900 ">
        <TextField
          placeholder="Search User"
          name="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
          sx={{
            // Adjust the width of the TextField
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px", // Set borderRadius for the input
              border: isSmallScreen ? "2px solid white" : "1px solid white", // Set the border style
              margin: 2,
              // backgroundColor:"black",
              // color:"white",
              "&:hover fieldset": {
                borderColor: "transparent", // Remove the border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent", // Remove the border color on focus
              },
            },
          }}
          InputLabelProps={{
            shrink: true,
            style: { color: "whitesmoke" }, // Set color for the label
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch} edge="end">
                  <SearchIcon sx={{ color: "white" }} />
                </IconButton>
              </InputAdornment>
            ),
            style: { color: "whitesmoke" }, // Set color for the input text
          }}
        />
      </div>
      <div
        className="w-full md:w-80 bg-gray-900 overflow-y-auto"
        style={{ height: isSmallScreen ? "83vh" : "78vh" }}
      >
        {status === "loading" ? (
          <>
            <LinearProgress />
          </>
        ) : (
          <>
            {" "}
            {data?.map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-4 cursor-pointer mt-2 rounded-lg shadow-md ${
                  clickedIndex === index
                    ? "bg-white text-black hover:bg-white"
                    : "bg-gray-700 text-white"
                } hover:bg-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500`}
                onClick={() => {
                  handleClick(index, item.name, item.profileImage, item.email);
                }}
              >
                <Avatar
                  src={item.profileImage}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <span className="font-semibold">{item.name}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
