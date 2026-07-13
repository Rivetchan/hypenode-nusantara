import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0a1628',
      light: '#1a3a6a',
      dark: '#060d1a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a5276',
      light: '#2e86c1',
      dark: '#0e3a5c',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#4fc3f7',
      light: '#81d4fa',
      dark: '#0288d1',
    },
    robotics: {
      main: '#00979D',
      light: '#4DB6AC',
      dark: '#00695C',
    },
    background: {
      default: '#0a1628',
      paper: '#0f2040',
      gradient: 'linear-gradient(135deg, #0a1628 0%, #1a3a6a 50%, #0e3a5c 100%)',
      card: 'rgba(15, 32, 64, 0.85)',
      dark: '#060d1a',
    },
    text: {
      primary: '#e8edf5',
      secondary: '#a8c4e8',
      disabled: '#4a6a8a',
      contrast: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.3rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 22, 40, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(79, 195, 247, 0.08)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          fontWeight: 700,
          padding: '12px 32px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
        },
        contained: {
          background: 'linear-gradient(135deg, #0288d1 0%, #4fc3f7 100%)',
          boxShadow: '0 4px 25px rgba(79, 195, 247, 0.35)',
          color: '#ffffff',
          '&:hover': {
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 8px 45px rgba(79, 195, 247, 0.5)',
          },
        },
        outlined: {
          borderColor: 'rgba(79, 195, 247, 0.35)',
          color: '#4fc3f7',
          '&:hover': {
            borderColor: '#4fc3f7',
            background: 'rgba(79, 195, 247, 0.08)',
            transform: 'translateY(-3px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 32, 64, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 20,
          border: '1px solid rgba(79, 195, 247, 0.08)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
        },
      },
    },
  },
});

export default theme;
