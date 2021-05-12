import { Card, Container } from '@material-ui/core';
import { ReactElement } from 'react';
import styled from 'styled-components';

import PageHeader from '../PageHeader';

const DashboardCard = styled(Card)`
  padding: 2rem;
`;

const DashboardPage = (): ReactElement => (
  <Container>
    <PageHeader title="Seja bem-vindo!" />
    <DashboardCard>Em construção</DashboardCard>
  </Container>
);

export default DashboardPage;
