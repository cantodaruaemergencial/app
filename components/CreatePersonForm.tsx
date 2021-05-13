import { Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import FormGenerator from './core/FormGenerator/FormGenerator';
import { Form } from './core/FormGenerator/types';

import { ModelTypes } from '#/packages/entities/types';

const form: Form = {
  submitLabel: 'Criar Pessoa',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nome',
      rules: {
        required: 'Esse campo é obrigatório',
        minLength: { value: 5, message: 'O tamanha mínimo é 5' },
      },
    },
    {
      name: 'age',
      type: 'text',
      label: 'Age',
      rules: {
        min: 0,
        required: 'Esse campo é obrigatório',
        valueAsNumber: true,
      },
    },
    {
      name: 'birthDate',
      type: 'text',
      label: 'Data de nascimento',
      rules: {
        required: 'Esse campo é obrigatório',
        valueAsDate: true,
      },
    },
    {
      name: 'gender',
      type: 'select',
      label: 'Gênero',
      model: ModelTypes.Gender,
      rules: {
        required: 'Esse campo é obrigatório',
      },
    },
    {
      name: 'maritalStatus',
      type: 'select',
      label: 'Estado Civil',
      model: ModelTypes.MaritalStatus,
      rules: {
        required: 'Esse campo é obrigatório',
      },
    },
    {
      name: 'schoolTraining',
      type: 'select',
      label: 'Educação',
      model: ModelTypes.SchoolTraining,
      rules: {
        required: 'Esse campo é obrigatório',
      },
    },
    {
      name: 'skinColor',
      type: 'select',
      label: 'Raça',
      model: ModelTypes.SkinColor,
      rules: {
        required: 'Esse campo é obrigatório',
      },
    },
  ],
};

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      margin: '5rem auto',
      maxWidth: '40rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'space-between',
    },
  }),
);

function CreatePersonForm() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <FormGenerator {...form} onSubmit={console.log} />
    </Card>
  );
}

export default CreatePersonForm;
