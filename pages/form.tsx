import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

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
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <Container className={classes.container} />
    </Layout>
  );
};

export default FormPage;
