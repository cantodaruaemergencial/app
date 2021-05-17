import { Box, Button, Container as MuiContainer } from '@material-ui/core';
import { AddCircleRounded } from '@material-ui/icons';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

import InfiniteList, {
  InfiniteListFetchRows,
  InfiniteListRowRenderer,
} from '../../InfiniteList';
import PageHeader from '../../PageHeader';

import PersonCard from './PersonCard';

import SearchField from '#/components/SearchField';
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

const Controls = styled(Box)`
  padding: 1rem 0;
  display: flex;
  justify-content: flex-end;
  position: relative;

  && > * {
    margin-left: 1rem;
  }
`;

const PeoplePage = (): ReactElement => {
  const [selectedFilter, setSelectedFilter] = useState({});

  const fetchPeople: InfiniteListFetchRows = (startIndex, limit, filter) =>
    PeopleService.getPeople(startIndex, limit, filter);

  const onChangeFilter = (value?: string) =>
    setSelectedFilter({ nameOrCardNumber: value });

  const renderControls = () => (
    <Controls>
      <SearchField placeholder="Nome ou cartão" onFilter={onChangeFilter} />
      <Link href="/people/new-person">
        <Button variant="contained" startIcon={<AddCircleRounded />}>
          Nova Pessoa
        </Button>
      </Link>
    </Controls>
  );

  const rowRenderer: InfiniteListRowRenderer = (item, isRowLoaded, props) => (
    <PersonCard item={item} isRowLoaded={isRowLoaded} props={props} />
  );

  return (
    <Container>
      <PageHeader title="Pessoas" sideComponent={renderControls()} />
      <ListContainer>
        <List
          fetchRows={fetchPeople}
          rowRenderer={rowRenderer}
          filter={selectedFilter}
        />
      </ListContainer>
    </Container>
  );
};

export default PeoplePage;
