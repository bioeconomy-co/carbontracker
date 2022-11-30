import { createTheme } from '@mui/material/styles';

export const baseFontFamily = "'Roboto', sans-serif";
export const titleFontFamily = "'Bai Jamjuree', sans-serif";

const theme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#FFF',
    // },
  },
  typography: {
    fontFamily: baseFontFamily,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      fontFamily: titleFontFamily,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        svg: {
          maxWidth: '100%',
          maxHeight: '100%',
        },
      },
    },
    // MuiButton: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       borderRadius: 0,
    //       textTransform: 'none',
    //       fontWeight: 600,
    //       ...(ownerState.variant === 'contained' &&
    //         ownerState.color === 'primary' && {
    //           color: '#fff',
    //           boxShadow: 'none',
    //           '&:hover': {
    //             backgroundColor: '#69b538',
    //             boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
    //           },
    //         }),
    //     }),
    //   },
    // },
  },
});

export default theme;
