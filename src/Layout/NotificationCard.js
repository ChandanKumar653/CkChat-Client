import React, { useState } from 'react';
import { Card, CardContent, Typography, Switch } from '@mui/material';

async function notifyUser(notificationText = "Thank you!! You will now recieve notification when a new user joins!") {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    } else if (Notification.permission === "granted") {
        const notification = new Notification(notificationText);
        console.log(notification);
    } else if (Notification.permission !== "denied") {
        await Notification.requestPermission().then((permission) => {
            const notification = new Notification(notificationText);
            console.log(notification);
        })
    }
}


const NotificationCard = () => {
    const [notificationOn, setNotificationOn] = useState(false);

    const handleNotificationToggle = async () => {
        setNotificationOn((prev) => !prev);
        if (!notificationOn)
            await notifyUser();

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
