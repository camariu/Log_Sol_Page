import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {},
          [theme.breakpoints.between('sm', 'md')]: {},
          [theme.breakpoints.up('md')]: {
            marginLeft: '226px',
          },

          display: 'grid',
          gridTemplateColumns: {
            xs: 'auto auto', // O coloană pe ecranele de dimensiuni extra-small (xs)
            sm: 'auto auto', // Două coloane pe ecranele de dimensiuni small (sm) și mai mari
            md: 'auto auto auto auto auto ', // Trei coloane pe ecranele de dimensiuni medium (md) și mai mari
            lg: 'auto auto auto auto auto ', // Patru coloane pe ecranele de dimensiuni large (lg) și mai mari
          },
          gap: 'auto', // Spațiu între elementele grid
        }}
      >
        {/* Blok1 */}
        <Box>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: '20px', color: '#232323' },
                }}
                primary="Menu"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Product" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Community" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Box>
        {/* Blok2 */}
        <Box>
          <List sx={{ width: 'auto' }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: '20px', color: '#232323' },
                }}
                primary="Product"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Robot" />
            </ListItem>
            <ListItem>
              <ListItemText primary="System Ai" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Stream" />
            </ListItem>
            <ListItem>
              <ListItemText primary="DNC" />
            </ListItem>
          </List>
        </Box>
        {/* blok3 */}
        <Box>
          <List sx={{ width: 'auto' }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: '20px', color: '#232323' },
                }}
                primary="Solutions"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="System Error" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Payment" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Processing" />
            </ListItem>
          </List>
        </Box>
        {/* Blok4 */}
        <Box>
          <List sx={{ width: 'auto' }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: '20px', color: '#232323' },
                }}
                primary="FAQ"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Manage Deliveries" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Payments" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Copyright" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Language" />
            </ListItem>
          </List>
        </Box>
        {/* blok5 */}
        <Box>
          <List sx={{ width: 'auto' }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: '20px', color: '#232323' },
                }}
                primary="Developers"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developers Hub" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developers Call" />
            </ListItem>
            <ListItem>
              <ListItemText primary="API" />
            </ListItem>
          </List>
        </Box>
        <Box>
          <List sx={{ width: 'auto' }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: '20px', color: '#232323' },
                }}
                primary="Support"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Online Chat" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Open Live Chat" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Call Center" />
            </ListItem>
          </List>
        </Box>
        {/* blok7 */}

        <Box>
          <List sx={{ width: 'auto' }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: '20px', color: '#232323' },
                }}
                primary="Resources"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="System Network" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Company Service" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Assets AI" />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box
        sx={{
            backgroundColor: '#1D1260',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',  
          [theme.breakpoints.down('sm')]: {
            height: '66px',
          },
          [theme.breakpoints.between('sm', 'md')]: {
            height: 'px',
          },
          [theme.breakpoints.up('md')]: {
            height: '88px',
          },
        }}
      >
        <Box sx={{}}>
          
            <Typography variant="body1" sx={{
                color:"#fff",
                [theme.breakpoints.down('sm')]: {
                   fontSize:"16px"
                  },
                  [theme.breakpoints.between('sm', 'md')]: {
                    fontSize:"18px"
                  },
                  [theme.breakpoints.up('md')]: {
                    fontSize:"20px"
                  },

            }}>
              © 2021-2022, All Rights Reserved
            </Typography> 
        </Box>
      </Box>
    </Box>
  );
}
