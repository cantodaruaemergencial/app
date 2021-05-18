import { Chip as MuiChip } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ReactElement } from 'react';
import styled from 'styled-components';
import {
  CheckCircleRounded,
  ErrorRounded,
  InfoRounded,
  RemoveCircleRounded,
} from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';

const CustomChip = withTheme(styled(MuiChip)`
  &.success {
    background-color: ${({ theme }) => theme.palette.success.light + '30'};
    color: ${({ theme }) => theme.palette.success.dark};

    .MuiSvgIcon-root {
      fill: ${({ theme }) => theme.palette.success.dark};
    }
  }

  &.error {
    background-color: ${({ theme }) => theme.palette.error.light + '30'};
    color: ${({ theme }) => theme.palette.error.dark};

    .MuiSvgIcon-root {
      fill: ${({ theme }) => theme.palette.error.dark};
    }
  }

  &.info {
    background-color: ${({ theme }) => theme.palette.info.light + '30'};
    color: ${({ theme }) => theme.palette.info.dark};

    .MuiSvgIcon-root {
      fill: ${({ theme }) => theme.palette.info.dark};
    }
  }

  &.MuiChip-sizeSmall {
    && {
      font-weight: 600;
      font-size: 0.65rem;
    }
  }
`);

const ChipSkeleton = styled(Skeleton)`
  && {
    border-radius: 24px;
  }
`;

export enum ChipType {
  default,
  success,
  error,
  info,
  disabled,
}

interface Props {
  label?: string;
  type?: ChipType;
  loading?: boolean;
  className?: string;
}

const Chip = ({
  label,
  type,
  className,
  loading = false,
}: Props): ReactElement => {
  if (loading) return <ChipSkeleton variant="rect" width={120} height={24} />;

  const getAvatar = () => {
    switch (type) {
      case ChipType.success:
        return <CheckCircleRounded />;
      case ChipType.info:
        return <InfoRounded />;
      case ChipType.error:
        return <ErrorRounded />;
      case ChipType.disabled:
        return <RemoveCircleRounded />;
      default:
        return null;
    }
  };

  const getClassType = () => ({
    default: ChipType.default === type,
    success: ChipType.success === type,
    error: ChipType.error === type,
    info: ChipType.info === type,
    disabled: ChipType.disabled === type,
  });

  return (
    <CustomChip
      className={clsx(className, getClassType())}
      label={label}
      avatar={getAvatar()}
      size="small"
    />
  );
};

export default Chip;
