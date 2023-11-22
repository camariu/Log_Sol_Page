// Importăm modulele necesare din Material-UI
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Componenta Navbar
const Navbar = () => {
  // Starea pentru gestionarea deschiderii/închiderii meniului mobil
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Funcție pentru deschiderea meniului mobil
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // Funcție pentru închiderea meniului mobil
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
  
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Numele Aplicației
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Meniul mobil */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        {/* Lista cu elementele meniului */}
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Acasă" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Despre" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Servicii" />
          </ListItem>
          {/* Adaugă aici mai multe elemente ale meniului după necesități */}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
