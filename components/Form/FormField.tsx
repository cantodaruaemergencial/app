import { Box } from '@material-ui/core';
import styled from 'styled-components';

import { FormField as FormFieldType } from '#/types/Forms';

const Container = styled(Box)`
  margin-bottom: 1rem;
`;

interface Props {
  className?: string;
  field: FormFieldType;
}

const FormField = ({ field: { label }, className }: Props) => (
  <Container className={className}>{label}</Container>
);

export default FormField;
