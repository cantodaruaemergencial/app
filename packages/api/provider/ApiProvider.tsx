import { ApolloProvider } from '@apollo/client';
import { ReactElement } from 'react';

import client from './client';

interface Props {
  children: React.ReactElement;
}

function ApiProvider({ children }: Props): ReactElement {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApiProvider;
