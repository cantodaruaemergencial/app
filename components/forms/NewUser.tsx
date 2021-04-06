import HookFormGen, {
  FieldType,
} from '#/components/core/FormGenerator/hookFormGenerator';

const fields: { [name: string]: FieldType } = {
  name: 'input',
  gender: 'select',
  maritialStatus: 'select',
  age: 'input',
  schoolTraining: 'select',
};

const options = {
  gender: [
    { value: '1', name: 'Masculino' },
    { value: '2', name: 'Feminino' },
    { value: '3', name: 'Outros' },
  ],
  maritialStatus: [
    { value: '1', name: 'Solteiro' },
    { value: '2', name: 'Casado' },
    { value: '3', name: 'Viúvo' },
    { value: '4', name: 'Divorciado' },
    { value: '5', name: 'Separado' },
    { value: '6', name: 'União estável' },
    { value: '7', name: 'Amasiado' },
  ],
  schoolTraining: [
    { value: '1', name: 'Analfabeto' },
    { value: '2', name: 'Assina o nome' },
    { value: '3', name: 'Fundamental incompleto' },
    { value: '4', name: 'Fundamental completo' },
    { value: '5', name: 'Ensino médio incompleto' },
    { value: '6', name: 'Ensino médio completo' },
    { value: '7', name: 'Superior incompleto' },
    { value: '8', name: 'Superior completo' },
  ],
};

const NewUserForm = (): React.ReactElement => (
  <HookFormGen options={options} fields={fields} />
);

export default NewUserForm;
