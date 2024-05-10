import React,{useState} from 'react'
import { Avatar,TextField,InputAdornment,IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
export default function UsersList(props) {
  const [searchText,setSearchText]=useState('');
   const [clickedIndex, setClickedIndex] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const handleSearch=async(e)=>{
e.preventDefault();
  }
  let data=[
    {
    name:"Chandan Kumar",
    profileImage:""
  },
    {
    name:"Rahul Kumar",
    profileImage:""
  },
    {
    name:"Karan Sharma",
    profileImage:""
  },
    {
    name:"Ayush Kumar",
    profileImage:""
  },
    {
    name:"Satish Verma",
    profileImage:""
  },
    {
    name:"Dest Kumar",
    profileImage:""
  },
    {
    name:"Gest Kumar",
    profileImage:""
  },
    {
    name:"Lk Kumar",
    profileImage:""
  },
    {
    name:"Vest Kumar",
    profileImage:""
  },
    {
    name:"Jest Kumar",
    profileImage:""
  },
    {
    name:"Jest Kumar",
    profileImage:""
  },
    {
    name:"Jest Kumar",
    profileImage:""
  },
    {
    name:"Jest Kumar",
    profileImage:""
  },
    {
    name:"Jest Kumar",
    profileImage:""
  },
    {
    name:"Jest Kumar",
    profileImage:""
  },

]


 const handleClick = (index) => {
  props.userClicked(true);
   setClickedIndex(index);
   props.userClicked(true);
 };
  return (
    <div className='block'>
      <div className="w-full md:w-[20rem] bg-[#0e0e0f] ">
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
              borderRadius: "10px", // Set borderRadius for the input
              border: isSmallScreen ? "2px solid red" : "1px solid red", // Set the border style
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
        className=" w-full md:w-[20rem] bg-[#0e0e0f] overflow-y-auto"
        style={{ height: "78vh" }}
      >
        {data?.map((item, index) => (
          <div
            key={index}
            className={`text-black p-0.5 cursor-pointer mt-2 ${
              clickedIndex === index ? "bg-white" : "bg-[grey]"
            }`}
            onClick={() => {
              handleClick(index);
            }}
            style={{
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={item.name}
              // src="data:image/jpeg;base64,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"
              src={item.profileImage}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginLeft: 5,
              }}
            />
            <span className="pl-4 font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
