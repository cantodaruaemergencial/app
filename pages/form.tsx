import Link from 'next/link';

import Layout from '#/components/Layout';

const FormPage = (): React.ReactElement => (
  <Layout title="Form | Next.js + TypeScript Example">
    <h1>Form</h1>
    <p>This is the Form page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default FormPage;
