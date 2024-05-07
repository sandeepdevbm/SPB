import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box,Typography, Button } from '@mui/material';
import { musback, mc, san } from '../assets';

const useStyles = makeStyles((theme) => ({
    section: {
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }
}));
const ParallaxThree = () => {
    const classes = useStyles();
    return (
        <Box className={classes.section} style={{ backgroundImage: `url(${musback})` }}>
            <img src={san} style={{ height: "18rem", marginBottom: '1rem' }} />
            <Typography color={"white"} sx={{ fontSize: { sm: '30px' } }}>Book your tickets for Awar Night</Typography>
            <Button variant="contained" color='success' sx={{ marginTop: '1rem', height: '3rem' }}>Book</Button>
        </Box>
    )
}

export default ParallaxThree
