export interface UserProfile {
  displayName: string;
  email: string;
  key: string;
  provider: string;
}

export interface Option {
  value: string;
  label: string;
}

export enum ModelTypes {
  Gender = 'Gender',
  MaritalStatus = 'MaritalStatus',
  SchoolTraining = 'SchoolTraining',
  SkinColor = 'SkinColor',
}
