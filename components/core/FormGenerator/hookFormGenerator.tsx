import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  useForm,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';

export type FieldType = 'select' | 'input';

interface FieldProps {
  field: ControllerRenderProps<FieldValues>;
}

interface OptionType {
  value: string;
  name: string;
}

export interface Props {
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
          <>
            <InputLabel> Name </InputLabel>
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

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      padding: '20px 0px',
    },
    input: {
      flex: '1',
      width: '25%',
      padding: '20px 10px',
    },
  }),
);
const HookFormGen = ({ fields, options = {} }: Props): React.ReactElement => {
  const { control, handleSubmit } = useForm<typeof fields>();
  const classes = useStyles();

  const onSubmit = (data: typeof fields) => {
    console.log(data);
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(fields).map((name) => {
        const fieldType = fields[name];
        return (
          <Container key={name} className={classes.input}>
            <Controller
              key={name}
              name={name}
              control={control}
              render={renderField(fieldType, options[name])}
            />
          </Container>
        );
      })}

      <Input type="submit" />
    </form>
  );
};

export default HookFormGen;
