import { Moment } from 'moment';

export interface DashboardGender {
  gender: string;
  total: number;
}

export interface DashboardDate {
  date: string;
  total: number;
}

export interface HistoricalValue {
  date: Moment;
  value: number;
}
