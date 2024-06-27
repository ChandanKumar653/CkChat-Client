import React from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";import {useMediaQuery} from '@mui/material';
import { useSelector } from 'react-redux';
import { Avatar, Stack, Typography,Menu,MenuItem,Tooltip } from '@mui/material';
import {useNavigate} from 'react-router-dom';
export default function Header({userClicked,changeUserClicked}) {
    const navigate=useNavigate();
      const data = useSelector((state) => state.personalChat);
      // console.log("data",data);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

const handleBackButton=async()=>{
  if(isSmallScreen&&userClicked){
         changeUserClicked(false);
  }else{
 navigate("/");
  }
}

 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };


  return (
    <div>
      <nav className="flex h-16 md:h-22 w-full bg-black border-b  border-white backdrop-blur-2xl">
        <div
          className="flex items-center ml-3 md:ml-10"
          onClick={handleBackButton}
        >
          <KeyboardBackspaceIcon className="text-white text-2xl cursor-pointer hover:text-[grey]" />
        </div>

        <div className="hidden md:flex items-center ml-3 text-2xl md:text-3xl font-bold">
          <span className="text-[white]">Ck</span>
          <span className="text-white">Chat</span>
        </div>
        {userClicked ? (
          <>
            <div className="flex items-center justify-center text-white ml-3 md:ml-[15rem]">
              <Avatar
                alt={data?.userInfo?.data?.name}
                src={data?.userInfo?.data?.profileImage}
                // src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABLEAABAwMCAgYECQcJCQEAAAABAAIDBAUREiExQQYTFFFhcSIygZEjJEJSYqGxwdEVM1Nyc+HwJSY0NkNUY4LxFjVEdJKUorPSB//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgMBAAIDAQAAAAAAAAABAhEDITESE1EUMkEE/9oADAMBAAIRAxEAPwC/Ts1dMLR9Fsh/8VcN+Sqjx/O62fqS/YrZyQCa/Wc3MNcyQtfGNgeGUm6N0c9C+ogqgBIHZ25hXL8Ell/3pJ+oEEjuc3Z6Z0p4M9JII+ltFW0Ln9aA4ZGM805vrS62TtacEtwvDq2y3Ch1Ssa4sc4uOD4qcro5HpFkia+d8vEvOfYrp1IdQ4LQRheO9DukrmVYhrPRwF67S3CGejBY4OyEQ8iS5WqnkpcmJvDmFnQiw0TBUVUtPG4l2luW525ptVDNLv3JZL0kpLLAIWwyPHcxuUXoTs6vFBZI6UMq6alaxx4FgC8p6cUtobKxtpawvJwWxhS3jpoKudxfQTuA2aHDgoYnunpnVUVOyN/zSzOByz4qMs9TS8cd1X47dNDpNXiMcS0YJUE87YC4RkeGWoi4y1EchzjPMhuB9YVbr6zUS11Tv3YWUtraySDZLzOw7Oj9uQtRX6TWBPJhp552VbnlcXbH3IcmUNOQfctJiztXsTsczWx4cCtGZg5qk0c00Uo0uI9qtNJTPqIQ7VuU/ChhEQ8kg8ktqiDUP24JpS05jzk52SytHxqTzWXI1wDvO60WZGV0Bg5KmaA4DBysttKHjYunOA2wsfluyhc7SgJHDDcoSTiiBJkYK46vJymSMB3VnCjErgMHdFt0gFhGyifD6WRwTlJ9ISf1utn7OT7Fa+Sqsn9bbb4RyfYrSu1xsSV5/lOXwaE5KSZzc5vJAdVcYljEZ+U7CiuFhppKLAaAQ1EP3fGO9wTR7fgSD3JWbDxS59GmySSPjZpe1x3aMJ90ZjmgijjkLtuOSrN2VjuuyPlHkhIKdrJxpCJNFkb1AHZvYkJjaXO1NBCfzj4v7Ena31k6IQ11LC0PcacvIwAGhVO7z9nhcZXsjGfVaSceOArtXw6zIORGMYVXtFide+kUsNWQyipG6hEzgXHv8lzcnrq4v6qVJb6m7vBYyXq/nyHj7Exi6LRRxjrAC4L0yqt1NSQMZDFhrfRGyRVEbRnY+1R9NJjFPdZKdvyG+5DT26FuwYFaKiHbKVVLBk7hLdPUU240TIHiUbNOzgOXiirFV9RV9Q93wcnA8sou6wl7HN08Rsq5TP6uojBzhrxnfhutsbuMc5qr/EQScHOyUVjPjUnmm1JAWZPEEJbXECqeo5FcYRwGFGCWnZSSPC1p2WTVE86jstiLUN1I2PJCk2GyQA9WQ7cKYN2RBYHDYLQZpbui0tICwHio3DCkkcNRWiQ5MPop2D0st/7KQ/UrOqs4/wA7aD9lJ9gVozsu9wt8EjcMXSbHcnZOyRZzc50CpnnEkX64TWR3wXsSad2DH36gmcr/AIvn6KZFMYyJTzyUMxvwmfBEwelG4+JQ7fX9iCoub+j+xKmjdyazf0ceSWR8XIMvqsjrNIGeWUq6EOf+WK1r9pHN1aT3ZwmlfC6Qu0nGEBYoJaXpcZnbdfSPa095GCuflncrfhvVg3pPebfa2aKmaNrgcnfcexUw9JKKvJFMST4twouk9sqJ7jNoiE1RjrJJ5vVZ3ADmUhtVDXC4sa4tc3O+huyz6rfs0vNwfBF6Iw7GWk7KnSV1XK8ulr3MweDW5V36fUPVOjBAGQ3h5KvUlsJ3aRh3gCjGwZS0qikkkPoVAmGcnVkH3JbWUr33HQ0YMgyrl+TGQjWG5d3pTVwhtQyQYLm5x7v3KpknLDo+s8zZ6Jun+zbodnjkJXcG/G5PNF9H/TbO5o0jIOPP/RC1/wDS5PNRndwYzV0FYwF4yp5oNIDhuCogzLsqYPwMP4LNoG1YHiudS3OGlw0nC4Ja3iUBK1608lzcBRDGoelsiAABsgy6fLHYIXTHAomeMPae9BsYWvwVURX0bIf530H7J/3K1ZVRqXael9AP8J/3K2E5PsXc4W3HZV+I/wAoVHsT5xOkquUj9dbVE9+EwJqTjq/1kwqD8T/ypZWH83j5yLqnkUR8GohBqX805Du/O+xT0RzT5Qzj8N7EyG1P5j2JdHxKYzn4L2JfHxKRhZiA52SAuKEw9uglJbrEgjb54d9y1WRGQu0nCBtwZR1EgrHAR4D2OI4PHD7Ss+WbjXjuqJvlLGwmaYAudwCQWx8L61kdOAZDknHvTTpbWA2+WqBy2NrXbdxGyotqrZHNDonMa7OXOc4D3Lmjtl6Wb/8AS4mvpqaTbVo3HcqHTVvVStYyQOHPwTa6dsqsiWR74/mhpKrlRaaiHU90MrWg7lw0p6TafS1bJIyGEZHHdJZ8zTwNZjLpMDPtUNvpZsdqe4sY127c5y1YyTrKiiaz1jKCP+pOTtNy6WGzNEDJIzjWfWA5IG4QDtb3JnTUjopHPJOXDJSqvk+NyAHKOTwsLul9fL1MOpvFIpbnN3ptc3HqXKtSKuLGWdo5crKINxlG4UTrhM45yhnLgrX4x/TH7yGivlA4hdflObHFALE/jH9D7v7HC4zHfK32yXvQTVIEvnE/q/t9TTb9L6Ef4T/uVrDlUpXhvTCjbxPUvx9StYBCtDp59EquURBq6kgcHKwPzpPkq5b8iqqs/OQBVWfzf6yLrXtbREnmEBXekIwPnIqrptVFvyCNhFSHNOCNlC/HWcFJRbUyiefhCmkZUfms+CXs4lG1B+B9iAjO5TCCYhrnZSyudG4EEgc8eKPqo3SF2k8lXLrR1DWFzXJGJkfDNb3xP0vDG6HN/SMznHs3wq/B0WoI6iIOG7PSimZvt7Vumpp3vEb3lgc4Au7hlGzGqs9c2jr2tOknSR6pHePP6lyZ42ZbdfHluao67VNdQ0zRE+LTp9YQjP8AGwVLuXXVcxlqZnyajkgnb3BW26zRyU7mPeCAPR33IVNkqIYcuJBB7yjdsX0BvFT2ekLRtr2IA5Jb0e+Gv9PK/wDNRO2HIHBwub5W9tmZFBxG/kpaNgo4YtJ3bv5lVOmd7q9CeJzi0EZwq7WQg10hRdoMdU01EMhcCMHwPcULVau3PylyeDjKrtGBTOIVTed1b7y4CmdhU5xySq4PEc3rgrjG6kPBcc1uxZhbwsyuuKYaC6auSumlKh9N1tUKfplQEjYxuB+pXSKdkgzyXn15Bk6Z29jOGh33K6U8bmjB4KdnMdzaatqmwRucN9uCrtmqO0vnl73J1WNAjfn5pSGw4DJcfPVbKwzlbrliH0kxrG4pHD6KVzydVLE76SYVc2aPPeEqANJ/R/eoXtex+XDZTUZxBlD3+pNPbXSsHpAJpT1Ug6rY7YQMb9ykFLf+ugHWnBymdJUtlGWkFVAJLhk6iB7UNVtjMZLntQ1eHu1aH6dlUaytrH1Yo4agPlPyW7kDvPcEwsDAySZ4Y0ODGlxx4DZPbu2kutOzrQHxSASMeDgtJ5gqvWd0UVA4RO1y6vSeTu7fHuQ1lupilltE7vSp3ZhPfGdx7uCy58LJK1/585crC7pJ0buVHH2ilqRLF9MYcqJU0dW4ObKQ0Hj3r2uSVlVA+GRwIcMHK85ucBbVPjcc6TjK5sLXTlirNHSCJ4wDvxJ4lGTgRwuJHAI6Cn9Mk8kDdMkshbxc7BVTdqL1Alnuc1smc5vpRuxqYeaaGuiq5nSxHA4EO2IVckw6V2nhnZdF4ZJjfcLoy4pk58eW40yuw10rt8+SqJY7J9EqyxPIBAGpru8ruOkiJOoBvmFEwvHOlXOcnqr6T3H3LnSc8CrUbdDI4tiLXO8iAs/JjWD0mbpXO4+w5hL4q3Vv+afcthj8eqVbI6WLSA5gUhoYdPqhT/IX+CqgWHmCsDHdys8tvYdwFBFRs14I+pH5x+GveTD13Tem+hA4/WFcwzTw4KnQE/7cx44dmOfeFds8Frpjug65pdE/Azsq5ZRjrwfnq01MzYonl2BtxKrlteyV874/VL9k4VbucmhrD9JGVT80DUuvX5tnmpp5gKBoz3IpbT021KhrjH2ilkj45ARFOfirfELT2eiXE4GFWieR9IY6q3Vzo2Nd1ZOxT/ozWEUw604JGN1J0zqaOKXNSHPOMiNvEjz5Kt2yrLRJ1IAc9pBI4NbngPcrxwtTctGvSnpN2QS01Hh05Hrng1Iuj9R1NDWkODqiVuXSHjhIK6oNXTTzEZe08+7KMs7i0N39F4xwWmM7RlelgsVeGdVGDnUzHuc5DdIzLTVdPcKbOtgwfpDPApVQyPjhhe07sL//AGFWSRjKumLXcCM7+SvKfWOkTL5ylGWm9tqqdkrHZDhuDyUNxMchc7SN1TYZZLVcQwnEMm57sqwGpMu2dyvNyw+a9PHL6x2ja0RxvkdsEklBklmnPCNh0+af1jHCiw1u54JVXsNPRiMN3LdyDnfiVpw497rLmy60rcA1bnjndbnI66IA8l3TDIGDvnC6qQOthOc7Fb+uZ1AAXekOCJ14OG7d6gpd8kqfSOJ5qtdFb2mp3EO5eGQiZZG4y7fw4IWIYcc8MZC6kaC3jlGWMs7PHKy9O2aZHHSCAO9ECMYygah3VNjjBJe/cnwRHaWCManYOOC8/n4fm7ju4Ob6mq7dxwFG1gD8lRdpjz6yztEfzlhqxvuPZIattP0+ja87PpnD6wrjJWxtla3v8V5peZdPTeDwhJ+xWOGpdI7jwHNd9rzrTrpDK00Mml3ycpP0ZPxEnxWrlPmhlBPyStdGD/J4Piielvaa9ZLYw0EkngEPWtl6lgbnlsjqzPaIgOaOqWRxw6n4yr0VDQPayjaHnfCrt/6R9jfTwNb6E/WfCE7N0jh5nKluNw63VFFsM4JVL6UNfW2l7It56SYyFvNze77PctMMdpyugNdI6v0zVRBM0jWYPyRn/VKaKc0tVURP20tcB4IkVkc1LA5u41Nd7uPtQd7AZP2hhbiQYPmFoj0ut51mojcchxKLs0hZI6nk3LDsltE/RUuI5lHvBZVRVDOBOkoxosHvMcJAc5jQDIHN1b8c8F3Le3ZEdHGXy7Ye4YY0+XPiVDXbztkYAdbOZ8CPwULAyNvWs4a8DCf+jyIGPfU0gFdIXSl50zHbS4/Jd4Z9yYdHzPW1BhZG4yx7Pa4gaT4oSdje2TQOAEU7esb7f3qLtEtEe2McRUlpjZpyC44wST3AfXhY8nFK14uWxYK+70tPpxWU7nRElwDs7jgPH9yp1wrJq+sY+HUyOEYb3k8yf44LilpA1wc4Zx6Tj3oyliApnyOHI4Txw1Cyztrlh0gEs0nYjT/HgslxUGF0LHNa0O3dzyi3xDsOrnhRwRObE0t5qvlMqKkacKaYaZGDOwH3LuniIc3hzXfVA1Ia53EE8E4mskIjhc4+Xl/GQooniWYuJwxjQT5Lu9Hq6eOKIZfJIMDmVx1PVsbTs3c7eQ/cle6qdRg1SF9Q4Y5NQlwGIOsGfQ3J8EyqGiOOOEbl3pexC1cWumkjO5c0/uUZ4qwuqrnXyB2Mlb66fxUtsa2SoAcMhWI0UYGzFhdN5uvRrs4O6cRg/oirNSR4dvzVerqGud00EzaCqMQjxrELtPvwn4jrgWhtLOB+zKNXfTKt3VgFJLjuUnRja3geKPjtMs0Pw7HZI7lGKeShgMcVPNkcMMO6uQnF1qGUskUjvJQ3SvdPEAzZvek1wjuVVVsLqOq0A/oXfgjZKWrMQApZ+H6MrSFfSG6yugttVKz1mxOwfqSftTZmwVUBGsxguYeDxzVlntdXUQzQvo6jTJG9ueqd3bclSbbbLvCx9JLa68OhcdD+ySYI8Dha4WMs5Sa6R9huckcZxTTemwfNJ4haqCKildk6hryfaP3JvdLJda2At/Jdd1zN2u7NJv8AUl9FaLw8PjfZ7i1zm4yaOQbj/KldKmyWKMdY/BwQmT2gU4cTncLcNjvIqnuNluWO/scn/wAo6Wy3c0uBabgTkbdlk/BGOhdoa0gU0BxvhcyDVSHHJwKMq7NdzTU4babgSBuBSP2+pdttF26og2qvzjh2WT8FW4WqUXF2qnp5s7sfpPkhbi4yzQs4DTx8SU3dY7xJQVERtNw1H0mg0knH3IR9jvL2QONnuWrDf+Ek2335Kcuzm4FcA2llI5t0j34U0jOqt+k88Iursd47OALRcXEuHCkkPPyU1TZbu6la1tpuBOobClk/BG5otUJK3VQuHINXFG4OgaCeCcx2S6upnNNrr/8AtZPwS5ljvMTn6bRcSP8AlJPwTtg1XOkast4rBETVwHmRujqaz3aQAutNwbjvpZB9yKbZrp2iN35Lr8AcezP/AATlgpJUaJLsA/8Ash6Pmf4Kkp2B1VK88tiVkdovUl4llfZ7kIxu0mjkwfqR0tluzYOrjtVfqmdhzm0r9hzzslLBZYVsxLI+odtHwb5clFJq3eRgZTt1iug0sba68RtH92f+CEnst24i0XE7/wB0k/BTdVU2qdJGYLkWYw0HZWmNwI3Q8PR28OqRI6z3EDB40kn4Ji2zXcZd+SbhnP8AdZPwXLl66sPH0yFtYsVs2hxW1ixAaW1ixAcrftWLEBDVSOigke3i1jiM+Ayoe0PFtbUbF5ja7fhkgfisWICSlmdNFrdgHU4beBIXRkcKlke2l0bne0EfisWICOad7K2nhGNEjXk+zGPtROPErFiA2R4lV673yqoqmtjiZCRTwxPaXA7lz8HO6xYgO6281FPWRwMZEWungjJIOcPBJ5+GyDg6R1kjqdrooMSGpzhrv7MEt5+G6xYgB5elVcym60Q02o0EdR6rsanOwR63BP7ZXzVdfcKeQMDad7AwtG5y0E5960sQDQLFixAYsW1iAxYsWIDFixYgP//Z"
              />
              <Typography
                color={"white"}
                style={{
                  paddingLeft: "0.5rem",
                  fontWeight: "700",
                  fontSize: isSmallScreen ? "small" : "larger",
                }}
              >
                {data?.userInfo?.data?.name}
              </Typography>
            </div>

            <div className="flex items-center justify-end text-white font-bold ml-auto mr-8 md:mr-14 space-x-4 md:space-x-6">
              <Tooltip title="Audio Call">
                <CallIcon
                  style={{ height: "5vh", width: "5vw", cursor: "pointer" }}
                />
              </Tooltip>

              <Tooltip title="Video Call">
                <VideoCallIcon
                  style={{ height: "5vh", width: "5vw", cursor: "pointer" }}
                />
              </Tooltip>
              <Tooltip title="Profile">
                <AccountCircleIcon
                  style={{ height: "5vh", width: "5vw", cursor: "pointer" }}
                />
              </Tooltip>
              <Tooltip title="More">
                <MoreVertIcon
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ height: "5vh", width: "5vw", cursor: "pointer" }}
                />
              </Tooltip>
            </div>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={()=>{localStorage.removeItem("ckChatLoginToken");console.log(localStorage.getItem("ckChatLoginToken"))}}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <div className="md:hidden text-white flex items-center justify-center mx-auto ">
              <p className="text-2xl font-bold">Users List</p>
            </div>
            <div className="flex items-center justify-end text-white  ml-auto">
              <Stack style={{ gap: "25px" }} direction={"row"}>
                <Tooltip title="Profile">
                  <AccountCircleIcon
                    style={{
                      height: isSmallScreen ? "4vh" : "5vh",
                      width: isSmallScreen ? "4vh" : "5vh",

                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
                <Tooltip title="More">
                  <MoreVertIcon
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    style={{
                      height: isSmallScreen ? "4vh" : "5vh",
                      width: isSmallScreen ? "4vh" : "5vh",
                      marginRight: isSmallScreen ? "4vw" : "4vw",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Stack>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
