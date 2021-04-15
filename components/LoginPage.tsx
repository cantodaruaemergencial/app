import {
  Card,
  createStyles,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { ReactElement, useEffect, useState } from 'react';

import Button from './Button';

import { useAuthMethods, useAuthState } from '#/packages/auth/auth-context';

const useStyles = makeStyles(() =>
  createStyles({
    loginCard: {
      margin: '5rem auto',
      maxWidth: '20rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'space-between',
    },
    googleButton: {
      width: '100%',
    },
    googleIcon: {
      margin: '0 0.5rem',
    },
  }),
);

const GoogleLogo = () => {
  const classes = useStyles();
  return (
    <img
      src="images/googleIcon.png"
      alt="google"
      className={classes.googleIcon}
    />
  );
};

// TODO: temporary, will be replaced by an endpoint
const PASSWORD = 'login';

const LoginPage = (): ReactElement => {
  const classes = useStyles();
  const { handleGoogleClick } = useAuthMethods();
  const { isLoading, isLogged } = useAuthState();
  const [password, setPassword] = useState<string>('');
  const isPasswordValid = password === PASSWORD;
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      // Redirect to desired path
      router.replace('/dashboard');
    }
  }, [isLogged]);

  const helpText = !isPasswordValid
    ? 'Caso não tenha, entre em contato com o admin do sistema'
    : null;

  return (
    <Card className={classes.loginCard}>
      <Typography variant="h4" paragraph>
        Seja bem vindo ao Canto da Rua
      </Typography>
      {isPasswordValid ? (
        <Button
          onClick={handleGoogleClick}
          className={classes.googleButton}
          variant="outlined"
          autoFocus
          disabled={isLoading}
        >
          <GoogleLogo />
          Login com Google
        </Button>
      ) : (
        <TextField
          autoFocus
          label="Palavra-passe"
          helperText={helpText}
          variant="outlined"
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
    </Card>
  );
};

export default LoginPage;
