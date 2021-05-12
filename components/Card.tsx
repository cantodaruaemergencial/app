import { Box, Card as MuiCard, CardProps, Typography } from '@material-ui/core';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCard = styled(MuiCard)`
  padding: 2rem 1.5rem;
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
}

const Card = ({ title, children, ...props }: Props) => (
  <StyledCard {...props}>
    {title && (
      <CardHeader>
        <Title variant="h4">{title}</Title>
      </CardHeader>
    )}
    {children}
  </StyledCard>
);

export default Card;
