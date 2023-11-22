import { Box, useTheme } from '@mui/material';
import Header from './Header/Header';
import Hero from './Hero/Hero';

export const App = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      width: "100%",
      backgroundColor: '#1D1260',
      padding: "0px",
      marginLeft: "auto", // Menține centrat pe dispozitivele de tip mobil
       
    }}>
      <Box style={{   [theme.breakpoints.up('md')]: {
        marginLeft: "125px",  
      }, }}>
        <Header />
        <Hero />
      </Box>
    </Box>
  );
};
 