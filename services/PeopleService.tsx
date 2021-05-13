import { Api } from '#/packages/api/strapi';
import { Form, FieldType, FormSection } from '#/types/Forms';

class PeopleService {
  static getGenders = () => Api.get('genders');

  static getSkinColors = () => Api.get('skin-colors');

  static getMaritalStatuses = () => Api.get('marital-statuses');

  static getSchoolTrainings = () => Api.get('school-trainings');

  static getExternalServices = () => Api.get('external-services');

  static getBenefits = () => Api.get('benefits');

  static getPersonForm = async (): Promise<Form> => {
    const [
      genders,
      // skinColors,
      maritalStatuses,
      schoolTrainings,
      externalServices,
      benefits,
    ] = await Promise.all([
      PeopleService.getGenders(),
      // PeopleService.getSkinColors(),
      PeopleService.getMaritalStatuses(),
      PeopleService.getSchoolTrainings(),
      PeopleService.getExternalServices(),
      PeopleService.getBenefits(),
    ]);

    const sections: FormSection[] = [
      {
        label: 'Dados Pessoais',
        fields: [
          {
            property: 'CardNumber',
            label: 'Cartão',
            type: FieldType.input,
          },
          {
            property: 'Name',
            label: 'Nome',
            type: FieldType.input,
          },
          {
            property: 'SocialName',
            label: 'Nome Social',
            type: FieldType.input,
          },
          {
            property: 'MotherName',
            label: 'Nome da Mãe',
            type: FieldType.input,
          },
          {
            property: 'BirthDate',
            label: 'Data de Nascimento',
            type: FieldType.date,
          },
          {
            property: 'BirthPlace',
            label: 'Naturalidade',
            description: 'Exemplo: Belo Horizonte - MG',
            type: FieldType.input,
          },
          {
            property: 'gender',
            label: 'Sexo',
            type: FieldType.select,
            options: genders.map((g: any) => ({
              value: g.id,
              label: g.Gender,
            })),
          },
          {
            property: 'skin_color',
            label: 'Cor/Raça',
            type: FieldType.select,
            // options: skinColors.map((g: any) => ({ value: g.id, label: g.SkinColor })),
          },
          {
            property: 'marital_status',
            label: 'Estado Civil',
            type: FieldType.select,
            options: maritalStatuses.map((ms: any) => ({
              value: ms.id,
              label: ms.MaritalStatus,
            })),
          },
          {
            property: 'Childrens',
            label: 'Número de Filhos',
            type: FieldType.number,
          },
          {
            property: 'school_training',
            label: 'Formação Escolar',
            type: FieldType.select,
            options: schoolTrainings.map((st: any) => ({
              value: st.id,
              label: st.SchoolTraining,
            })),
          },
          {
            property: 'Occupation',
            label: 'Ocupação',
            type: FieldType.input,
          },
          {
            property: 'Profession',
            label: 'Profissão',
            type: FieldType.input,
          },
        ],
      },
      {
        label: 'Documentação',
        fields: [
          {
            property: 'HasGeneralRegister',
            label: 'Possui RG?',
            type: FieldType.boolean,
          },
          {
            property: 'GeneralRegister',
            label: 'Número do RG',
            type: FieldType.input,
          },
          {
            property: 'HasCpf',
            label: 'Possui CPF?',
            type: FieldType.boolean,
          },
          {
            property: 'Cpf',
            label: 'Número do CPF',
            type: FieldType.input,
          },
          {
            property: 'HasBirthCertificate',
            label: 'Possui Certidão de Nascimento?',
            type: FieldType.boolean,
          },
          {
            property: 'HasCtps',
            label: 'Possui CTPS?',
            type: FieldType.boolean,
          },
        ],
      },
      {
        label: 'Informações Adicionais',
        fields: [
          {
            property: 'HasEmergencyAid',
            label: 'Recebe Auxílio Emergencial?',
            type: FieldType.boolean,
          },
          {
            property: 'HasPbhBasket',
            label: 'Recebe Cesta PBH?',
            type: FieldType.boolean,
          },
          {
            property: 'HasUniqueRegister',
            label: 'Possui Cadastro Único?',
            type: FieldType.boolean,
          },
          {
            property: 'Benefits',
            label: 'Recebe algum benefício?',
            type: FieldType.multiple,
            options: benefits.map((b: any) => ({
              value: b.id,
              label: b.benefit,
            })),
          },
          {
            property: 'ExternalServices',
            label: 'Utiliza ou frequenta algum dos serviços?',
            type: FieldType.multiple,
            options: externalServices.map((es: any) => ({
              value: es.id,
              label: es.ExternalService,
            })),
          },
          {
            property: 'HasHabitation',
            label: 'Possui moradia?',
            type: FieldType.boolean,
          },
          {
            property: 'HomelessTime',
            label: 'Tempo em situação de rua',
            type: FieldType.input,
          },
          {
            property: 'ReferenceAddress',
            label: 'Local de referência',
            type: FieldType.input,
          },
        ],
      },
      {
        label: 'Contatos e Observações',
        fields: [
          {
            property: 'ContactPhone',
            label: 'Telefone de Contato',
            type: FieldType.number,
          },
          {
            property: 'ReferenceLocation',
            label: 'Endereço de referência',
            description: 'Endereço de familiar ou amigo',
            type: FieldType.input,
          },
          {
            property: 'Demands',
            label: 'Demandas',
            type: FieldType.input,
          },
          {
            property: 'Observation',
            label: 'Observações',
            type: FieldType.input,
          },
        ],
      },
    ];

    return { sections };
  };
}

export default PeopleService;
