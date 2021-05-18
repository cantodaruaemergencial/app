import { Api } from '#/packages/api/strapi';

class DashboardService {
  static getGenders = () =>
    Api.get<any[]>('dashboard/genders').then((res) => res.data);
}

export default DashboardService;
