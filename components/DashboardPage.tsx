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
    dashboardCard: {
      margin: '5rem auto',
      maxWidth: '40rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'space-between',
    },
  }),
);

const DashboardPage = (): ReactElement => {
  const classes = useStyles();
  const { userProfile } = useAuthState();
  const { logout } = useAuthMethods();

  useAsPrivateRoute();

  return (
    <Card className={classes.dashboardCard}>
      {userProfile == null ? (
        'Loading...'
      ) : (
        <>
          <Typography variant="h4" paragraph>
            Seja bem-vindo {userProfile.displayName}!
          </Typography>
          <Button onClick={logout}>Logout</Button>
        </>
      )}
    </Card>
  );
};

export default DashboardPage;
