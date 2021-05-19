import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import CardHeader from '../CardHeader';

import DoughtnutCardChart from './DoughtnutCardChart';

import { DashboardChartCard as DashboardChartCardInterface } from '#/types/Dashboard';
import { Format } from '#/types/Format';

const DashCard = styled(Card)`
  && {
    padding: 2rem;
  }
`;

const Chart = styled(DoughtnutCardChart)`
  flex: 1;
  height: 100px;
  width: 100%;
`;

interface Props extends DashboardChartCardInterface {
  format?: Format;
  className?: string;
}

const DoughtnutCard = ({
  label,
  values,
  format = Format.number,
  className,
}: Props) => (
  <DashCard className={className} rounder>
    <CardHeader title={label} />
    {values && <Chart values={values} format={format} />}
  </DashCard>
);

export default DoughtnutCard;
