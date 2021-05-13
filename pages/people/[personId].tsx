import { useRouter } from 'next/router';

import Layout from '#/components/Layout';
import PersonPage from '#/components/Pages/PersonPage';
import PeopleService from '#/services/PeopleService';
import { Form } from '#/types/Forms';

interface Props {
  form: Form;
}

const EditPerson = ({ form }: Props): React.ReactElement => {
  const router = useRouter();

  const personId = router?.query?.personId as string;

  return (
    <Layout title="Cadastro - Canto da Rua">
      <PersonPage personId={personId} form={form} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const form = await PeopleService.getPersonForm();

  return {
    props: {
      form,
    },
    revalidate: 60,
  };
};

export default EditPerson;
