import { Box, Card as MuiCard, CardProps, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCard = styled(MuiCard)`
  && {
    padding: 2rem 1.5rem;

    &.condensed {
      padding: 1.25rem 1rem;
    }

    &.rounder {
      border-radius: 16px;
    }
  }
`;

const CardHeader = styled(Box)``;

const Title = styled(Typography)`
  && {
    margin-bottom: 1rem;
  }
`;

interface Props extends CardProps {
  title?: string;
  children?: ReactNode;
  condensed?: boolean;
  rounder?: boolean;
}

const Card = ({
  title,
  children,
  condensed = false,
  rounder = false,
  className,
  ...props
}: Props) => (
  <StyledCard {...props} className={clsx(className, { condensed, rounder })}>
    {title && (
      <CardHeader>
        <Title variant="h4">{title}</Title>
      </CardHeader>
    )}
    {children}
  </StyledCard>
);

export default Card;
