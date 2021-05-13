import { Box, Button, Container as MuiContainer } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import Form from '../Form/Form';
import PageHeader from '../PageHeader';

import PeopleService from '#/services/PeopleService';
import { Form as FormType } from '#/types/Forms';

const Container = styled(MuiContainer)`
  && {
    max-width: 600px;
  }
`;

const Buttons = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  personId?: string;
}

const PersonPage = ({ personId }: Props): ReactElement => {
  const [form, setForm] = useState<FormType>();

  useEffect(() => {
    PeopleService.getPersonForm().then((personForm) => setForm(personForm));
  }, []);

  return (
    <Container>
      <PageHeader title="Cadastro" />
      {personId}
      {form && <Form form={form} />}
      <Buttons>
        <Button variant="contained" color="primary">
          Salvar
        </Button>
      </Buttons>
    </Container>
  );
};

export default PersonPage;
