import { Box, Button, Container as MuiContainer } from '@material-ui/core';
import { ReactElement } from 'react';
import styled from 'styled-components';

import Card from '../Card';
import PageHeader from '../PageHeader';

const Container = styled(MuiContainer)`
  max-width: 600px;
`;

const Section = styled(Card)`
  margin-bottom: 1rem;
`;

const Buttons = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  personId?: string;
}

const PersonPage = ({ personId }: Props): ReactElement => {
  const editMode = !!personId;

  return (
    <Container>
      <PageHeader title="Cadastro" />
      <Section title="Dados Pessoais" />
      <Section title="Informações Adicionais" />
      <Section title="Situação Ocupacional" />
      <Section title="Contatos e Observações" />
      <Buttons>
        <Button variant="contained" color="primary">
          Salvar
        </Button>
      </Buttons>
    </Container>
  );
};

export default PersonPage;
