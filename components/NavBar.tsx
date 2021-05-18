import { Avatar, AppBar, Container, Box, Button } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';

import { useAuthState, useAuthMethods } from '#/packages/auth/auth-context';

const Logo = styled(Avatar)`
  && {
    width: 4rem;
    height: 4rem;
    margin-right: 4rem;
    cursor: pointer;
  }
`;

const Toolbar = styled(Container)`
  && {
    padding-top: 1rem;
    padding-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
`;

const Links = styled(Box)`
  display: flex;
`;

export default function ButtonAppBar(): React.ReactElement {
  const { isLogged } = useAuthState();
  const { logout } = useAuthMethods();
  if (!isLogged)
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Link href="/dashboard">
            <Logo alt="Canto da Rua" src="/images/logo.png" />
          </Link>
        </Toolbar>
      </AppBar>
    );

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Link href="/dashboard">
          <Logo alt="Canto da Rua" src="/images/logo.png" />
        </Link>
        <Links>
          <Link href="/people">
            <Button>Pessoas</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </Links>
        <Button onClick={logout}>Sair</Button>
      </Toolbar>
    </AppBar>
  );
}
