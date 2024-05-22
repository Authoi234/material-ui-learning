import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const HeroCard = () => {
    return (
        <Card sx={{ maxWidth: 345, p: 2 }}>
            <CardMedia
                sx={{ height: 340 }}
                image="https://www.ecologyasia.com/images-ab/blue-crested-lizard_7U1A2702_CCa.jpg"
                title="Lizard"
            />
            <CardContent sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptile
                    </Typography>
                </Box>
            </CardContent>
            <IconButton sx={{border: '1px solid black'}}>
                <AddIcon></AddIcon>
            </IconButton>
        </Card>
    );
};

export default HeroCard;