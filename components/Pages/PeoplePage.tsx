import { Avatar, Box, Button, Container, Typography } from '@material-ui/core';
import { AddCircleRounded } from '@material-ui/icons';
import initials from 'initials';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '../Card';
import PageHeader from '../PageHeader';

import PeopleService from '#/services/PeopleService';
import { Person } from '#/types/People';

const PersonBox = styled(Card)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const PersonInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex: 1;
`;

const Entrances = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const PeoplePage = (): ReactElement => {
  const [people, setPeople] = useState<Person[]>([]);

  const fetchPeople = () => {
    PeopleService.getPeople().then((result) => {
      setPeople(result);
    });
  };

  useEffect(() => {
    fetchPeople();
  }, []);

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
      <Box>
        {people.map((p) => (
          <PersonBox key={p.id} condensed>
            <Avatar>{initials(p.Name)}</Avatar>
            <PersonInfo>
              <Typography>
                {p.Name}
                {p.SocialName ? ` (${p.SocialName})` : ''}
              </Typography>
              <Typography variant="caption">
                <b>Cartão</b> {p.CardNumber}
              </Typography>
            </PersonInfo>
            <Entrances>
              <Typography variant="caption">
                <b>{p.entrances.length}</b> Entradas
              </Typography>
            </Entrances>
          </PersonBox>
        ))}
      </Box>
    </Container>
  );
};

export default PeoplePage;
