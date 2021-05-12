import { useRouter } from 'next/router';

import Layout from '#/components/Layout';
import PersonPage from '#/components/Pages/PersonPage';

const EditPerson = (): React.ReactElement => {
  const router = useRouter();

  const personId = router?.query?.personId as string;

  return (
    <Layout title="Cadastro - Canto da Rua">
      <PersonPage personId={personId} />
    </Layout>
  );
};

export default EditPerson;
