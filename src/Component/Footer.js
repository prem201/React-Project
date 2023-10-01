import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div><Box sx={{bgcolor:'black', textAlign:'center' , color:'white' , variant:'h5' ,p:3}}>
        <Box sx={{my:2 , '& svg':{
            fontSize:'3rem',
            cursor:'pointer',
            mr:'2rem'
        },'& svg:hover':{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition: 'all 400ms'
        }}}>
         {/*icons*/}
         <InstagramIcon/>
         <TwitterIcon/>
         <GitHubIcon/>
         <YouTubeIcon/>
        </Box>
        <Typography sx={{"@media (max-width:600px)":{
            fontSize:'1rem'
        }}}>
            All rights reserved &copy; Restaurant
        </Typography>
        </Box></div>
  )
}

export default Footer