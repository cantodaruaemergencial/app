import { Button, Container } from '@material-ui/core';
import { AddCircleRounded } from '@material-ui/icons';
import Link from 'next/link';
import { ReactElement } from 'react';

import PageHeader from '../PageHeader';

const PeoplePage = (): ReactElement => {
  const renderAddButton = () => (
    <Link href="/people/new-person">
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleRounded />}
      >
        Cadastrar
      </Button>
    </Link>
  );

  return (
    <Container>
      <PageHeader title="Pessoas" sideComponent={renderAddButton()} />
      <Link href="/people/444">
        <Button variant="contained" color="primary">
          Pessoa 444
        </Button>
      </Link>
    </Container>
  );
};

export default PeoplePage;
