import Layout from '#/components/Layout';
import StrapiGoogleAuth from '#/components/StrapiGoogleAuth';

const GoogleCallbackPage = (): React.ReactElement => (
  <Layout title="Fazendo login via Google - Canto da Rua">
    <StrapiGoogleAuth />
  </Layout>
);

export default GoogleCallbackPage;
