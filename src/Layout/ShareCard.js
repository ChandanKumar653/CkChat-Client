import React from 'react';
import { Card, CardContent, Typography, } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const ShareCard = () => {

    function handleShare() {
        window.open('whatsapp://send?text=Experience the global chat without the fear of tracking or history with CkChat!! https://ckchat.netlify.app/');
    }

    return (
        <>
            <br />
            <Card
                variant="outlined"
                onClick={handleShare}
                sx={{
                    width: 100,
                    height: 20,
                    cursor: 'pointer',
                    border: '1px solid gold',
                    borderRadius: '8px',
                    backgroundColor: '#1f1f1f',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    paddingTop: 2
                }}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px',
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#fff' }}>
                        Share&nbsp;&nbsp;
                    </Typography>
                    {/* <Switch checked={notificationOn} onChange={handleNotificationToggle} /> */}
                    <WhatsAppIcon style={{ cursor: 'pointer', color: 'gold' }} />
                </CardContent>
            </Card>
        </>
    );
};

export default ShareCard;
