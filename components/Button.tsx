import {
  createStyles,
  makeStyles,
  Theme,
  Button as MuiButton,
  ButtonProps,
} from '@material-ui/core';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
  children: ReactNode;
}

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    outlined: {
      borderColor: palette.primary.main,
      // padding: '10px 0',
      textAlign: 'center',
    },
    label: {
      color: palette.primary.main,
    },
  }),
);

function Button(props: Props) {
  const classes = useStyles();
  // const buttonStyles = useVariantStyles(variant);
  return <MuiButton {...props} classes={classes} />;
}

export default Button;
