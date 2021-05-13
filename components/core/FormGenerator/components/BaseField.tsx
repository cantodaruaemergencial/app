import { FormHelperText } from '@material-ui/core';
import { ReactElement } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { Field, SelectField } from '../types';

type BaseField = (Field | SelectField) & {
  FieldComponent: (props: any) => JSX.Element;
};

const BaseField = ({
  name,
  label,
  defaultValue,
  rules,
  FieldComponent,
  ...restProps
}: BaseField): ReactElement => {
  const { control } = useFormContext();

  const renderField = ({ field, fieldState: { error } }: any): ReactElement => (
    <div>
      <FieldComponent
        label={label}
        hasError={error}
        {...field}
        {...restProps}
      />
      {error?.message && (
        <FormHelperText error>{error?.message}</FormHelperText>
      )}
    </div>
  );

  return (
    <Controller
      defaultValue={defaultValue}
      render={renderField}
      control={control}
      name={name}
      rules={rules}
    />
  );
};

export default BaseField;
