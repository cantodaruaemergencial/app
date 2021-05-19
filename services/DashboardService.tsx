import moment from 'moment';

import { Api } from '#/packages/api/strapi';
import {
  DashboardCard,
  DashboardChartCard,
  DashboardData,
  DashboardTotal,
  DashboardTotalByCategory,
  DashboardTotalByCategoryAndAverage,
  DashboardTotalByCategoryAndHistoric,
  DashboardTotalHistoricalListCard,
} from '#/types/Dashboard';

class DashboardService {
  private static get = async <T extends unknown>(route: string): Promise<T> =>
    // if (route === 'services')
    //   return Promise.resolve<T>([
    //     {
    //       name: 'Nome do serviço 1',
    //       total: Math.round(Math.random() * 100),
    //       monthTotal: Math.round(Math.random() * 500),
    //       weekTotal: Math.round(Math.random() * 1000),
    //     },
    //     {
    //       name: 'Nome do serviço 2',
    //       total: Math.round(Math.random() * 100),
    //       monthTotal: Math.round(Math.random() * 500),
    //       weekTotal: Math.round(Math.random() * 1000),
    //     },
    //     {
    //       name: 'Nome do serviço 3',
    //       total: Math.round(Math.random() * 100),
    //       monthTotal: Math.round(Math.random() * 500),
    //       weekTotal: Math.round(Math.random() * 1000),
    //     },
    //     {
    //       name: 'Nome do serviço 4',
    //       total: Math.round(Math.random() * 100),
    //       monthTotal: Math.round(Math.random() * 500),
    //       weekTotal: Math.round(Math.random() * 1000),
    //     },
    //     {
    //       name: 'Nome do serviço 5',
    //       total: Math.round(Math.random() * 100),
    //       monthTotal: Math.round(Math.random() * 500),
    //       weekTotal: Math.round(Math.random() * 1000),
    //     },
    //     {
    //       name: 'Nome do serviço 6',
    //       total: Math.round(Math.random() * 100),
    //       monthTotal: Math.round(Math.random() * 500),
    //       weekTotal: Math.round(Math.random() * 1000),
    //     },
    //     {
    //       name: 'Nome do serviço 7',
    //       total: Math.round(Math.random() * 100),
    //       monthTotal: Math.round(Math.random() * 500),
    //       weekTotal: Math.round(Math.random() * 1000),
    //     },
    //     {
    //       name: 'Nome do serviço 8',
    //       total: Math.round(Math.random() * 100),
    //       monthTotal: Math.round(Math.random() * 500),
    //       weekTotal: Math.round(Math.random() * 1000),
    //     },
    //   ] as T);

    Api.get<T>(`dashboard/${route}`).then((res) => res.data);

  private static toCard = (
    label: string,
    { total, monthTotal, weekTotal, totalByCategory }: DashboardTotal,
  ): DashboardCard => {
    let otherValues = null;

    if (monthTotal != null)
      otherValues = [
        { value: monthTotal || 0, label: 'no mês' },
        { value: weekTotal || 0, label: 'na semana' },
      ];

    const historicalValues = totalByCategory?.map((tbc) => ({
      value: tbc.total,
      date: moment(tbc.name),
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
    values: data.sort((a, b) => (+a.total < +b.total ? 1 : -1)),
  });

  private static toChartCardWithAverage = (
    label: string,
    description: string | null = null,
    { average, totalByCategory }: DashboardTotalByCategoryAndAverage,
  ): DashboardChartCard => ({
    label,
    description,
    average,
    values: totalByCategory,
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
      DashboardService.get<DashboardTotalByCategoryAndAverage>('ages'),
      DashboardService.get<DashboardTotalByCategoryAndAverage>('homelessness'),
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
      ages: DashboardService.toChartCardWithAverage('Idade', 'em anos', ages),
      homelessness: DashboardService.toChartCardWithAverage(
        'Tempo de rua',
        'em meses',
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
