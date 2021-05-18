import { Card, Container } from '@material-ui/core';
import { ReactElement } from 'react';
import styled from 'styled-components';

import PageHeader from '../PageHeader';

import DashboardGenderComponent from './Dashboard/DashboardGenderComponent';

import { useAuthState } from '#/packages/auth/auth-context';

import DashboardService from '#/services/DashboardService';

const DashboardCard = styled(Card)`
  padding: 2rem;
`;

const DashboardPage = (): ReactElement => {
  const { userProfile } = useAuthState();
  const name = userProfile?.displayName ?? '';
  const title =
    name !== '' ? `Seja bem vindo, ${name}!` : 'Dashboard - Canto da Rua';

  return (
    <Container>
      <PageHeader title={title} />
      <DashboardCard>
        <DashboardGenderComponent fetchData={DashboardService.getGenders()} />
      </DashboardCard>
    </Container>
  );
};

export default DashboardPage;
