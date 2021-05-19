import { Box, Typography, withTheme } from '@material-ui/core';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const Title = withTheme(styled(Typography)`
  && {
    font-weight: 700;
    font-size: 0.9rem;

    &.contrast {
      color: ${({ theme }) => theme.palette.primary.contrastText};
      opacity: 0.8;
    }
  }
`);

interface Props {
  title: string;
  sideComponent?: ReactNode;
  contrast?: boolean;
  className?: string;
}

const CardHeader = ({
  title,
  contrast = false,
  sideComponent,
  className,
}: Props) => (
  <Header className={className}>
    <Title color="textPrimary" className={clsx({ contrast })}>
      {title}
    </Title>
    {sideComponent}
  </Header>
);

export default CardHeader;
