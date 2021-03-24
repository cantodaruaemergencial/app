import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '@material-ui/core/Select';

type ISelectOptions = {
  id: number;
  value: string;
};

interface ISelect {
  value: string;
  onChange: () => void;
  selectOptions: ISelectOptions[];
}

const Select = ({
  value,
  onChange,
  selectOptions,
}: ISelect): React.ReactElement => (
  <MaterialSelect
    labelId="maritial-status-select"
    id="maritial-status-select"
    value={value}
    onChange={onChange}
  >
    {selectOptions.map((option) => (
      <MenuItem key={option.id} value={option.id}>
        {option.value}
      </MenuItem>
    ))}
  </MaterialSelect>
);

export default Select;
