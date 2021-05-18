import { Box, Container, withTheme } from '@material-ui/core';
import moment from 'moment';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import DashboardCard from '../../DashboardCard/DashboardCard';
import PageHeader from '../../PageHeader';

import DashboardService from '#/services/DashboardService';
import { DashboardData } from '#/types/Dashboard';

const DashboardContainer = withTheme(styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'entrances attendances'
    'services services';

  ${({ theme }) => theme.breakpoints.down('xs')} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'attendances'
      'entrances'
      'services';
  }
`);

const ServiceAttendances = styled(DashboardCard)`
  grid-area: attendances;
`;

const Entrances = styled(DashboardCard)`
  grid-area: entrances;
`;

// const Services = styled(Card)`
//   grid-area: services;
// `;

const DashboardPage = (): ReactElement => {
  const [dashboardData, setDashboardData] = useState<DashboardData>();

  useEffect(() => {
    DashboardService.getDashboardData().then((data) => {
      console.log(data);
      setDashboardData(data);
    });
  }, []);

  if (!dashboardData) return <></>;

  const { entrances, serviceAttendances } = dashboardData;

  return (
    <Container>
      <PageHeader title="Dashboard" />
      <DashboardContainer>
        <Entrances {...entrances} />
        <ServiceAttendances {...serviceAttendances} />
        {/* <Services rounder /> */}
      </DashboardContainer>
    </Container>
  );
};

export default DashboardPage;
