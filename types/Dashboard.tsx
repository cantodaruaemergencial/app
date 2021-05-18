import { Moment } from 'moment';

export interface DashboardGender {
  gender: string;
  total: number;
}

export interface DashboardDate {
  date: Moment;
  total: number;
}

export interface OtherValue {
  label: string;
  value: number;
}

export interface HistoricalValue {
  date: Moment;
  value: number;
}

export interface DashboardCard {
  label: string;
  value: number;
  historicalValues: HistoricalValue[];
  otherValues: OtherValue[];
}

export interface DashboardData {
  entrances: DashboardCard;
  serviceAttendances: DashboardCard;
}
