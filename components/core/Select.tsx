import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '@material-ui/core/Select';

export type ISelectOptions = {
  id: number;
  value: string;
};

export interface ISelect {
  value: string;
  id: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  selectOptions: ISelectOptions[];
}

const Select = ({
  value,
  id,
  onChange,
  selectOptions,
}: ISelect): React.ReactElement => (
  <MaterialSelect labelId={id} id={id} value={value} onChange={onChange}>
    {selectOptions.map((option) => (
      <MenuItem key={option.id} value={option.id}>
        {option.value}
      </MenuItem>
    ))}
  </MaterialSelect>
);

export default Select;
