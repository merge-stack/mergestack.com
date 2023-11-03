import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
    palette: {
      primary: {
        main: '#4FB0E3',
      },
      secondary: {
        main: '#106897',
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white !important',
          position: 'relative',
          paddingBlock: '1rem'
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#000',
          fontWeight: 500,
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
