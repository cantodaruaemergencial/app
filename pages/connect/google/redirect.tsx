import Layout from '#/components/Layout';
import StrapiGoogleAuthCallback from '#/components/StrapiGoogleAuthCallback';

const GoogleCallbackPage = (): React.ReactElement => (
  <Layout title="Fazendo login via Google - Canto da Rua">
    <StrapiGoogleAuthCallback />
  </Layout>
);

export default GoogleCallbackPage;
