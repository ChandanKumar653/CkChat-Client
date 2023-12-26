import React, { useState } from 'react';
import { Card, CardContent, Typography, Switch } from '@mui/material';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import MailIcon from '@mui/icons-material/Mail';
const Invite = () => {
    const [notificationOn, setNotificationOn] = useState(false);

    const handleShareToggle = () => {
        setNotificationOn((prev) => !prev);
        // Perform any actions based on notification state change here
    };

    return (
        <>
            <br />
            <Card
                variant="outlined"
                sx={{
                    width: 150,
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
                        Invite&nbsp;&nbsp;
                    </Typography>
                    {/* <Switch checked={notificationOn} onChange={handleNotificationToggle} /> */}
                    <MailIcon onClick={handleShareToggle} style={{ cursor: 'pointer', color: 'gold' }} />
                </CardContent>
            </Card>
        </>
    );
};

export default Invite;
