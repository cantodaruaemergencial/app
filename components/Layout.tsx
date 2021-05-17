import { Box } from '@material-ui/core';
import Head from 'next/head';
import { ReactElement } from 'react';

import NavBar from '#/components/NavBar';
import { useAuthState } from '#/packages/auth/auth-context';

interface Props {
  children: ReactElement | ReactElement[];
  title: string;
}

const Layout = ({
  children,
  title = 'This is the default title',
}: Props): ReactElement => {
  const { userProfile } = useAuthState();

  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {userProfile && <NavBar />}
      {children}
    </Box>
  );
};

export default Layout;
