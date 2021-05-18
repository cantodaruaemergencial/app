import { Box, Button, Container as MuiContainer } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import { AddCircleRounded } from '@material-ui/icons';
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
    padding-bottom: 0;
    height: 100%;
    flex: 1;
  }
`;

const Header = withTheme(styled(PageHeader)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto auto;
  grid-template-areas: 'title search add-new';

  ${({ theme }) => theme.breakpoints.down('xs')} {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'title add-new'
      'search search';
  }
`);

const AddNew = styled(Button)`
  grid-area: add-new;
  height: 42px;
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
  const [selectedFilter, setSelectedFilter] = useState({});

  const fetchPeople: InfiniteListFetchRows = (startIndex, limit, filter) =>
    PeopleService.getPeople(startIndex, limit, filter);

  const onChangeFilter = (value?: string) =>
    setSelectedFilter({ nameOrCardNumber: value });

  const renderControls = () => (
    <>
      <SearchField placeholder="Nome ou cartão" onFilter={onChangeFilter} />
      <AddNew
        href="/people/new-person"
        variant="contained"
        startIcon={<AddCircleRounded />}
      >
        Nova Pessoa
      </AddNew>
    </>
  );

  const rowRenderer: InfiniteListRowRenderer = (item, isRowLoaded, props) => (
    <PersonCard item={item} isRowLoaded={isRowLoaded} props={props} />
  );

  return (
    <Container>
      <Header title="Pessoas" sideComponent={renderControls()} />
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
