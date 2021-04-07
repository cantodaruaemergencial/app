import {
  Card,
  createStyles,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { ReactElement, useState } from 'react';

import Button from './Button';

import { useAuthMethods } from '#/packages/auth/auth-context';

const useStyles = makeStyles(() =>
  createStyles({
    loginCard: {
      margin: '5rem auto',
      maxWidth: '20rem',
      padding: `1rem`,
      borderRadius: `0.5rem`,
      textAlign: `center`,
      display: `flex`,
      flexDirection: `column`,
      justifyItems: 'space-between',
    },
    googleButton: {
      width: '100%',
    },
    googleIcon: {
      margin: '0 0.5rem',
    },
    helpingHandIcon: {
      width: '50%',
      padding: `1rem`,
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
  const { login } = useAuthMethods();
  const [password, setPassword] = useState<string>('');
  const isPasswordValid = password === PASSWORD;

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
          onClick={login}
          className={classes.googleButton}
          variant="outlined"
          autoFocus
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
