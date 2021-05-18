import { Avatar as MuiAvatar } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import initials from 'initials';
import { ReactElement } from 'react';
import styled from 'styled-components';

const CustomAvatar = withTheme(styled(MuiAvatar)`
  flex: 0 0 auto;

  &.success {
    background-color: ${({ theme }) => theme.palette.success.main};
  }
`);

interface Props {
  name: string;
  color?: string;
  className?: string;
}

const Avatar = ({ name, color, className }: Props): ReactElement => {
  let label = initials(name);
  label = `${label.slice(0, 1)}${label.slice(label.length - 1, label.length)}`;
  return (
    <CustomAvatar className={clsx(className, color)}>{label}</CustomAvatar>
  );
};

export default Avatar;
