import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Container, Typography, Button } from '@mui/material';
import { textContentOneHeading } from '../assets/contents/textContent';
import TextContentOne from '../assets/contents/TextContentOne';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '165vh',
      margin:'3rem',
      display: 'flex',
      alignItems: 'start',
      flexDirection: 'column',
      textAlign: 'left',
    }
  }));

const ContentOne = () => {
    const classes = useStyles();
  return (
    <>
    <Box className={classes.root} style={{background:'white'}}> 
      <Typography variant="h3" sx={{fontSize: { md: '2rem',sm:'1.5rem',xs: '.9rem'}}}>{textContentOneHeading}</Typography>
          <TextContentOne/>
       </Box>
    </>
  )
}

export default ContentOne
