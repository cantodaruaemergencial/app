import Link from 'next/link';

import Layout from '#/components/Layout';

const IndexPage = (): React.ReactElement => (
  <Layout title="App">
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
