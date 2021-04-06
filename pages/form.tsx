import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Layout from '#/components/Layout';
import NewUserForm from '#/components/forms/NewUser';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '20px 0px',
    },
  }),
);

const FormPage = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Layout title="Form">
      <Typography variant="h1">Cadastro de novos entrantes</Typography>
      <Container className={classes.container}>
        <NewUserForm />
      </Container>
    </Layout>
  );
};

export default FormPage;
