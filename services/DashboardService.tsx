import moment from 'moment';

import { Api } from '#/packages/api/strapi';
import {
  DashboardData,
  DashboardDate as EntrancesByDate,
  DashboardGender,
} from '#/types/Dashboard';

class DashboardService {
  static getGenders = () =>
    Api.get<DashboardGender[]>('dashboard/genders').then((res) => res.data);

  static getEntrancesCount = (query?: any) =>
    Api.get<number>('person-entrances/count', query || {}).then(
      (res) => res.data,
    );

  static getEntrancesByDate = () =>
    Api.get<EntrancesByDate[]>('dashboard/dates')
      .then((res) => res.data)
      .then((data) =>
        data?.map((ebd) => {
          ebd.date = moment(ebd.date);
          ebd.total = +ebd.total;
          return ebd;
        }),
      );

  static getServicesAttendancesCount = () =>
    Api.get<number>('service-attendances/count').then((res) => res.data);

  static getDashboardData = async (): Promise<DashboardData> => {
    const monthFilter = {
      DateTime_gte: moment().clone().startOf('month').format('YYYY-MM-DD'),
    };

    const weekFilter = {
      DateTime_gte: moment().clone().startOf('week').format('YYYY-MM-DD'),
    };

    const [
      totalEntrances,
      monthEntrances,
      weekEntrances,
      entrancesByDate,
    ] = await Promise.all([
      DashboardService.getEntrancesCount(),
      DashboardService.getEntrancesCount(monthFilter),
      DashboardService.getEntrancesCount(weekFilter),
      DashboardService.getEntrancesByDate(),
    ]);

    const totalServiceAttendances = 302400;
    const monthServiceAttendances = 15000;
    const weekServiceAttendances = 3500;
    const serviceAttendancesByDate = entrancesByDate;

    return {
      entrances: {
        label: 'Entradas',
        value: totalEntrances,
        otherValues: [
          { value: monthEntrances, label: 'neste mês' },
          { value: weekEntrances, label: 'nesta semana' },
        ],
        historicalValues: entrancesByDate.map((e) => ({
          date: e.date,
          value: e.total,
        })),
      },
      serviceAttendances: {
        label: 'Atendimentos',
        value: totalServiceAttendances,
        otherValues: [
          { value: monthServiceAttendances, label: 'neste mês' },
          { value: weekServiceAttendances, label: 'nesta semana' },
        ],
        historicalValues: serviceAttendancesByDate.map((e) => ({
          date: e.date,
          value: e.total,
        })),
      },
    };
  };
}

export default DashboardService;
