import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';

import fieldRenderer, { FieldType, OptionType } from './fieldRenderer';

export interface Props {
  fields: { [name: string]: FieldType };
  options?: { [name: string]: OptionType[] };
}

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
              render={fieldRenderer(fieldType, options[name])}
            />
          </Container>
        );
      })}

      <Input type="submit" />
    </form>
  );
};

export default HookFormGen;
