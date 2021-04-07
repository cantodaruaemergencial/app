import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2196F3',
    },
    text: {
      primary: '#2a3238',
    },
  },
});

export default responsiveFontSizes(theme);
