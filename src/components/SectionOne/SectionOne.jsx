import { Typography, useTheme, Box } from '@mui/material';
import React from 'react';

export default function SectionOne() {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ backgroundColor: '#0A0048', width: '100%' }}>
        <Box
          sx={{
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              justifyContent: 'center',
            },
            [theme.breakpoints.between('sm', 'md')]: {
              display: 'flex',
              justifyContent: 'center',
            },
            [theme.breakpoints.up('md')]: {},
          }}
        >
          <Box
            sx={{
              [theme.breakpoints.down('sm')]: {
                paddingTop: '84px',
                paddingBottom: '52px',
                width: '260px',
              },
              [theme.breakpoints.between('sm', 'md')]: {
                paddingTop: '84px',
                paddingBottom: '52px',
              },
              [theme.breakpoints.up('md')]: {
                width: '384px',
                height: '113px',
                marginLeft: '125px',
                paddingTop: '44px',
                paddingBottom: '44px',
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#F57438',
                [theme.breakpoints.down('sm')]: {
                  width: '189px',
                  fontSize: '28px',
                },
                [theme.breakpoints.between('sm', 'md')]: {},
                [theme.breakpoints.up('md')]: {
                  fontSize: '32px',
                },
              }}
            >
              1500+ clients
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                [theme.breakpoints.down('sm')]: {
                  width: '260px',
                  marginTop:"8px"
                },
                [theme.breakpoints.between('sm', 'md')]: {
                    fontSize: '17px',
                    marginTop:"8px"
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '18px',
                  marginTop:"8px"
                },
              }}
            >
              Various clients around the world who have used our products
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
