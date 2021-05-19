import EntrancesService from './EntrancesService';
import ServiceAttendancesService from './ServiceAttendancesService';

import { Api } from '#/packages/api/strapi';
import { DashboardData, DashboardGender } from '#/types/Dashboard';

class DashboardService {
  static getGenders = () =>
    Api.get<DashboardGender[]>('dashboard/genders').then((res) => res.data);

  static getDashboardData = async (): Promise<DashboardData> => {
    const [entrances, serviceAttendances] = await Promise.all([
      EntrancesService.getDashboardData(),
      ServiceAttendancesService.getDashboardData(),
    ]);

    return {
      entrances,
      serviceAttendances,
    };
  };
}

export default DashboardService;
