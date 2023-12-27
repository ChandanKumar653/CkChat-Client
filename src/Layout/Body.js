import React, { useState, useEffect } from 'react'
import { Grid, Divider, Tooltip, Avatar, Typography } from '@mui/material';
import GlobalChatCard from './GlobalChatCard';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { TextField, IconButton, InputAdornment, ButtonGroup, styled } from '@mui/material';
import ListOfUsers from './ListOfUsers';
import NotificationCard from './NotificationCard';
import ShareCard from './ShareCard';
import Invite from './Invite';
import io from "socket.io-client";
import Messages from './Messages';
// import { v4 as uuidv4 } from 'uuid';

export default function Body() {
    const [searchText, setSearchText] = useState("");
    const [message, setMessage] = useState("");
    // const [id, setId] = useState(uuidv4());
    const [socketId, setSocketId] = useState(null);

    // console.log("id", id);

    // const [messages, setMessages] = useState([]);
    // const [myMessages, setMyMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    // console.log(messages, myMessages);
    // function filterUniqueById(arr) {
    //     const uniqueMap = new Map();
    //     arr.forEach(obj => {
    //         uniqueMap.set(obj.id, obj);
    //     });
    //     return Array.from(uniqueMap.values());
    // }


    // console.log(messages);
    // console.log(myMessages);
    // const socket = io("http://localhost:3001");
    // const socket = io("https://ckchat-server.onrender.com/");

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Create a new socket connection when the component mounts
        const newSocket = io('https://ckchat-server.onrender.com/'); // Replace 'your_server_url_here' with your actual server URL
        // const newSocket = io('http://localhost:3001');
        setSocket(newSocket);

        newSocket.on('connect', () => {
            setSocketId(newSocket.id); // Set the socket ID when connected
        });
        return () => {
            // Disconnect the socket when the component unmounts
            if (newSocket) {
                newSocket.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        // setId(uuidv4());
        if (socket) {
            // Receive messages from the server
            socket.on('chat message', (msg) => {
                // setMessages((prevMessages) => [...prevMessages, msg]);
                // console.log("msg=", msg);
                if (msg.from !== socket.id) {
                    const updatedArray = [...allMessages, { by: 'other', msg: msg, id: socketId }];
                    setAllMessages(updatedArray);
                }
            });
        }

        return () => {
            // Clean up the event listener when the component unmounts
            if (socket) {
                socket.off('chat message');
            }
        };

    }, [socket, allMessages, socketId]);





    const sendMessage = (e) => {
        e.preventDefault();
        // setMyMessages((prevMessages) => [...prevMessages, message]);
        const updatedArray = [...allMessages, { by: 'me', msg: { message: message, from: socket.id }, id: socketId }];
        setAllMessages(updatedArray);
        socket.emit("chat message", { message: message, from: socket.id }); // Send message to the server
        setMessage("");
    };




    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    const SquareAvatar = styled(Avatar)({
        border: "2px solid gold",
        borderRadius: '20px',
        width: '50px',
        height: '50px',
    });

    const handleSearch = async () => {

    }



    return (
        <div style={{ backgroundColor: "#010101", overflowY: "auto", position: "fixed" }}>
            <Grid container sx={{ height: "100vh" }}>
                {/* <Grid item sx={{ width: "18vw", backgroundColor: "#1f1f1f", borderTopRightRadius: "3vw", borderBottomRightRadius: "3vw", overflowY: "auto", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}> */}
                <Grid item sx={{
                    width: "18vw",
                    height: "100vh", // Ensure the item takes full height

                    backgroundColor: "#1f1f1f",
                    borderTopRightRadius: "3vw",
                    borderBottomRightRadius: "3vw",
                    overflowY: "auto",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    display: 'flex',
                    flexDirection: 'column', // Arrange items vertically
                    alignItems: 'center', // Center items horizontally
                    justifyContent: 'flex-start', // Align items to the top
                    paddingTop: '20px', // Add some padding at the top for spacing
                }}>
                    <TextField
                        placeholder="Search"
                        name='search'
                        onChange={(e) => { setSearchText(e.target.value) }}
                        value={searchText}
                        sx={{
                            width: "70%", // Adjust the width of the TextField
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "10px", // Set borderRadius for the input
                                border: "1px solid gold", // Set the border style
                                '&:hover fieldset': {
                                    borderColor: 'transparent', // Remove the border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'transparent', // Remove the border color on focus
                                },
                            },
                        }}
                        InputLabelProps={{
                            shrink: true,
                            style: { color: 'whitesmoke' }, // Set color for the label
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleSearch} edge="end">
                                        <SearchIcon sx={{ color: 'grey' }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            style: { color: 'whitesmoke' }, // Set color for the input text
                        }}
                    />
                    <br />



                    <ButtonGroup sx={{ '& > *:not(:last-child)': { marginRight: '15px' } }}>
                        <Tooltip title="Chat" arrow>
                            <IconButton
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'background-color 0.3s ease-in-out',
                                    height: "6vh",
                                    width: "4vw",
                                    border: "1px solid gold",
                                    borderRadius: "20px",
                                    '&:hover': {
                                        backgroundColor: '#FDEFB5',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        bottom: '0',
                                        background: 'gold',
                                        opacity: '0',
                                        transition: 'opacity 0.3s ease-in-out',
                                        zIndex: -1,
                                    },
                                    '&:hover::before': {
                                        opacity: '1',
                                    },
                                }}
                            >
                                <ChatIcon style={{ cursor: 'pointer', color: 'gold' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Audio Call" arrow>
                            <IconButton
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'background-color 0.3s ease-in-out',
                                    height: "6vh",
                                    width: "4vw",
                                    border: "1px solid gold",
                                    borderRadius: "20px",
                                    '&:hover': {
                                        backgroundColor: '#FDEFB5',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        bottom: '0',
                                        background: 'gold',
                                        opacity: '0',
                                        transition: 'opacity 0.3s ease-in-out',
                                        zIndex: -1,
                                    },
                                    '&:hover::before': {
                                        opacity: '1',
                                    },
                                }}
                            >
                                <AddIcCallIcon style={{ cursor: 'pointer', color: 'gold' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Video Call" arrow>
                            <IconButton
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'background-color 0.3s ease-in-out',
                                    height: "6vh",
                                    width: "4vw",
                                    border: "1px solid gold",
                                    borderRadius: "20px",
                                    '&:hover': {
                                        backgroundColor: '#FDEFB5',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        bottom: '0',
                                        background: 'gold',
                                        opacity: '0',
                                        transition: 'opacity 0.3s ease-in-out',
                                        zIndex: -1,
                                    },
                                    '&:hover::before': {
                                        opacity: '1',
                                    },
                                }}
                            >
                                <VideoCallIcon style={{ cursor: 'pointer', color: 'gold' }} />
                            </IconButton>
                        </Tooltip>
                    </ButtonGroup>
                    <br />
                    <Divider style={{ width: '80%', margin: '10px 0', color: "grey", backgroundColor: "gold" }} />

                    <GlobalChatCard />
                    <br />
                    <Divider style={{ width: '80%', margin: '10px 0', color: "grey", backgroundColor: "gold" }} />
                    <ListOfUsers />
                    {/* <ul> */}
                    {/* {users.map((user) => (
                            <li key={user.id}>
                                Name: {user.name}, Age: {user.age}
                            </li>
                        ))} */}

                    {/* </ul> */}

                </Grid>
                {/* {Millde Grid body for messages} */}
                <Grid item sx={{ width: "67vw" }}>
                    <div style={{ maxHeight: "85vh", overflowY: "auto" }}>
                        <Grid >
                            <Messages allMessages={allMessages} />
                        </Grid>
                    </div>

                    <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <form onSubmit={sendMessage} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <TextField
                                placeholder="Type a message"
                                name='message'
                                onChange={(e) => { setMessage(e.target.value) }}
                                value={message}
                                sx={{
                                    width: "54vw",
                                    position: 'fixed',
                                    bottom: '0',
                                    marginBottom: 5,
                                    // Adjust the width of the TextField
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: "10px", // Set borderRadius for the input
                                        border: "1px solid gold", // Set the border style
                                        '&:hover fieldset': {
                                            borderColor: 'transparent', // Remove the border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'transparent', // Remove the border color on focus
                                        },
                                    },
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                    style: { color: 'whitesmoke' }, // Set color for the label
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={sendMessage} type="submit" edge="end">
                                                <SendIcon style={{ cursor: 'pointer', color: 'gold' }} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    style: { color: 'gold' }, // Set color for the input text
                                }}
                            />
                        </form>
                    </Grid>

                </Grid>

                <Grid item sx={{
                    width: "18vw",
                    height: "100vh",
                    backgroundColor: "#1f1e1c",
                    borderTopLeftRadius: "3vw",
                    borderBottomLeftRadius: "3vw",
                    overflowY: "auto",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    display: 'flex',
                    flexDirection: 'column', // Arrange items vertically
                    alignItems: 'center', // Center items horizontally
                    justifyContent: 'flex-start', // Align items to the top
                    paddingTop: '20px', // Add some padding at the top for spacing
                    position: "fixed",
                    right: "0"
                }}>
                    {/* <Grid item sx={{ width: "17vw", backgroundColor: "#1f1e1c", borderTopLeftRadius: "3vw", borderBottomLeftRadius: "3vw", overflowY: "auto", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}> */}
                    {/* Content for the third section */}
                    <SquareAvatar {...stringAvatar("Guest Chat")} sx={{
                        width: 60, height: 60

                    }} />
                    <br />
                    <Typography variant='caption' color={"gold"} sx={{ fontWeight: "900", textShadow: '0.5px 0.5px 1px gold', }}>{socketId}</Typography>
                    <Typography variant='caption' color={"#FEFBEC"}>Online</Typography>
                    <br />
                    <ButtonGroup sx={{ '& > *:not(:last-child)': { marginRight: '20px' } }}>

                        <Tooltip title="Audio Call" arrow>
                            <IconButton
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'background-color 0.3s ease-in-out',
                                    height: "7vh",
                                    width: "5vw",
                                    border: "1px solid gold",
                                    borderRadius: "20px",
                                    '&:hover': {
                                        backgroundColor: '#FDE37F',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        bottom: '0',
                                        background: 'gold',
                                        opacity: '0',
                                        transition: 'opacity 0.3s ease-in-out',
                                        zIndex: -1,
                                    },
                                    '&:hover::before': {
                                        opacity: '1',
                                    },
                                }}
                            >
                                <CallIcon style={{ cursor: 'pointer', color: 'gold' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Video Call" arrow>
                            <IconButton
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: "7vh",
                                    width: "5vw",
                                    border: "1px solid gold",
                                    borderRadius: "20px",
                                    transition: 'background-color 0.3s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: '#FDE37F',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        bottom: '0',
                                        background: 'gold',
                                        opacity: '0',
                                        transition: 'opacity 0.3s ease-in-out',
                                        zIndex: -1,
                                    },
                                    '&:hover::before': {
                                        opacity: '1',
                                    },
                                }}
                            >
                                <VideoCameraBackIcon style={{ cursor: 'pointer', color: 'gold' }} />
                            </IconButton>
                        </Tooltip>
                    </ButtonGroup>
                    <NotificationCard />
                    <br />
                    <Typography variant='h6' sx={{ color: "gold" }}>Bio</Typography>
                    <Typography variant='caption' color={"#FFFDD0"}>Find joy in the ordinary!</Typography>

                    <br />
                    <Typography variant='h6' sx={{ color: "gold" }}>User Name</Typography>
                    <Typography variant='caption' color={"#FFFDD0"}>{socketId}</Typography>
                    <br />
                    <ShareCard />
                    <br />
                    <Invite />

                </Grid>
            </Grid >

        </div >
    )
}
