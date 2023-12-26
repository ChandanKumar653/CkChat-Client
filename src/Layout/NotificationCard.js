import React, { useState } from 'react';
import { Card, CardContent, Typography, Switch } from '@mui/material';

const NotificationCard = () => {
    const [notificationOn, setNotificationOn] = useState(false);

    const handleNotificationToggle = () => {
        setNotificationOn((prev) => !prev);
        // Perform any actions based on notification state change here
    };

    return (
        <>
            <br />
            <Card
                variant="outlined"
                sx={{
                    width: 200,
                    height: 50,
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
                    <Typography variant="body2" sx={{ color: '#ffffff' }}>
                        Notification
                    </Typography>
                    <Switch checked={notificationOn} onChange={handleNotificationToggle} />
                </CardContent>
            </Card>
        </>
    );
};

export default NotificationCard;
