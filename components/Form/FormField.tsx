import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField as MuiTextField,
  Tooltip,
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Controller, FieldError } from 'react-hook-form';
import styled from 'styled-components';

import { FieldType, FormField as FormFieldType } from '#/types/Forms';

const Container = styled(Box)`
  margin-bottom: 2rem;
`;

const TextField = styled(MuiTextField)`
  width: 100%;
`;

const InfoIcon = styled(InfoOutlinedIcon)`
  color: rgba(0, 0, 0, 0.4);
`;

interface Props {
  className?: string;
  field: FormFieldType;
  control: any;
}

interface RenderType {
  onChange: any;
  value: any;
  error: FieldError | undefined;
}

const FormField = ({
  field: { property, label, description, type },
  control,
  className,
}: Props) => {
  const renderTooltip = () =>
    !description ? null : (
      <InputAdornment position="end">
        <Tooltip title={description || ''}>
          <InfoIcon fontSize="small" />
        </Tooltip>
      </InputAdornment>
    );

  const renderInput = ({ onChange, error }: RenderType) => {
    let textFieldType = 'text';

    if (type === FieldType.number) textFieldType = 'number';

    if (type === FieldType.date) textFieldType = 'date';

    return (
      <TextField
        label={label}
        onChange={onChange}
        type={textFieldType}
        variant="outlined"
        error={!!error}
        helperText={error ? error.message : null}
        InputProps={{
          endAdornment: renderTooltip(),
        }}
      />
    );
  };

  const renderBoolean = ({ onChange, value }: RenderType) => (
    <FormControlLabel
      control={<Checkbox value={value} onChange={onChange} color="primary" />}
      label={label}
    />
  );

  const renderSelect = ({ onChange }: RenderType) => {
    const multiple = type === FieldType.multiple;

    const handleOnChange = (_: any, data: any) => {
      const values = !multiple ? data?.value : data?.map((d: any) => d.value);
      onChange(values);
    };

    return (
      <Autocomplete
        options={[
          { value: 1, label: 'opção 1' },
          { value: 2, label: 'opção 2' },
          { value: 3, label: 'opção 3' },
        ]}
        onChange={handleOnChange}
        getOptionLabel={(o) => o.label}
        getOptionSelected={(o, v) => o.value === v.value}
        multiple={multiple}
        openOnFocus
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    );
  };

  const getRender = () => {
    switch (type) {
      case FieldType.boolean:
        return renderBoolean;
      case FieldType.select:
      case FieldType.multiple:
        return renderSelect;
      case FieldType.date:
      case FieldType.number:
      case FieldType.input:
      default:
        return renderInput;
    }
  };

  return (
    <Container className={className}>
      <Controller
        name={property}
        control={control}
        // rules={{ required: 'Obrigatório' }}
        render={({ field: { onChange, value }, fieldState: { error } }) =>
          getRender()({ onChange, value, error })
        }
      />
    </Container>
  );
};

export default FormField;
