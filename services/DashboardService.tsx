import { Api } from '#/packages/api/strapi';
import { DashboardDate, DashboardGender } from '#/types/Dashboard';

class DashboardService {
  static getGenders = () =>
    Api.get<DashboardGender[]>('dashboard/genders').then((res) => res.data);

  static getDates = () =>
    Api.get<DashboardDate[]>('dashboard/dates').then((res) => res.data);
}

export default DashboardService;
