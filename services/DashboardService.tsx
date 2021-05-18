import { Api } from '#/packages/api/strapi';
import { DashboardGender } from '#/types/Dashboard';

class DashboardService {
  static getGenders = () =>
    Api.get<DashboardGender[]>('dashboard/genders').then((res) => res.data);
}

export default DashboardService;
