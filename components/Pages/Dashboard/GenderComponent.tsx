import { ReactElement, useEffect, useState } from 'react';

import DashboardService from '#/services/DashboardService';
import { DashboardGender } from '#/types/Dashboard';

const GenderComponent = (): ReactElement => {
  const [genders, setGenders] = useState<DashboardGender[]>([]);

  useEffect(() => {
    DashboardService.getGenders().then((data) => {
      setGenders(data);
    });
  }, []);

  const list = genders.map((g) => (
    <li key={g.gender ?? 'Outros'}>
      {g.gender ?? 'Outros'} - <strong>{g.total}</strong>
    </li>
  ));

  return <ul>{list}</ul>;
};

export default GenderComponent;
