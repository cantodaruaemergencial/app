import { Box, Container, withTheme } from '@material-ui/core';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import DashboardCard from '../../DashboardCard/DashboardCard';
import PageHeader from '../../PageHeader';

import Card from '#/components/Card';
import DashboardService from '#/services/DashboardService';
import { DashboardData } from '#/types/Dashboard';

const DashboardContainer = withTheme(styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'people entrances entrances attendances attendances'
    'services services services services services';

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'people people'
      'entrances attendances'
      'services services';
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'people'
      'attendances'
      'entrances'
      'services';
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

const Services = styled(Card)`
  grid-area: services;
`;

const Genders = styled(Card)`
  grid-area: genders;
`;

const Ages = styled(Card)`
  grid-area: ages;
`;

const SkinColors = styled(Card)`
  grid-area: skinColors;
`;

const Homelessness = styled(Card)`
  grid-area: homelessness;
`;

const SchoolTrainings = styled(Card)`
  grid-area: schoolTrainings;
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
        <Services {...services} rounder />
        <Genders {...genders} rounder />
        <Ages {...ages} rounder />
        <SkinColors {...skinColors} rounder />
        <Homelessness {...homelessness} rounder />
        <SchoolTrainings {...schoolTrainings} rounder />
      </DashboardContainer>
    </Container>
  );
};

export default DashboardPage;
