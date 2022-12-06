import { createTheme } from '@mui/material/styles';

export const baseFontFamily = "'Roboto', sans-serif";
export const titleFontFamily = "'Bai Jamjuree', sans-serif";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#50D19D',
    },
    background: {
      // default: '#333336',
      default: createColor('#333336'), // main, dark, light
    },
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
        body: {
          background: '#333336',
        },
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
