import { Box, NoSsr } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import Chart from '../Chart';

import { DashboardTotalByCategory } from '#/types/Dashboard';
import { Format } from '#/types/Format';

const ChartWrapper = styled(Box)`
  flex: 1;
`;

interface Props {
  values: DashboardTotalByCategory[];
  format?: Format;
  className?: string;
}

const TheHorizontalBarCardChart = ({
  values,
  format = Format.number,
  className,
}: Props) => {
  const getLabels = () => values.map((v) => v.name);

  const getDataset = (): any => ({
    data: values.map((v) => v.total),
    minBarThickness: 24,
    maxBarThickness: 32,
    borderRadius: 4,
  });

  const getChartOptions = (): any => ({
    indexAxis: 'y',
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
        display: true,
        categoryPercentage: 2,
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
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
        />
      </NoSsr>
    </ChartWrapper>
  );
};

const propsAreEqual = (prevProps: Props, nextProps: Props) =>
  prevProps.values === nextProps.values;

const HorizontalBarCardChart = React.memo(
  TheHorizontalBarCardChart,
  propsAreEqual,
);

export default HorizontalBarCardChart;
