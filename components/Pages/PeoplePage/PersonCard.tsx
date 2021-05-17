import { Box, Typography } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { Skeleton } from '@material-ui/lab';
import { ReactElement } from 'react';
import { ListRowProps } from 'react-virtualized';
import styled from 'styled-components';

import Card from '../../Card';

import Avatar from '#/components/Avatar';

const PersonWrapper = styled(Box)`
  padding-bottom: 0.5rem;
  flex: 0 0 auto;
`;

const PersonBox = styled(Card)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Name = styled(Typography)`
  && {
    font-weight: 600;
  }
`;

const PersonInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex: 1;
`;

const Options = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Option = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <Options>
          <Typography variant="caption">
            <Skeleton variant="text" width={120} />
          </Typography>
        </Options>
      </PersonBox>
    </PersonWrapper>
  );

  if (!isRowLoaded) return renderSkeleton();

  const enteredToday = !!item.TodayEntranceTime;

  const color = enteredToday ? 'success' : '';

  const lastEntrance = enteredToday ? 'Entrou Hoje' : 'Não entrou';

  return (
    <PersonWrapper style={style} key={item.id}>
      <PersonBox condensed>
        <Avatar name={item.Name} color={color} />
        <PersonInfo>
          <Name variant="body2">
            {item.Name}
            {item.SocialName ? ` (${item.SocialName})` : ''}
          </Name>
          <Typography variant="caption">
            <b>Cartão</b> {item.CardNumber}
          </Typography>
        </PersonInfo>
        <Options>
          <Option>
            <CheckCircleRoundedIcon />
            <Typography variant="caption">{lastEntrance}</Typography>
          </Option>
        </Options>
      </PersonBox>
    </PersonWrapper>
  );
};

export default PersonCard;
