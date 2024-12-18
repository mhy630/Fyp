import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121', // Black
    },
    secondary: {
      main: '#757575', // Gray
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#bdbdbd', // Light gray text
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Card/Container background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#ffffff',
    },
    h6: {
      fontWeight: 500,
      color: '#bdbdbd',
    },
    body2: {
      color: '#bdbdbd',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
