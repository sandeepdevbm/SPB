import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box,Typography, Button } from '@mui/material';
import { musback, mc, mw } from '../assets';

const useStyles = makeStyles((theme) => ({
    section: {
        height: '80vh',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }
}));
const ParallaxOne = () => {
    const classes = useStyles();
    return (
        <Box className={classes.section} style={{ backgroundImage: `url(${mw})` }}>
            {/* <img src={mc} style={{ height: "18rem", marginBottom: '1rem' }} /> */}
            <Typography color={"white"} sx={{ marginRight:'7rem', fontSize: {md:'3rem', xs: '1.5rem' } }}>Voice Of SPB <br/>Season 2</Typography>
            {/* <Button variant="contained" color='success' sx={{ marginTop: '1rem', height: '3rem' }}>Register</Button> */}
        </Box>
    )
}

export default ParallaxOne
