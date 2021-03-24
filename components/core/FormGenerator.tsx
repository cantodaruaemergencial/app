import TextField from '@material-ui/core/TextField';
import { Container } from 'next/app';

import DatePicker from '#/components/core/DatePicker';
import Select from '#/components/core/Select';

interface IInputOptions {
  type: string;
  field: string;
  label: string;
}

const mockedData: IInputOptions[] = [
  {
    type: 'textField',
    field: 'name',
    label: 'Nome',
  },
];

const FormGenerator = (): React.ReactElement => <div />;

export default FormGenerator;
