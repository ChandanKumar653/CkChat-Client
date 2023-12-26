import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, Typography, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Messages = ({ allMessages }) => {
    // console.log("Messages in other comp=", allMessages);
    // function filterUniqueById(arr) {
    //   const uniqueMap = new Map();
    //   arr.forEach(obj => {
    //     uniqueMap.set(obj.id, obj);
    //   });
    //   return Array.from(uniqueMap.values());
    // }



    const scrollRef = useRef(null);
    const [showExpandIcon, setShowExpandIcon] = useState(false);

    useEffect(() => {
        // Focus on the bottom of the scrollable container
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            setShowExpandIcon(false); // Hide expand icon after scroll
        }
    }, [allMessages]);

    useEffect(() => {
        // Check if scroll position is not at the bottom to show the expand icon
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
                setShowExpandIcon(scrollHeight - scrollTop > clientHeight);
            }
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            setShowExpandIcon(false); // Hide the expand icon after scrolling
        }
    };

    return (
        <>
            <br />
            <div style={{ position: 'relative', marginLeft: 25, marginRight: 70 }}>
                <div
                    ref={scrollRef}
                    style={{
                        // maxHeight: '80vh',
                        // overflowY: 'auto',
                        // paddingRight: showExpandIcon ? '30px' : '0', // Add padding for the icon
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        marginRight: '-15px',
                        paddingRight: showExpandIcon ? '20px' : '20px', // Add padding for the icon
                        scrollbarWidth: 'thin', // For Firefox
                        scrollbarColor: 'transparent transparent', // For Firefox
                        // For WebKit browsers (Chrome, Safari)
                        scrollbarTrackColor: 'transparent',
                        scrollbarWidth: 'thin',
                        // Styles for WebKit scrollbar
                        WebkitScrollbarWidth: 'thin',
                        WebkitScrollbarTrackColor: 'transparent',
                    }}
                >
                    <Stack direction={'column'} spacing={2}>
                        {allMessages.map((item, index) => (
                            <Card
                                key={index}
                                variant='outlined'
                                sx={{
                                    width: 'max-content',
                                    height: 'max-content',
                                    cursor: 'pointer',
                                    borderRadius: '3vh',
                                    backgroundColor: '#1f1f1f',
                                    alignSelf: item.by === 'me' ? 'flex-start' : 'flex-end',
                                    border: `1px solid ${item.by === 'me' ? 'gold' : 'white'}`,
                                    marginRight: item.by === 'me' ? '30px' : '0',
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: 'flex',
                                    }}
                                >
                                    <Typography variant='caption' sx={{ color: item.by === "me" ? '#fff' : "#FDEBA3" }}>
                                        {item.by}
                                    </Typography>
                                    <br />
                                    <Typography variant='h6' sx={{ color: item.by === "me" ? '#fff' : "#FDEBA3" }}>
                                        {item.msg.message}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </div>
                {showExpandIcon && (
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            cursor: 'pointer',
                        }}
                        onClick={scrollToBottom}
                    >
                        <ExpandMoreIcon />
                    </div>
                )}
            </div>
        </>
    );
};

export default Messages;
