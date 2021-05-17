import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const Shadows = {
  1: '0px 2px 2px -3px rgba(0,0,0,0.02), 0px 8px 8px -1px rgba(0,0,0,0.05), 0px 2px 8px 2px rgba(0,0,0,0.02)',
  2: '0px 5px 5px -3px rgba(0,0,0,0.02),0px 12px 12px -1px rgba(0,0,0,0.05),0px 3px 12px 2px rgba(0,0,0,0.02)',
};

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2a3238',
    },
    text: {
      primary: '#2a3238',
    },
  },
  typography: {
    fontFamily: '"Open Sans"',
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.25,
      margin: '3rem 0 2rem',
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
      margin: '1rem 0',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '.9rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      opacity: 0.5,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
      },
      contained: {
        backgroundColor: '#fff',
        boxShadow: Shadows[1],
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: '#f7f7f7',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: Shadows[2],
      },
      elevation4: {
        boxShadow: Shadows[2],
      },
    },
    MuiFormHelperText: { root: { opacity: 1 } },
  },
});

export default responsiveFontSizes(theme);
