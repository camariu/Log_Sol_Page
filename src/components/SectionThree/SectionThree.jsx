import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import flashIcon from '../../assets/svg/flashIcon.png';

export default function SectionThree() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {},
          [theme.breakpoints.between('sm', 'md')]: {},
          [theme.breakpoints.up('md')]: {
            display: 'flex',
          },
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.down('sm')]: {},
            [theme.breakpoints.between('sm', 'md')]: {},
            [theme.breakpoints.up('md')]: {
              display: 'flex',
            },
          }}
        >
          <Box
            sx={{
              [theme.breakpoints.down('sm')]: {},
              [theme.breakpoints.between('sm', 'md')]: {},
              [theme.breakpoints.up('md')]: {
                display: 'flex',
              },
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>See the latest </Typography>
                <img src={flashIcon} alt='info'/>
              </Box>
            </Box>
          </Box>
          <Typography>updated version </Typography>
          <Box>
            <Typography>
              Update your system to the latest Version 2.3 with a technology
              version using the new RTX-1134 processor for a much better
              experience
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
