import React from 'react';
import { Box, Typography} from '@mui/material';
import ContentOne from '../../components/ContentOne';
import ParallaxOne from '../../components/ParallaxOne';
import ContentTwo from '../../components/ContentTwo';
import ParallaxTwo from '../../components/ParallaxTwo';
import ParallaxThree from '../../components/ParallaxThree';


const LangingPage = () => {
  return (
    <Box sx={{ m: -1, p: 0 }}>
            <ParallaxOne/>
            <ContentOne />
            <ParallaxTwo/>
            <ContentTwo/>
            <ParallaxThree/>
            <Box style={{ height: '100px', background: 'red' }}>
                <Typography>helloo</Typography>
            </Box>
        </Box>
  )
}

export default LangingPage
