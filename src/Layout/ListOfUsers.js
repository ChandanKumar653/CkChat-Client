import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    IconButton,
    Collapse,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const BottomCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#1f1f1f',
    color: '#FCDC5A',
    // position: 'absolute',
    bottom: '0',
    width: 'inherit',
    maxHeight: '50vh', // Set the maximum height for the bottom card
    overflowY: 'auto', // Enable vertical scrolling
    '&::-webkit-scrollbar': {
        width: '0', // Remove scrollbar width
        display: 'none', // Hide scrollbar
    },
    scrollbarWidth: 'none', // Firefox scrollbar
}));
const SquareAvatar = styled(Avatar)({
    borderRadius: '8px',
    width: '48px',
    height: '48px',
});

const Contacts = () => {
    const contacts = [
        { id: 2, name: 'Jane Smith' },
        { id: 1, name: 'John Doe' },

        { id: 3, name: 'Alex Johnson' },
        { id: 4, name: 'Emily Brown' },
        { id: 5, name: 'Michael Davis' },
        { id: 3, name: 'Alex Johnson' },
        { id: 4, name: 'Emily Brown' },
        { id: 5, name: 'Michael Davis' },
        { id: 3, name: 'Alex Johnson' },
        { id: 4, name: 'Emily Brown' },
        { id: 5, name: 'Michael Davis' },
        { id: 3, name: 'Alex Johnson' },
        { id: 4, name: 'Emily Brown' },
        { id: 5, name: 'Michael Davis' },
        { id: 3, name: 'Alex Johnson' },
        { id: 4, name: 'Emily Brown' },
        { id: 5, name: 'Michael Davis' },
        { id: 3, name: 'Alex Johnson' },
        { id: 4, name: 'Emily Brown' },
        { id: 5, name: 'Michael Davis' },
        { id: 3, name: 'Alex Johnson' },
        { id: 4, name: 'Emily Brown' },
        { id: 5, name: 'Michael Davis' },
        { id: 3, name: 'Alex Johnson' },
        { id: 4, name: 'Emily Brown' },
        { id: 5, name: 'Michael Davis' },

    ];

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container direction="column" sx={{ width: "15vw" }}>
            <center>
                <Grid item>
                    <BottomCard>
                        <CardContent >
                            <Typography variant="h5" component="h2" sx={{ textShadow: '0.5px 0.5px 1px gold', color: "gold" }} >
                                Users
                            </Typography>
                            <List>
                                {contacts.slice(0, 4).map((contact) => (
                                    <ListItem key={contact.id}>
                                        <ListItemAvatar>
                                            <SquareAvatar alt={contact.name} src={`https://i.pravatar.cc/150?u=${contact.name}`} />
                                        </ListItemAvatar>
                                        <ListItemText primary={contact.name} />
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <IconButton
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more contacts"
                                style={{ color: 'white' }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <List>
                                    {contacts.slice(3).map((contact) => (
                                        <ListItem key={contact.id}>
                                            <ListItemAvatar>
                                                <SquareAvatar alt={contact.name} src={`https://i.pravatar.cc/150?u=${contact.name}`} />
                                            </ListItemAvatar>
                                            <ListItemText primary={contact.name} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </CardContent>
                    </BottomCard>
                </Grid>
            </center>
        </Grid>
    );
};

export default Contacts;
