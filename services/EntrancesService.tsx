import moment from 'moment';

import { Api } from '#/packages/api/strapi';
import { DashboardDate } from '#/types/Dashboard';
import { Filter } from '#/utils/filters';

class EntrancesService {
  static getCount = (query?: any) =>
    Api.get<number>('person-entrances/count', query || {}).then(
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
      EntrancesService.getCount(),
      EntrancesService.getCount(Filter.byThisMonth('DateTime')),
      EntrancesService.getCount(Filter.byThisWeek('DateTime')),
      EntrancesService.getByDate(),
    ]);

    return {
      label: 'Entradas',
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

export default EntrancesService;
