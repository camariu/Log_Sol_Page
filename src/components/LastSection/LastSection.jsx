import { Box, Button, useTheme, Typography } from '@mui/material';
import React from 'react';
import buySvg from "../../assets/svg/Buy.svg"

export default function LastSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: '#1D1260',
        [theme.breakpoints.down('sm')]: {
            height:"612px"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height:"655px"
        },
        [theme.breakpoints.up('md')]: {
          height:"731px"
        },
      }}
    >
      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {
            display: ' flex',
            flexDirection: 'column',
            justifyContent:"center",
            alignItems:"center"
          },
          [theme.breakpoints.between('sm', 'md')]: {
            display: ' flex',
            flexDirection: 'column',
          },
          [theme.breakpoints.up('md')]: {
            display: ' flex',
          },
        }}
      >
        <Box>
          <Box>
            <Typography variant="h4"  sx={{
                color:"#fff",
          [theme.breakpoints.down('sm')]: {
            width:"213px",
            height:"84px",
            fontSize:"28px",
            paddingTop:"203px"
          },
          [theme.breakpoints.between('sm', 'md')]: {
            
          },
          [theme.breakpoints.up('md')]: {
            
          },
        }}>Let's get it now robot sally</Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{
                color:"RGBA(255,255,255,0.7 )",
          [theme.breakpoints.down('sm')]: {
            width:"333px",
            height:"73px",
            fontSize:"14px",
            paddingTop:"16px"
          
          },
          [theme.breakpoints.between('sm', 'md')]: {
            
          },
          [theme.breakpoints.up('md')]: {
            
          },
        }}>
              Make your video experience amazing and join thousands of satisfied
              customers already using robot sally
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
          sx={{
            [theme.breakpoints.down('sm')]: {
              
                paddingTop:"32px"
              
              },
              [theme.breakpoints.between('sm', 'md')]: {
                
              },
              [theme.breakpoints.up('md')]: {
                
              }
          }}>
            <Button
              color="inherit"
              sx={{
                color:"white",
                padding: '12px',
                backgroundColor: '#F57438',
                width: '343px',
                height: '56px',
                '&:hover': {
                  backgroundColor: 'rgba(245, 116, 56, 0.8)',
                },
              }}
            >
              <img
                src={buySvg}
                alt=""
                style={{ marginRight: '15px', color: 'red' }}
              />
              Preorder Now
            </Button>
          </Box>
          <Box>
            {' '}
            <Typography variant="body1" sx={{
                color:"RGBA(255,255,255,0.7 )",
          [theme.breakpoints.down('sm')]: {
            width:"337px",
            height:"47px",
            fontSize:"14px",
            paddingTop:"32px"
          },
          [theme.breakpoints.between('sm', 'md')]: {
            
          },
          [theme.breakpoints.up('md')]: {
            
          },
        }}>
              Sally's robot is only made limited, so who's quick he gets
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
