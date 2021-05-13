import { Box } from '@material-ui/core';
import styled from 'styled-components';

import FormSection from './FormSection';

import { Form as FormType } from '#/types/Forms';

const Container = styled(Box)``;

interface Props {
  className?: string;
  form: FormType;
}

const Form = ({ form, className }: Props) => (
  <Container className={className}>
    {form.sections.map((s) => (
      <FormSection key={s.label} section={s} />
    ))}
  </Container>
);

export default Form;
