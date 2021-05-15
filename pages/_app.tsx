import MomentUtils from '@date-io/moment';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
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
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <MuiThemeProvider theme={DefaultTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    </AuthProvider>
  );
};

export default App;
