import { Api } from '#/packages/api/strapi';
import { DashboardGender } from '#/types/Dashboard';

class DashboardService {
  static genders = (): Promise<DashboardGender[]> =>
    Api.get('dashboard/genders');
}

export default DashboardService;
