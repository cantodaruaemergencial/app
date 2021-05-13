import { Container as MuiContainer } from '@material-ui/core';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Form from '../Form/Form';
import PageHeader from '../PageHeader';

import { Form as FormType } from '#/types/Forms';

const Container = styled(MuiContainer)`
  && {
    max-width: 600px;
  }
`;

interface Props {
  personId?: string;
  form: FormType;
}

const PersonPage = ({ personId, form }: Props): ReactElement => (
  <Container>
    <PageHeader title="Cadastro" />
    {personId}
    {form && <Form form={form} />}
  </Container>
);

export default PersonPage;
