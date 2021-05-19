import { Box, Container, withTheme } from '@material-ui/core';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import PageHeader from '../../PageHeader';

import BarCard from '#/components/BarCard/BarCard';
import DashboardCard from '#/components/DashboardCard/DashboardCard';
import DoughtnutCard from '#/components/DoughtnutCard/DoughtnutCard';
import TotalListCard from '#/components/TotalListCard/TotalListCard';
import DashboardService from '#/services/DashboardService';
import { DashboardData } from '#/types/Dashboard';

const DashboardContainer = withTheme(styled(Box)`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'people entrances entrances attendances attendances'
    'services services services services services'
    'genders ages ages schoolTrainings schoolTrainings'
    'skinColors homelessness homelessness schoolTrainings schoolTrainings';

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'people people'
      'entrances attendances'
      'services services'
      'genders ages'
      'skinColors homelessness'
      'schoolTrainings schoolTrainings';
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'people people'
      'entrances entrances'
      'attendances attendances'
      'services services'
      'genders skinColors'
      'ages ages'
      'homelessness homelessness'
      'schoolTrainings schoolTrainings';
  }
`);

const People = styled(DashboardCard)`
  grid-area: people;
`;

const ServiceAttendances = styled(DashboardCard)`
  grid-area: attendances;
`;

const Entrances = styled(DashboardCard)`
  grid-area: entrances;
`;

const Services = styled(TotalListCard)`
  grid-area: services;
`;

const Genders = styled(DoughtnutCard)`
  grid-area: genders;
`;

const Ages = styled(BarCard)`
  grid-area: ages;
`;

const SkinColors = styled(DoughtnutCard)`
  grid-area: skinColors;
`;

const Homelessness = styled(BarCard)`
  grid-area: homelessness;
`;

const SchoolTrainings = styled(BarCard)`
  grid-area: schoolTrainings;
  min-height: 420px;
`;

const DashboardPage = (): ReactElement => {
  const [dashboardData, setDashboardData] = useState<DashboardData>();

  useEffect(() => {
    DashboardService.getDashboardData().then((data) => {
      setDashboardData(data);
    });
  }, []);

  if (!dashboardData) return <></>;

  const {
    people,
    entrances,
    serviceAttendances,
    services,
    genders,
    skinColors,
    schoolTrainings,
    ages,
    homelessness,
  } = dashboardData;

  return (
    <Container>
      <PageHeader title="Dashboard" />
      <DashboardContainer>
        <People {...people} primary alignCenter />
        <Entrances {...entrances} />
        <ServiceAttendances {...serviceAttendances} />
        <Services {...services} />
        <Genders {...genders} />
        <Ages {...ages} />
        <SkinColors {...skinColors} />
        <Homelessness {...homelessness} />
        <SchoolTrainings {...schoolTrainings} horizontal />
      </DashboardContainer>
    </Container>
  );
};

export default DashboardPage;
