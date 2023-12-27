import React, { useState } from 'react';
import { Card, CardContent, Typography, Switch } from '@mui/material';

async function notifyUser() {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    } else if (Notification.permission === "granted") {
        // const notification = new Notification(notificationText);
        new Notification("Already enabled permission in this browser!");
        // console.log(notification);
        // return;
    } else if (Notification.permission !== "denied") {
        await Notification.requestPermission().then((permission) => {

            // const notification =
            new Notification("Notification enabling successful");
            // console.log(notification);

        })
        // let reg = 
        await registerSW();
        // console.log(reg);
        // reg.showNotification("Registered");
    }
}


const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration;
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
