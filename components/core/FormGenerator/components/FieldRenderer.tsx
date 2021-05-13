import { SelectField, Field } from '../types';

import BaseField from './BaseField';
import CheckboxField from './CheckboxField';
import SelectFieldComponent from './SelectField';
import TextField from './TextField';

const FIELD_COMPONENT = {
  select: SelectFieldComponent,
  checkbox: CheckboxField,
  text: TextField,
};

function FieldRenderer({ type, ...restProps }: Field | SelectField) {
  const { [type]: FieldComponent } = FIELD_COMPONENT;

  return (
    <BaseField type={type} {...restProps} FieldComponent={FieldComponent} />
  );
}

export default FieldRenderer;
