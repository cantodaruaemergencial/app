import { Box, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import FormSection from './FormSection';

import { Form as FormType } from '#/types/Forms';

const Container = styled(Box)``;

const TheForm = styled.form`
  width: 100%;
`;

const Buttons = styled(Box)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 3rem;
`;

interface Props {
  className?: string;
  form: FormType;
}

const Form = ({ form, className }: Props) => {
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container className={className}>
      <TheForm onSubmit={handleSubmit(onSubmit)}>
        {form.sections.map((s) => (
          <FormSection key={s.label} section={s} control={control} />
        ))}
        <Buttons>
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </Buttons>
      </TheForm>
    </Container>
  );
};

export default Form;
