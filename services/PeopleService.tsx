import { Form, FieldType, FormSection } from '#/types/Forms';

class PeopleService {
  static getPersonForm = async (): Promise<Form> => {
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
          },
          {
            property: 'skin_color',
            label: 'Cor/Raça',
            type: FieldType.select,
          },
          {
            property: 'marital_status',
            label: 'Estado Civil',
            type: FieldType.select,
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
            type: FieldType.number,
          },
          {
            property: 'HasCpf',
            label: 'Possui CPF?',
            type: FieldType.boolean,
          },
          {
            property: 'Cpf',
            label: 'Número do CPF',
            type: FieldType.number,
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
            description: 'Familiar ou amigo',
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
