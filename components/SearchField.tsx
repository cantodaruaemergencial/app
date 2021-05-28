import { Box, InputBase } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import { KeyboardEventHandler } from 'react';
import styled from 'styled-components';

import { Shadows } from '#/utils/theme';

const Container = styled(Box)`
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  box-shadow: ${Shadows[1]};
  grid-area: search;

  .MuiSvgIcon-root {
    margin: 0 0.5rem;
    fill: darkgray;
  }
`;

interface Props {
  placeholder: string;
  className?: string;
  onFilter: (value?: string) => void;
}

const SearchField = ({ placeholder, onFilter, className }: Props) => {
  const onKeyDown = ({ key, target: { value } }: any) => {
    if (key === 'Enter' || key === 'ArrowDown') onFilter(value);
  };

  return (
    <Container className={className}>
      <InputBase
        placeholder={placeholder}
        startAdornment={<SearchRounded />}
        onBlur={(e) => onFilter(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </Container>
  );
};

export default SearchField;
