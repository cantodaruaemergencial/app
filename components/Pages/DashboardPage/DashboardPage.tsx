import { Box, Container, withTheme } from '@material-ui/core';
import moment from 'moment';
import { ReactElement } from 'react';
import styled from 'styled-components';

import Card from '../../Card';
import DashboardCard from '../../DashboardCard/DashboardCard';
import PageHeader from '../../PageHeader';

const DashboardContainer = withTheme(styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'attendances people'
    'services services';

  ${({ theme }) => theme.breakpoints.down('xs')} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'attendances'
      'people'
      'services';
  }
`);

const ServiceAttendances = styled(DashboardCard)`
  grid-area: attendances;
`;

const People = styled(DashboardCard)`
  grid-area: people;
`;

// const Services = styled(Card)`
//   grid-area: services;
// `;

const DashboardPage = (): ReactElement => (
  <Container>
    <PageHeader title="Dashboard" />
    <DashboardContainer>
      <ServiceAttendances
        label="Atendimentos"
        value={302400}
        otherValues={[
          { value: 15000, label: 'neste mês' },
          { value: 3500, label: 'nesta semana' },
        ]}
        historicValues={[
          { date: moment(), value: Math.random() * 10 },
          { date: moment().subtract(1, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(2, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(3, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(4, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(5, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(6, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(7, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(8, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(9, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(10, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(11, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(12, 'month'), value: Math.random() * 10 },
        ]}
      />
      <People
        label="Pessoas"
        value={7000}
        otherValues={[
          { value: 500, label: 'neste mês' },
          { value: 152, label: 'nesta semana' },
        ]}
        historicValues={[
          { date: moment(), value: Math.random() * 10 },
          { date: moment().subtract(1, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(2, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(3, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(4, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(5, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(6, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(7, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(8, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(9, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(10, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(11, 'month'), value: Math.random() * 10 },
          { date: moment().subtract(12, 'month'), value: Math.random() * 10 },
        ]}
      />
      {/* <Services /> */}
    </DashboardContainer>
  </Container>
);

export default DashboardPage;
