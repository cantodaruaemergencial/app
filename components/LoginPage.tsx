import {
  Card,
  createStyles,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';

import { ReactElement, useState } from 'react';

import AuthService from '#/services/AuthService';

import Button from './Button';

const handleLogin = (user: string, password: string) => {
  AuthService.login(user, password);
};

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
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Card className={classes.loginCard}>
      <Typography variant="h4" paragraph>
        Seja bem vindo ao Canto da Rua
        <TextField
          className={classes.input}
          label="Usuário"
          variant="outlined"
          type="email"
          autoComplete="off"
          value={user}
          onChange={(e) => setUser(e.target.value)}
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
            handleLogin(user, password);
          }}
          variant="outlined"
        >
          Login
        </Button>
      </Typography>
    </Card>
  );
};

export default LoginPage;
