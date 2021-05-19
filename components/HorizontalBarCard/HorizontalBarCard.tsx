import { Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import CardHeader from '../CardHeader';

import HorizontalBarCardChart from './HorizontalBarCardChart';

import { DashboardChartCard as DashboardChartCardInterface } from '#/types/Dashboard';
import { Format } from '#/types/Format';

const DashCard = styled(Card)`
  && {
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Chart = styled(HorizontalBarCardChart)`
  flex: 1;
  min-height: 200px;
  width: 100%;
`;

interface Props extends DashboardChartCardInterface {
  format?: Format;
  className?: string;
}

const HorizontalBarCard = ({
  label,
  values,
  format = Format.number,
  className,
}: Props) => (
  <DashCard className={className} rounder>
    <Header>
      <CardHeader title={label} />
    </Header>
    {values && <Chart values={values} format={format} />}
  </DashCard>
);

export default HorizontalBarCard;
