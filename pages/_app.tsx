import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import type { AppProps } from 'next/app';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';

  const theme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const responsiveTheme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      <Component {...pageProps} handleThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
}

export default MyApp;
