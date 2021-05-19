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
  private static get = async <T extends unknown>(route: string): Promise<T> =>
    Api.get<T>(`dashboard/${route}`).then((res) => res.data);

  private static toCard = (
    label: string,
    { total, monthTotal, weekTotal, totalByMonth }: DashboardTotal,
  ): DashboardCard => {
    let otherValues;

    if (monthTotal !== null)
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
    values: data,
  });

  private static toHistogramCard = (
    label: string,
    { average, totalByYear }: DashboardTotalByYearsAndAverage,
  ): DashboardHistogramCard => ({
    label,
    average,
    values: totalByYear.map((tby) => ({ x: tby.years, y: tby.total })),
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
