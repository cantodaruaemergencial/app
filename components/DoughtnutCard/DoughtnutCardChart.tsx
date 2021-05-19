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

const TheDoughtnutCardChart = ({
  values,
  format = Format.number,
  className,
}: Props) => {
  const getLabels = () => values.map((v) => v.name);

  const getDataset = (): any => ({
    data: values.map((v) => v.total),
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
        display: false,
      },
    },
  });

  return (
    <ChartWrapper className={className}>
      <NoSsr>
        <Chart
          type="doughnut"
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

const DoughtnutCardChart = React.memo(TheDoughtnutCardChart, propsAreEqual);

export default DoughtnutCardChart;
