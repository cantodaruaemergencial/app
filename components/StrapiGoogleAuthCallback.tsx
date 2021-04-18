import { Card, createStyles, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/dist/client/router';
import { ReactElement, useEffect } from 'react';

import { useAuthMethods, useAuthState } from '#/packages/auth/auth-context';

const useStyles = makeStyles(() =>
  createStyles({
    loginCard: {
      margin: '5rem auto',
      maxWidth: '20rem',
      padding: '2rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      flexGrow: 1,
      padding: '0.5rem 0 2.5rem 0',
    },
  }),
);

const StrapiGoogleAuthCallback = (): ReactElement => {
  const classes = useStyles();
  const { login } = useAuthMethods();
  const { isLogged } = useAuthState();

  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      // Redirect to desired path
      router.replace('/dashboard');
    }
  }, [isLogged]);

  useEffect(() => {
    const idToken = window?.location.search;

    if (idToken && typeof idToken === 'string') {
      login(idToken);
    }
  }, [router.query]);

  return (
    <Card className={classes.loginCard}>
      <Typography variant="h3" className={classes.title}>
        Logging In
      </Typography>
      <CircularProgress size={50} />
    </Card>
  );
};

export default StrapiGoogleAuthCallback;
