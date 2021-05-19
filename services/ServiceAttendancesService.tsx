import moment from 'moment';

import { Api } from '#/packages/api/strapi';
import { DashboardDate } from '#/types/Dashboard';
import { Filter } from '#/utils/filters';

class ServiceAttendancesService {
  static getCount = (query?: any) =>
    Api.get<number>('service-attendances/count', query || {}).then(
      (res) => res.data,
    );

  static getByDate = () =>
    Api.get<DashboardDate[]>('dashboard/dates')
      .then((res) => res.data)
      .then((data) =>
        data?.map((ebd) => {
          ebd.date = moment(ebd.date);
          ebd.total = +ebd.total;
          return ebd;
        }),
      );

  static getDashboardData = async () => {
    const [total, monthTotal, weekTotal, totalByDate] = await Promise.all([
      ServiceAttendancesService.getCount(),
      ServiceAttendancesService.getCount(Filter.byThisMonth('Date')),
      ServiceAttendancesService.getCount(Filter.byThisWeek('Date')),
      ServiceAttendancesService.getByDate(),
    ]);

    return {
      label: 'Atendimentos',
      value: total,
      otherValues: [
        { value: monthTotal, label: 'neste mês' },
        { value: weekTotal, label: 'nesta semana' },
      ],
      historicalValues: totalByDate.map((e) => ({
        date: e.date,
        value: e.total,
      })),
    };
  };
}

export default ServiceAttendancesService;
