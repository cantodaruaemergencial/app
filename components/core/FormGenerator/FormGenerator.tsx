import { createStyles, makeStyles } from '@material-ui/core';
import { ReactElement } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import Button from '../../Button';

import FieldRenderer from './components/FieldRenderer';
import { Form, FieldFormats } from './types';

const useStyles = makeStyles(() =>
  createStyles({
    row: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginBottom: 20,

      '&:last-child': {
        marginBottom: 0,
      },
    },
  }),
);

interface Props extends Form {
  onSubmit(data: any): void;
}

function FormGenerator({ fields, submitLabel, onSubmit }: Props): ReactElement {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;

  const renderField = (field: FieldFormats): ReactElement => (
    <div className={classes.row}>
      <FieldRenderer {...field} />
    </div>
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(renderField)}
        <Button type="submit">{submitLabel || 'Submeter'}</Button>
      </form>
    </FormProvider>
  );
}

export default FormGenerator;
