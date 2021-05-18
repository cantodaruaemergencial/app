import { Box, withTheme } from '@material-ui/core';
import { ReactElement, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

import DashboardService from '#/services/DashboardService';
import { DashboardDate } from '#/types/Dashboard';

const ChartBox = withTheme(styled(Box)`
  border: solid 1px #000;
`);

const DateComponent = (): ReactElement => {
  const [dates, setDates] = useState<DashboardDate[]>([]);

  useEffect(() => {
    DashboardService.getEntrancesByDate().then((data) => {
      setDates(data);
    });
  }, []);

  const data = {
    labels: dates.map((g) => g.date.substr(0, 10)),
    datasets: [
      {
        label: 'Atendimentos',
        data: dates.map((g) => g.total),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <ChartBox>
      <Line type="line" data={data} />
    </ChartBox>
  );
};

export default DateComponent;
