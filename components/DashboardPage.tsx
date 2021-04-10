import { Card, createStyles, makeStyles, Typography } from '@material-ui/core';
import { ReactElement } from 'react';

import Button from './Button';

import {
  useAsPrivateRoute,
  useAuthMethods,
  useAuthState,
} from '#/packages/auth/auth-context';

const useStyles = makeStyles(() =>
  createStyles({
    loginCard: {
      margin: '5rem auto',
      maxWidth: '40rem',
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

const LoginPage = (): ReactElement => {
  const classes = useStyles();
  const { userProfile } = useAuthState();
  const { logout } = useAuthMethods();

  useAsPrivateRoute();

  if (userProfile == null) {
    // TODO: show loading page
    return <>Loading...</>;
  }

  return (
    <Card className={classes.loginCard}>
      <Typography variant="h4" paragraph>
        Seja bem {userProfile.displayName}!
      </Typography>

      <Button onClick={logout}>Logout</Button>
    </Card>
  );
};

export default LoginPage;
