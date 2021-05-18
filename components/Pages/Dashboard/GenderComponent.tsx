import { Box, withTheme } from '@material-ui/core';
import { ReactElement, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

import DashboardService from '#/services/DashboardService';
import { DashboardGender } from '#/types/Dashboard';

const ChartBox = withTheme(styled(Box)`
  height: 200px;
  border: solid 1px #000;
`);

const GenderComponent = (): ReactElement => {
  const [genders, setGenders] = useState<DashboardGender[]>([]);

  useEffect(() => {
    DashboardService.getGenders().then((data) => {
      setGenders(data);
    });
  }, []);

  const data = {
    labels: genders.map((g) => g.gender ?? 'Outros'),
    datasets: [
      {
        data: genders.map((g) => g.total),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
      },
    ],
  };

  return (
    <ChartBox>
      <Pie type="pie" data={data} height={10} />
    </ChartBox>
  );
};

export default GenderComponent;
