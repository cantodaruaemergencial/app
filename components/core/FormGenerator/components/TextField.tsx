import { TextField as BaseTextField } from '@material-ui/core';
import { ChangeEvent } from 'react';

import { Field } from '../types';

interface Props extends Field {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  hasError: boolean;
}

function TextField({
  onChange,
  value,
  label,
  placeholder,
  hasError,
  ...restProps
}: Props) {
  return (
    <BaseTextField
      {...restProps}
      error={hasError}
      onChange={onChange}
      value={value}
      label={label}
      placeholder={placeholder}
    />
  );
}

export default TextField;
