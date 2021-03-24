// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

type IFormVariants = 'Select' | 'DatePicker' | 'TextField';

interface IMaritalStatus {
  id: number;
  maritalStatus:
    | 'Solteiro'
    | 'Casado'
    | 'Viúvo'
    | 'Divorciado'
    | 'Separado'
    | 'União'
    | 'Amasiado'
    | 'União estável';
}

interface IUser {
  id: number;
  name: string;
  socialName: string;
  birthdate: Date;
  motherName: string;
  birthPlace: string;
  skinColor: string;
  gender: string;
  childrens: number;
  hasBabitation: boolean;
  homelessTime: string;
  emergencyAid: boolean;
  pbhBasket: boolean;
  uniqueRegister: boolean;
  hasGeneralRegister: boolean;
  generalRegister: string;
  hasCpf: boolean;
  cpf: string;
  hasCtps: boolean;
  hasBirthCertificate: boolean;
  maritalStatus: string;
  schoolTraining: string;
  referenceLocation: string;
  occupation: string;
  profession: string;
  contactPhone: string;
  referenceAddress: string;
  demands: string;
  observation: string;
  createdBy: string;
  createdTime: Date;
}

export type { IMaritalStatus, IUser, IFormVariants };
