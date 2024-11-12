import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D5BDAF', // Un morado elegante
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    secondary: {
      main: '#f50057', // Rosa para acentos
      light: '#ff4081',
      dark: '#c51162',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Montserrat", "Lora", "Merriweather", "Roboto Slab", "Cormorant Garamond", serif',
    h1: {
        fontFamily: 'Montserrat, serif',
    },
    h2: {
      fontFamily: 'Lora, serif',
    },
    h3: {
      fontFamily: 'Montserrat, serif',
    },
    h4: {
      fontFamily: 'Montserrat, serif',
    },
    button: {
      textTransform: 'none', // Evita que los botones estén en mayúsculas
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;