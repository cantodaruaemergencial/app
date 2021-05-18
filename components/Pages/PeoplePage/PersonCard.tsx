import { Box, Typography, withTheme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { ReactElement } from 'react';
import { ListRowProps } from 'react-virtualized';
import styled from 'styled-components';

import Card from '../../Card';

import Avatar from '#/components/Avatar';
import { BasePerson } from '#/types/People';
import moment from 'moment';
import Chip, { ChipType } from '#/components/Chip';

const PersonWrapper = styled(Box)`
  padding-bottom: 0.5rem;
  flex: 0 0 auto;
`;

const PersonBox = withTheme(styled(Card)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('xs')} {
    flex-direction: column;
    align-items: stretch;
  }
`);

const Info = withTheme(styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down('xs')} {
    margin-bottom: 1rem;
  }
`);

const Title = styled(Typography)`
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
  justify-content: space-between;
`;

const Option = styled(Box)`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

interface Props {
  item: BasePerson;
  isRowLoaded: boolean;
  props: ListRowProps;
}

const PersonCard = ({
  item,
  isRowLoaded,
  props: { key, index },
}: Props): ReactElement => {
  const renderSkeleton = () => (
    <PersonWrapper key={`${key}-${index}-skeleton`}>
      <PersonBox condensed>
        <Skeleton variant="circle" width={40} height={40} />
        <PersonInfo>
          <Title variant="body2">
            <Skeleton variant="text" width={160} />
          </Title>
          <Typography variant="caption">
            <Skeleton variant="text" width={80} />
          </Typography>
        </PersonInfo>
        <Options>
          <Option>
            <Chip loading />
          </Option>
        </Options>
      </PersonBox>
    </PersonWrapper>
  );

  if (!isRowLoaded) return renderSkeleton();

  const {
    Id,
    Name,
    SocialName,
    CardNumber,
    EnteredToday,
    LastEntranceDate,
  } = item;

  const color = EnteredToday ? 'success' : '';

  const lastEntranceLabel = () => {
    if (LastEntranceDate === null) return 'Nunca entrou';

    const text = EnteredToday ? 'Entrou ' : 'Última entrada ';

    const fromText = moment(LastEntranceDate).fromNow();

    return text + fromText;
  };

  const getChipType = () => {
    if (EnteredToday) return ChipType.success;
    if (LastEntranceDate !== null) return ChipType.info;
    return ChipType.disabled;
  };

  return (
    <PersonBox key={Id} condensed>
      <Info>
        <Avatar name={Name} color={color} />
        <PersonInfo>
          <Title variant="body2">
            {Name}
            {SocialName ? ` (${SocialName})` : ''}
          </Title>
          <Typography variant="caption">
            <b>Cartão</b> {CardNumber}
          </Typography>
        </PersonInfo>
      </Info>
      <Options>
        <Option>
          <Chip label={lastEntranceLabel()} type={getChipType()} />
        </Option>
      </Options>
    </PersonBox>
  );
};

export default PersonCard;
