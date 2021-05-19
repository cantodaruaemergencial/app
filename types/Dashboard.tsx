import { Moment } from 'moment';

import { Format } from './Format';

export interface DashboardTotalByCategory {
  name: number;
  total: number;
}

export interface DashboardTotalByCategoryAndHistoric {
  name: number;
  total: number;
  monthTotal: number;
  weekTotal: number;
}

export interface DashboardTotal {
  total: number;
  monthTotal?: number;
  weekTotal?: number;
  totalByMonth?: DashboardTotalByMonth[];
}

export interface DashboardTotalByMonth {
  month: Date;
  total: number;
}

export interface DashboardTotalByYears {
  years: number;
  total: number;
}

export interface DashboardTotalByYearsAndAverage {
  average: number;
  totalByYear: DashboardTotalByYears[];
}

export interface DashboardCardOtherValue {
  label: string;
  value: number;
}

export interface DashboardCardHistoricalValue {
  date: Moment;
  value: number;
}

export interface DashboardCoordinateValue {
  x: number;
  y: number;
}

export interface DashboardCard {
  label: string;
  value: number;
  format?: Format;
  historicalValues?: DashboardCardHistoricalValue[] | null;
  otherValues?: DashboardCardOtherValue[] | null;
}

export interface DashboardTotalHistoricalListCard {
  label: string;
  values: DashboardTotalByCategoryAndHistoric[];
}

export interface DashboardChartCard {
  label: string;
  values: DashboardTotalByCategory[];
}

export interface DashboardHistogramCard {
  label: string;
  average: number;
  values?: DashboardCoordinateValue[];
}

export interface DashboardData {
  people: DashboardCard;
  entrances: DashboardCard;
  serviceAttendances: DashboardCard;
  services: DashboardTotalHistoricalListCard;
  genders: DashboardChartCard;
  skinColors: DashboardChartCard;
  ages: DashboardHistogramCard;
  homelessness: DashboardHistogramCard;
  schoolTrainings: DashboardChartCard;
}
