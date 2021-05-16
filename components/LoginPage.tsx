import {
  Card,
  createStyles,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { ReactElement, useState } from 'react';

import Button from './Button';

import { useAuthState, useAuthMethods } from '#/packages/auth/auth-context';

const useStyles = makeStyles(() =>
  createStyles({
    loginCard: {
      margin: '5rem auto',
      maxWidth: '30rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'space-between',
    },
    input: {
      margin: '0.5rem auto',
    },
    button: {
      display: 'block',
      margin: '0 auto',
    },
  }),
);

const LoginPage = (): ReactElement => {
  const classes = useStyles();
  const { isLoading, isLogged } = useAuthState();
  const { login } = useAuthMethods();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  if (isLogged) {
    router.replace('/dashboard');
  }

  return (
    <Card className={classes.loginCard}>
      <Typography variant="h4" paragraph>
        Seja bem vindo ao Canto da Rua
      </Typography>
      <TextField
        autoFocus
        className={classes.input}
        label="Email"
        variant="outlined"
        type="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className={classes.input}
        label="Senha"
        variant="outlined"
        type="password"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        className={classes.button}
        onClick={() => {
          login(email, password);
        }}
        variant="outlined"
        disabled={isLoading}
      >
        Login
      </Button>
    </Card>
  );
};

export default LoginPage;
