// theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a994e', 
    },
    secondary: {
      main: '#f2e8cf', 
    },
    background: {
      default: '#fffef6',
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
  },
});

export default theme;
