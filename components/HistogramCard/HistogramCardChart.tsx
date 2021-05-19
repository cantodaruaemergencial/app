import { Box, NoSsr } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import Chart from '../Chart';

import { DashboardCoordinateValue } from '#/types/Dashboard';
import { Format } from '#/types/Format';

const ChartWrapper = styled(Box)`
  flex: 1;
`;

interface Props {
  values: DashboardCoordinateValue[];
  format?: Format;
  className?: string;
}

const TheHistogramCardChart = ({
  values,
  format = Format.number,
  className,
}: Props) => {
  const getLabels = () => values.map((v) => `${v.x}`);

  const getDataset = (): any => ({
    data: values.map((v) => v.y),
    maxBarThickness: 32,
    borderRadius: 4,
  });

  const getChartOptions = (): any => ({
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
  });

  return (
    <ChartWrapper className={className}>
      <NoSsr>
        <Chart
          type="bar"
          format={format}
          labels={getLabels()}
          dataset={getDataset()}
          options={getChartOptions()}
          shadowed
        />
      </NoSsr>
    </ChartWrapper>
  );
};

const propsAreEqual = (prevProps: Props, nextProps: Props) =>
  prevProps.values === nextProps.values;

const HistogramCardChart = React.memo(TheHistogramCardChart, propsAreEqual);

export default HistogramCardChart;
