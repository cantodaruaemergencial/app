import { Box, Button, Container as MuiContainer } from '@material-ui/core';
import { AddCircleRounded } from '@material-ui/icons';
import Link from 'next/link';
import { ReactElement } from 'react';
import styled from 'styled-components';

import InfiniteList, {
  InfiniteListFetchRows,
  InfiniteListRowRenderer,
} from '../../InfiniteList';
import PageHeader from '../../PageHeader';

import PersonCard from './PersonCard';

import PeopleService from '#/services/PeopleService';

const Container = styled(MuiContainer)`
  && {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
  }
`;

const ListContainer = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const List = styled(InfiniteList)`
  flex: 1;
`;

const PeoplePage = (): ReactElement => {
  const fetchPeople: InfiniteListFetchRows = (startIndex, limit) =>
    PeopleService.getPeople(startIndex, limit);

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

  const rowRenderer: InfiniteListRowRenderer = (item, isRowLoaded, props) => (
    <PersonCard item={item} isRowLoaded={isRowLoaded} props={props} />
  );

  return (
    <Container>
      <PageHeader title="Pessoas" sideComponent={renderAddButton()} />
      <ListContainer>
        <List fetchRows={fetchPeople} rowRenderer={rowRenderer} />
      </ListContainer>
    </Container>
  );
};

export default PeoplePage;
