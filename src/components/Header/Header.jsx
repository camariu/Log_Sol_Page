import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../assets/svg/logo.svg';
import shopIcon from '../../assets/svg/shop-icon.svg';
import style from './Header.module.css';

export default function Header() {
  const menuItems = ['Home', 'Product', 'Resource', 'Community', 'Contact', 'About'];

  const [menu, setMenu] = useState(null);

  const handleOpenMenu = (event) => {
    setMenu(event.currentTarget);
  };

  return (
    <AppBar position="relative" sx={{ backgroundColor: '#1D1260', boxShadow: '0px 0px 0px 0px', height:"80px" }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '19.2px',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            marginLeft: 'auto',
            margin: '0px',
          }}
        >
          {menuItems.map((menuItem, index) => (
            <Button key={index} sx={{ color: 'white', marginLeft: '39px' }}>
              {menuItem}{' '}
              {(menuItem === 'Product' || menuItem === 'Resource') && (
                <KeyboardArrowDownIcon />
              )}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            marginLeft: '158px',
            alignItems: 'center',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Button
            color="inherit"
            sx={{
              padding: '12px',
              backgroundColor: '#F57438',
              width: '115px',
              height: '48px',
              '&:hover': {
                backgroundColor: 'rgba(245, 116, 56, 0.8)',
              },
            }}
          >
            <img src={shopIcon} alt="" style={{ marginRight: '5px', color: 'red' }} />
            Shop
          </Button>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: { xs: 'flex', md: 'none' },
            margin: '0px',
          }}
        >
          <Box sx={{ marginRight: 'auto',  }}>
            <img src={logo} alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: 'auto',
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <IconButton
            size="large"
            color="inherit"
            onClick={handleOpenMenu}
            sx={{ marginLeft: '10px' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menu}
            open={Boolean(menu)}
            onClose={() => setMenu(null)}
            className={style.menu}
            sx={{
              backgroundColor: '#1D1260',
              marginTop: '15px',
              width: '100vw',
              zIndex: 1000,
            }}
          >
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                sx={{
                  color: '#fff',
                  backgroundColor: '#1D1260',
                  width: '100vw',
                  zIndex: 2000,
                  display: 'flex',
                  '&:hover': {
                    backgroundColor: 'rgba(245, 116, 56, 0.8)',
                  },
                }}
              >
                {menuItem}{' '}
                {(menuItem === 'Product' || menuItem === 'Resource') && (
                  <KeyboardArrowDownIcon />
                )}
              </MenuItem>
            ))}
            <Box sx={{ backgroundColor: '#1D1260', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button
                color="inherit"
                sx={{
                  padding: '12px',
                  backgroundColor: '#F57438',
                  width: '343px',
                  height: '48px',
                  '&:hover': {
                    backgroundColor: 'rgba(245, 116, 56, 0.8)',
                  },
                }}
              >
                <img src={shopIcon} alt="" style={{ marginRight: '5px', color: 'red' }} />
                Shop
              </Button>
              <Typography variant="body1">© 2021-2022, All Rights Reserved</Typography>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
