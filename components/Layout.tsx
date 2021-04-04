import Head from 'next/head';
import { ReactElement } from 'react';

import NavBar from '#/components/NavBar';

interface Props {
  children: ReactElement | ReactElement[];
  title: string;
}

const Layout = ({
  children,
  title = 'This is the default title',
}: Props): ReactElement => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <NavBar />
    </header>
    {children}
  </div>
);

export default Layout;
