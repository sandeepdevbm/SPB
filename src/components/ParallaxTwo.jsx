import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box,Typography, Button } from '@mui/material';
import { musback, mc } from '../assets';

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
const ParallaxTwo = () => {
    const classes = useStyles();
    return (
        <Box className={classes.section} style={{ backgroundImage: `url(${musback})` }}>
            <img src={mc} style={{ height: "18rem", marginBottom: '1rem' }} />
            <Typography color={"white"} sx={{ fontSize: { sm: '30px' } }}>Registration for Music Competition</Typography>
            <Button variant="contained" color='success' sx={{ marginTop: '1rem', height: '3rem' }}>Register</Button>
        </Box>
    )
}

export default ParallaxTwo
