import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    logoImage: {
      width: '4rem',
      padding: '.5rem',
    },
  }),
);

export default function ButtonAppBar(): React.ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Image
            width={50}
            height={50}
            className={classes.logoImage}
            src="/images/helpingHand.png"
            alt="logo"
          />
          <Typography variant="h6" className={classes.title}>
            Canto da Rua
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
