import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ChangeEvent, useEffect, useState } from 'react';

import { SelectField as SelectFieldType } from '../types';

import { useFetchSelectOptions } from '#/packages/api/provider';
import { Option } from '#/packages/entities/types';

interface Props extends SelectFieldType {
  onChange: (e: ChangeEvent<any>) => void;
  value: string;
  hasError: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
  }),
);

function SelectField({
  onChange,
  value,
  label,
  options: defaultOptions,
  model,
  hasError,
  ...restProps
}: Props) {
  const classes = useStyles();
  const { options: fetchOptions } = useFetchSelectOptions({ model });
  const [options, setOptions] = useState(defaultOptions || []);

  useEffect(() => {
    if (fetchOptions.length) {
      setOptions(fetchOptions);
    }
  }, [fetchOptions]);

  return (
    <FormControl className={classes.formControl} error={hasError}>
      <InputLabel>{label}</InputLabel>
      <Select
        onChange={onChange}
        value={value || ''}
        label={label}
        {...restProps}
      >
        {options.map((option: Option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
