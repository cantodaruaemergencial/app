import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { ApiProvider } from '#/packages/api/provider';
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
    <ApiProvider>
      <AuthProvider>
        <ThemeProvider theme={DefaultTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </ApiProvider>
  );
};

export default App;
