import moment from 'moment';

import { Api } from '#/packages/api/strapi';
import {
  DashboardCard,
  DashboardData,
  DashboardTotalHistoricalListCard,
  DashboardTotal,
  DashboardTotalByCategory,
  DashboardTotalByCategoryAndHistoric,
  DashboardTotalByYearsAndAverage,
  DashboardHistogramCard,
  DashboardChartCard,
} from '#/types/Dashboard';

class DashboardService {
  private static get = async <T extends unknown>(route: string): Promise<T> => {
    if (route === 'service-attendances')
      return Promise.resolve<T>({
        total: 204300,
        monthTotal: 756,
        weekTotal: 25,
        totalByMonth: [
          {
            month: moment().clone().subtract(1, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(2, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(3, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(4, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(5, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(6, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(7, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(8, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(9, 'month'),
            total: Math.round(Math.random() * 100),
          },
          {
            month: moment().clone().subtract(10, 'month'),
            total: Math.round(Math.random() * 100),
          },
        ],
      } as T);

    if (route === 'services')
      return Promise.resolve<T>([
        {
          name: 'Nome do serviço',
          total: Math.round(Math.random() * 100),
          monthTotal: Math.round(Math.random() * 100),
          weekTotal: Math.round(Math.random() * 100),
        },
        {
          name: 'Nome do serviço',
          total: Math.round(Math.random() * 100),
          monthTotal: Math.round(Math.random() * 100),
          weekTotal: Math.round(Math.random() * 100),
        },
        {
          name: 'Nome do serviço',
          total: Math.round(Math.random() * 100),
          monthTotal: Math.round(Math.random() * 100),
          weekTotal: Math.round(Math.random() * 100),
        },
        {
          name: 'Nome do serviço',
          total: Math.round(Math.random() * 100),
          monthTotal: Math.round(Math.random() * 100),
          weekTotal: Math.round(Math.random() * 100),
        },
        {
          name: 'Nome do serviço',
          total: Math.round(Math.random() * 100),
          monthTotal: Math.round(Math.random() * 100),
          weekTotal: Math.round(Math.random() * 100),
        },
        {
          name: 'Nome do serviço',
          total: Math.round(Math.random() * 100),
          monthTotal: Math.round(Math.random() * 100),
          weekTotal: Math.round(Math.random() * 100),
        },
        {
          name: 'Nome do serviço',
          total: Math.round(Math.random() * 100),
          monthTotal: Math.round(Math.random() * 100),
          weekTotal: Math.round(Math.random() * 100),
        },
        {
          name: 'Nome do serviço',
          total: Math.round(Math.random() * 100),
          monthTotal: Math.round(Math.random() * 100),
          weekTotal: Math.round(Math.random() * 100),
        },
      ] as T);

    if (route === 'ages')
      return Promise.resolve<T>({
        average: Math.round(Math.random() * 100),
        totalByYear: [
          { years: 25, total: Math.round(Math.random() * 100) },
          { years: 26, total: Math.round(Math.random() * 100) },
          { years: 27, total: Math.round(Math.random() * 100) },
          { years: 28, total: Math.round(Math.random() * 100) },
          { years: 29, total: Math.round(Math.random() * 100) },
          { years: 30, total: Math.round(Math.random() * 100) },
          { years: 31, total: Math.round(Math.random() * 100) },
          { years: 32, total: Math.round(Math.random() * 100) },
          { years: 33, total: Math.round(Math.random() * 100) },
        ],
      } as T);

    if (route === 'homelessness')
      return Promise.resolve<T>({
        average: Math.round(Math.random() * 100),
        totalByYear: [
          { years: 1, total: Math.round(Math.random() * 100) },
          { years: 2, total: Math.round(Math.random() * 100) },
          { years: 3, total: Math.round(Math.random() * 100) },
          { years: 4, total: Math.round(Math.random() * 100) },
          { years: 5, total: Math.round(Math.random() * 100) },
          { years: 6, total: Math.round(Math.random() * 100) },
          { years: 7, total: Math.round(Math.random() * 100) },
          { years: 8, total: Math.round(Math.random() * 100) },
        ],
      } as T);

    return Api.get<T>(`dashboard/${route}`).then((res) => res.data);
  };

  private static toCard = (
    label: string,
    { total, monthTotal, weekTotal, totalByMonth }: DashboardTotal,
  ): DashboardCard => {
    let otherValues = null;

    if (monthTotal != null)
      otherValues = [
        { value: monthTotal || 0, label: 'no mês' },
        { value: weekTotal || 0, label: 'na semana' },
      ];

    const historicalValues = totalByMonth?.map((tbm) => ({
      value: tbm.total,
      date: moment(tbm.month),
    }));

    return {
      label,
      value: total,
      otherValues,
      historicalValues,
    };
  };

  private static toTotalHistoricalListCard = (
    label: string,
    data: DashboardTotalByCategoryAndHistoric[],
  ): DashboardTotalHistoricalListCard => ({
    label,
    values: data,
  });

  private static toChartCard = (
    label: string,
    data: DashboardTotalByCategory[],
  ): DashboardChartCard => ({
    label,
    values: data.sort((a, b) => (a.total > b.total ? 1 : -1)),
  });

  private static toHistogramCard = (
    label: string,
    { average, totalByYear }: DashboardTotalByYearsAndAverage,
  ): DashboardHistogramCard => ({
    label,
    average,
    values: totalByYear
      .map((tby) => ({ x: tby.years, y: tby.total }))
      .sort((a, b) => (a.x > b.x ? 1 : -1)),
  });

  static getDashboardData = async (): Promise<DashboardData> => {
    const [
      people,
      entrances,
      serviceAttendances,
      services,
      genders,
      skinColors,
      schoolTrainings,
      ages,
      homelessness,
    ] = await Promise.all([
      DashboardService.get<DashboardTotal>('people'),
      DashboardService.get<DashboardTotal>('entrances'),
      DashboardService.get<DashboardTotal>('service-attendances'),
      DashboardService.get<DashboardTotalByCategoryAndHistoric[]>('services'),
      DashboardService.get<DashboardTotalByCategory[]>('genders'),
      DashboardService.get<DashboardTotalByCategory[]>('skin-colors'),
      DashboardService.get<DashboardTotalByCategory[]>('school-trainings'),
      DashboardService.get<DashboardTotalByYearsAndAverage>('ages'),
      DashboardService.get<DashboardTotalByYearsAndAverage>('homelessness'),
    ]);

    return {
      people: DashboardService.toCard('Pessoas atendidas', people),
      entrances: DashboardService.toCard('Entradas', entrances),
      serviceAttendances: DashboardService.toCard(
        'Atendimentos',
        serviceAttendances,
      ),
      services: DashboardService.toTotalHistoricalListCard(
        'Serviços',
        services,
      ),
      genders: DashboardService.toChartCard('Gênero', genders),
      skinColors: DashboardService.toChartCard('Cor/Raça', skinColors),
      ages: DashboardService.toHistogramCard('Idade', ages),
      homelessness: DashboardService.toHistogramCard(
        'Tempo de rua',
        homelessness,
      ),
      schoolTrainings: DashboardService.toChartCard(
        'Escolaridade',
        schoolTrainings,
      ),
    };
  };
}

export default DashboardService;
