import MaterialTextField from '@material-ui/core/TextField';

export interface ITextField {
  label: string;
  id: string;
  required?: boolean;
}

export default function TextField({
  id,
  label,
  required,
}: ITextField): React.ReactElement {
  return (
    <MaterialTextField
      id={id}
      label={label}
      variant="outlined"
      required={required}
    />
  );
}

TextField.defaultProps = {
  required: false,
};
