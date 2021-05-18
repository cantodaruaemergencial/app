import { Box, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import Value from '../Value';

import DashboardCardChart from './DashboardCardChart';

import { HistoricalValue } from '#/types/Dashboard';
import { Format } from '#/types/Format';

const DashCard = styled(Card)`
  && {
    padding: 0;
  }
`;

const Numbers = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem;
`;

const Title = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

const HistoricalValues = styled(DashboardCardChart)`
  flex: 1;
  height: 120px;
  margin-top: 2rem;
`;

const OtherValues = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const OtherValue = styled(Value)``;

type OtherValueType = { value: number; label: string };

interface Props {
  label: string;
  value: number;
  format?: Format;
  historicValues: HistoricalValue[];
  otherValues?: OtherValueType[];
  className?: string;
}

const DashboardCard = ({
  label,
  value,
  format = Format.number,
  otherValues = [],
  historicValues,
  className,
}: Props) => {
  const renderOtherValue = (otherValue: OtherValueType) => (
    <OtherValue
      format={format}
      value={otherValue.value}
      label={otherValue.label}
      small
      inline
      align="right"
    />
  );

  return (
    <DashCard rounder className={className}>
      <Numbers>
        <Box>
          <Title color="textSecondary">{label}</Title>
          <Value format={format} value={value} />
        </Box>
        <OtherValues>{otherValues.map(renderOtherValue)}</OtherValues>
      </Numbers>
      <HistoricalValues values={historicValues} format={format} />
    </DashCard>
  );
};

export default DashboardCard;
