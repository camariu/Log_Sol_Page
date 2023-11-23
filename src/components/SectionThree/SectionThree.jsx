import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import flashIcon from '../../assets/svg/flashIcon.png';

export default function SectionThree() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection:"column",
          justifyContent: "center",
         
        },
        [theme.breakpoints.between('sm', 'md')]: {
          display: 'flex',
          flexDirection:"column",
          justifyContent: "center",
        },
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          gap:"285px",
          alignItems: 'center',
        },
      }}
    >
      <Box
       sx={{
        [theme.breakpoints.down('sm')]: {
         width:"340px"
        },
        [theme.breakpoints.between('sm', 'md')]: {
          width:"350px"
        },
        [theme.breakpoints.up('md')]: {
         marginLeft:"125px"
        },
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{
            [theme.breakpoints.down('sm')]: {
              fontSize:"20px",
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize:"30px",
            },
            [theme.breakpoints.up('md')]: {
              fontSize:"50px",
              
            },
          }}>See the latest </Typography>
          <img src={flashIcon} alt="" style={{marginLeft:"25px"}}></img>
        </Box>
        <Typography variant='h4' sx={{
            [theme.breakpoints.down('sm')]: {
              fontSize:"20px",
              paddingBottom:"30px"
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize:"30px",
              paddingBottom:"32px"
            },
            [theme.breakpoints.up('md')]: {
              fontSize:"50px"
            },
          }}>updated version</Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            [theme.breakpoints.down('sm')]: {
              width:"340px",
              height:"96px",
              fontSize:"16px",
              paddingBottom:"64px"
            },
            [theme.breakpoints.between('sm', 'md')]: {
              width:"350px",
              height:"98px",
              fontSize:"17px",
              paddingBottom:"65px"
            },
            [theme.breakpoints.up('md')]: {
              width:"477px",
              height:"111px",
              fontSize:"18px"
            },
          }}
        >
          Update your system to the latest Version 2.3 with a technology version
          using the new RTX-1134 processor for a much better experience
        </Typography>
      </Box>
    </Box>
  );
}
