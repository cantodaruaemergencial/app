import {
  DocumentNode,
  OperationVariables,
  useApolloClient,
} from '@apollo/client';
import { useCallback } from 'react';

/**
 * apollo client does not have a hook that returns a simple Promise function
 * this workaround returns a callable function
 * issue: https://github.com/apollographql/react-apollo/issues/3499
 *  */
const useImperativeQuery = <TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
) => {
  const client = useApolloClient();

  return useCallback(
    (variables: TVariables) =>
      client.query<TData, TVariables>({ query, variables }),
    [client],
  );
};

export { useImperativeQuery };
