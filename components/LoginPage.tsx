import { Button, createStyles, makeStyles } from '@material-ui/core';
import { ReactElement } from 'react';

import { useAuthMethods } from '#/packages/auth/auth-context';

const useStyles = makeStyles(() =>
  createStyles({
    loginCard: {
      margin: '10rem auto',
      width: '20rem',
      minWidth: `5rem`,
      padding: `1rem`,
      borderRadius: `0.5rem`,
      border: 'solid 2px white',
      textAlign: `center`,
    },
    googleButton: {
      backgroundColor: 'red',
    },
    logoImage: {
      width: '100%',
    },
  }),
);

const LoginPage = (): ReactElement => {
  const classes = useStyles();
  const { login } = useAuthMethods();

  return (
    <div className={classes.loginCard}>
      <img className={classes.logoImage} src="images/logo.jpeg" alt="logo" />
      <p>Seja bem vindo ao Canto da Rua</p>
      <Button onClick={login} className={classes.googleButton}>
        Login com Google
      </Button>
    </div>
  );
};

export default LoginPage;
