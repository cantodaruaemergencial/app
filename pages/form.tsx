import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Layout from '#/components/Layout';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 0px',
    },
    formContainer: {
      display: 'flex',
      maxWidth: '300px',
      flexDirection: 'column',
      gap: '20px',
    },
  }),
);

const FormPage = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Layout title="Form">
      <Typography variant="h1">Cadastro de novos entrantes</Typography>
      <Container className={classes.container}>
        <div>placeholder</div>
      </Container>
    </Layout>
  );
};

export default FormPage;
