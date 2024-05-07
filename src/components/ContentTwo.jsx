import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Typography, Button } from '@mui/material';
import { textContentOneHeading } from '../assets/contents/textContent';
import TextContentTwo from '../assets/contents/TextContentTwo';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '110vh',
      margin:'3rem',
      display: 'flex',
      alignItems: 'start',
      flexDirection: 'column',
      textAlign: 'left',
    }
  }));

const ContentTwo = () => {
    const classes = useStyles();
    return (
      <>
      <Box className={classes.root} style={{background:'white'}}> 
        <Typography variant="h3" sx={{fontSize: { md: '2rem',sm:'1.5rem',xs: '.9rem'}}}>{textContentOneHeading}</Typography>
            <TextContentTwo/>
         </Box>
      </>
    )
}

export default ContentTwo
