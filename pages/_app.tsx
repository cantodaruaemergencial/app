import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { AuthProvider } from '#/packages/auth/auth-context';
import DefaultTheme from '#/utils/theme';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <AuthProvider>
      <MuiThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </AuthProvider>
  );
};

export default App;
