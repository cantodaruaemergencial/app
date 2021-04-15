import { Card, createStyles, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { ReactElement, useEffect } from 'react';

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
  }),
);

const StrapiGoogleAuth = (): ReactElement => {
  const classes = useStyles();
  const { login } = useAuthMethods();
  const { isLoading, isLogged } = useAuthState();

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
      {isLoading ? <div>...Loading</div> : <div>Logged</div>}
    </Card>
  );
};

export default StrapiGoogleAuth;
