import { Avatar, Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import initials from 'initials';
import { ReactElement } from 'react';
import { ListRowProps } from 'react-virtualized';
import styled from 'styled-components';

import Card from '../../Card';

const PersonWrapper = styled(Box)`
  padding-bottom: 0.5rem;
  flex: 0 0 auto;
`;

const PersonBox = styled(Card)`
  display: flex;
  align-items: center;
  height: 100%;
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

interface Props {
  item: any;
  isRowLoaded: boolean;
  props: ListRowProps;
}

const PersonCard = ({
  item,
  isRowLoaded,
  props: { key, style, index },
}: Props): ReactElement => {
  const renderSkeleton = () => (
    <PersonWrapper style={style} key={`${key}-${index}-skeleton`}>
      <PersonBox condensed>
        <Skeleton variant="circle" width={40} height={40} />
        <PersonInfo>
          <Typography>
            <Skeleton variant="text" width={160} />
          </Typography>
          <Typography variant="caption">
            <Skeleton variant="text" width={80} />
          </Typography>
        </PersonInfo>
        <Entrances>
          <Typography variant="caption">
            <Skeleton variant="text" width={120} />
          </Typography>
        </Entrances>
      </PersonBox>
    </PersonWrapper>
  );

  if (!isRowLoaded) return renderSkeleton();

  return (
    <PersonWrapper style={style} key={item.id}>
      <PersonBox condensed>
        <Avatar>{initials(item.Name).slice(0, 2)}</Avatar>
        <PersonInfo>
          <Typography>
            {item.Name}
            {item.SocialName ? ` (${item.SocialName})` : ''}
          </Typography>
          <Typography variant="caption">
            <b>Cartão</b> {item.CardNumber}
          </Typography>
        </PersonInfo>
        <Entrances>
          <Typography variant="caption">
            <b>{item.entrances?.length || 0}</b> Entradas
          </Typography>
        </Entrances>
      </PersonBox>
    </PersonWrapper>
  );
};

export default PersonCard;
