import { Checkbox, FormControlLabel } from '@material-ui/core';
import { ChangeEvent } from 'react';

import { Field } from '../types';

interface Props extends Field {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  label: string;
}

function CheckboxField({ onChange, value, label }: Props) {
  return (
    <FormControlLabel
      control={<Checkbox onChange={onChange} checked={value} />}
      label={label}
    />
  );
}

export default CheckboxField;
