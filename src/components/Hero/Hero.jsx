import { Button, Typography, TextField, useTheme, Box } from '@mui/material';
import React from 'react';

import cipIcon from '../../assets/svg/CipIcon.svg';
import hardIcon from '../../assets/svg/HardIcon.svg';
// import mickiImage from '../../assets/images/mickiImage.png';
// import spiral from '../../assets/images/Pattern.png';

export default function Hero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: '#1D1260',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        [theme.breakpoints.between('sm', 'md')]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        [theme.breakpoints.up('md')]: {},
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            [theme.breakpoints.down('sm')]: {
              fontSize: '40px',
              width: '343px',
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize: '50px',
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '70px',
              marginLeft: '125px',
              paddingTop: '107px',
            },
          }}
        >
          make your <br /> personality into <br /> technology.
        </Typography>
      </Box>
      <Box
        sx={{
          color: 'RGBA(255,255,255,0.7 )',
          marginTop: '11px',
          [theme.breakpoints.down('sm')]: {
            width: '343px',
            height: '84px',
            fontSize: '14px',
          },
          [theme.breakpoints.between('sm', 'md')]: {
            width: '422px',
          },
          [theme.breakpoints.up('md')]: {
            width: '522px',
            height: '78px',
            marginLeft: '125px',
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'RGBA(255,255,255,0.7 )',
            marginTop: '11px',
          }}
        >
          Robot technology is faster with the latest systems that make it
          possible your partner and ready to serve your needs. EnttTer email to
          get product launch information
        </Typography>
      </Box>
      <Box>
        <form>
          <TextField
            sx={{
              [theme.breakpoints.down('sm')]: {
                marginTop: '52px',
                width: '343px',
                height: '54px',
              },
              [theme.breakpoints.between('sm', 'md')]: {
                marginTop: '60px',
                width: '400px',
                height: '65px',
              },
              [theme.breakpoints.up('md')]: {
                marginLeft: '125px',
                marginTop: '57px',
                width: '497px',
                height: '80px',
                '& label': {
                  color: 'white',
                  marginTop: '12px',
                },
              },
              '& label.Mui-focused': {
                color: 'white',
              },
              '& label': {
                color: 'white',
              },
              '& .MuiInputBase-root': {
                backgroundColor: '#3F2EA3',
                height: '80px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue',
              },
            }}
            label="Enter your email address"
            fullWidth
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#F57438',
                    [theme.breakpoints.down('sm')]: {
                      width: '78px',
                      height: '34px',
                    },
                    [theme.breakpoints.up('md')]: {
                      width: '106px',
                      height: '48px',
                    },
                  }}
                >
                  Submit
                </Button>
              ),
            }}
          />
        </form>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            [theme.breakpoints.down('sm')]: {
              width: '314px',
              marginTop: '45px',
              marginBottom: '443px',
            },
            [theme.breakpoints.between('sm', 'md')]: {
              width: '314px',
              marginTop: '45px',
              marginBottom: '343px',
            },
            [theme.breakpoints.up('md')]: {
              width: '355px',
              marginLeft: ' 125px',
              marginTop: '65px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={cipIcon} alt=" " width={'42px'} height={'42px'} />
            <Typography
              variant="body2"
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '16px',
                  marginTop: '21px',
                  width: '189px',
                },
                [theme.breakpoints.between('sm', 'md')]: {
                  fontSize: '17px',
                  marginTop: '22px',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '18px',
                  marginTop: '30px',
                  marginBottom: '97px',
                },
                textAlign: 'center',
                color: '#fff',
              }}
            >
              Using the RTX-1134 processor
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={hardIcon} alt=" " width={'42px'} height={'42px'} />
            <Typography
              variant="body2"
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '16px',
                  marginTop: '24px',
                },
                [theme.breakpoints.between('sm', 'md')]: {
                  fontSize: '17px',
                  marginTop: '25px',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '18px',
                  marginTop: '32px',
                  marginBottom: '97px',
                },
                textAlign: 'center',
                color: '#fff',
              }}
            >
              Use infrared Platinum 2.14
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
