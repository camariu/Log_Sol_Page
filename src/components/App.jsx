import { Box, useTheme } from '@mui/material';
import Header from './Header/Header';
import Hero from './Hero/Hero';

export const App = () => {
  const theme = useTheme();

  return (
    <div>
      <Header></Header>
    </div>
  );
};
 