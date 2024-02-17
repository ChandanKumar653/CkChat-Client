import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    // ListItemText,
    AvatarGroup,
    styled,
} from '@mui/material';

const CustomCard = styled(Card)(({ theme }) => ({
    maxWidth: '30vw',
    // margin: 'auto',
    height: "auto",
    backgroundColor: '#1f1f1f',
    color: 'grey',
    padding: theme.spacing(2),
}));

const GlobalChatCard = () => {
    // Sample data for the chat messages
    const messages = [
        { id: 1, sender: 'User 1', message: '' },
        // { id: 1, sender: 'User 1', message: '' },
        // { id: 1, sender: 'User 1', message: '' },
        // { id: 2, sender: 'User 2', message: 'Hi! How are you?' },
        // Add more messages here as needed
    ];

    return (
        <CustomCard >
            {/* sx={{ marginTop: -1.1 }} */}
            <CardContent>
                <center>
                    <Typography variant="h5" component="h2" sx={{ color: "gold", textShadow: '1px 1px 2px gold', }} gutterBottom>
                        Global Chat
                    </Typography>

                    <List>
                        {messages.map((msg) => (
                            <ListItem key={msg.id}>
                                <ListItemAvatar>
                                    <AvatarGroup max={3} >
                                        <Avatar alt={msg.sender} src={`https://i.pravatar.cc/150?u=${msg.sender}`} />
                                        {/* Add more Avatar components for a group effect */}
                                        <Avatar alt={msg.sender} src={`https://i.pravatar.cc/150?u=${msg.sender + '1'}`} />
                                        <Avatar alt={msg.sender} src={`https://i.pravatar.cc/150?u=${msg.sender + '2'}`} />
                                        <Avatar alt={msg.sender} src={`https://i.pravatar.cc/150?u=${msg.sender + '3'}`} />
                                        <Avatar alt={msg.sender} src={`https://i.pravatar.cc/150?u=${msg.sender + '4'}`} />
                                        {/* ...and so on */}
                                    </AvatarGroup>
                                </ListItemAvatar>
                                {/* <ListItemText
                                    primary={msg.sender}
                                    secondary={msg.message}
                                    primaryTypographyProps={{ fontWeight: msg.sender === 'You' ? 'bold' : 'inherit' }}
                                /> */}
                            </ListItem>
                        ))}
                    </List>
                </center>
            </CardContent>
        </CustomCard>
    );
};

export default GlobalChatCard;
