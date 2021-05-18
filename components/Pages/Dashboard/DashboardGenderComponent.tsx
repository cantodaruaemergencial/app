import DashboardService from '#/services/DashboardService';
import { ReactElement, useEffect, useState } from 'react';

const DashboardGenderComponent = (): ReactElement => {
  const [genders, setGenders] = useState<any[]>([]);

  useEffect(() => {
    DashboardService.getGenders().then((genderList) => setGenders(genderList));
  }, []);

  return (
    <ul>
      <li>Lista</li>
    </ul>
  );
};

export default DashboardGenderComponent;
