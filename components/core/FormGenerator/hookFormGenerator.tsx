import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  useForm,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';

type FieldType = 'select' | 'input';

interface FieldProps {
  field: ControllerRenderProps<FieldValues>;
}

interface OptionType {
  value: string;
  name: string;
}

interface Props {
  fields: { [name: string]: FieldType };
  options?: { [name: string]: OptionType[] };
}

const renderField = (
  fieldType: FieldType,
  options: OptionType[],
): ((field: FieldProps) => React.ReactElement) =>
  function fieldSeletiveRender({ field }) {
    switch (fieldType) {
      case 'select':
        return (
          <Select {...field}>
            {options?.map((item) => (
              <MenuItem key={item.name} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        );
      case 'input':
        return <Input {...field} />;
      default:
        return <></>;
    }
  };

const HookFormGen = ({ fields, options = {} }: Props): React.ReactElement => {
  const { control, handleSubmit } = useForm<typeof fields>();

  const onSubmit = (data: typeof fields) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(fields).map((name) => {
        const fieldType = fields[name];
        return (
          <Controller
            key={name}
            name={name}
            control={control}
            // defaultValue=""
            render={renderField(fieldType, options[name])}
          />
        );
      })}

      <Input type="submit" />
    </form>
  );
};

export default HookFormGen;
