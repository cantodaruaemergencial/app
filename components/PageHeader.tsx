import { Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex: 0 0 auto;
`;

interface Props {
  title: string;
  sideComponent?: ReactElement | ReactElement[];
}

const PageHeader = ({ title, sideComponent }: Props): ReactElement => (
  <Header>
    <Typography variant="h1">{title}</Typography>
    {sideComponent}
  </Header>
);

export default PageHeader;
