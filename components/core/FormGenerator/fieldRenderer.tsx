import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export type FieldType = 'select' | 'input';

export interface OptionType {
  value: string;
  name: string;
}

interface FieldProps {
  field: ControllerRenderProps<FieldValues>;
}

const fieldRenderer = (
  fieldType: FieldType,
  options: OptionType[],
): ((field: FieldProps) => React.ReactElement) =>
  function fieldSeletiveRender({ field }) {
    switch (fieldType) {
      case 'select':
        return (
          <>
            <InputLabel> {field.value} </InputLabel>
            <Select {...field} variant="outlined" label={field.name}>
              {options?.map((item) => (
                <MenuItem key={item.name} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </>
        );
      case 'input':
        return <Input {...field} />;
      default:
        return <></>;
    }
  };

export default fieldRenderer;
