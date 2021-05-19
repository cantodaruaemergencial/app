import { Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import CardHeader from '../CardHeader';
import Value from '../Value';

import HistogramCardChart from './HistogramCardChart';

import { DashboardHistogramCard } from '#/types/Dashboard';
import { Format } from '#/types/Format';

const DashCard = styled(Card)`
  && {
    padding: 2rem;
  }
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Chart = styled(HistogramCardChart)`
  flex: 1;
  height: 100px;
  width: 100%;
`;

interface Props extends DashboardHistogramCard {
  format?: Format;
  className?: string;
}

const HistogramCard = ({
  label,
  values,
  average,
  format = Format.number,
  className,
}: Props) => (
  <DashCard className={className} rounder>
    <Header>
      <CardHeader
        title={label}
        sideComponent={
          average !== null && (
            <Value value={average} label="média" small inline />
          )
        }
      />
    </Header>
    {values && <Chart values={values} format={format} />}
  </DashCard>
);

export default HistogramCard;
