import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';

import { MODEL_OPTIONS_QUERIES } from '../graphql/selectOptions';

import { Option, ModelTypes } from '#/packages/entities/types';

interface FetchSelectOptionsInfo {
  loading: boolean;
  options: Option[];
  getOptions: (params: any) => void;
}

interface FetchSelectOptionsHook {
  (params: { model?: ModelTypes }): FetchSelectOptionsInfo;
}

const useFetchSelectOptions: FetchSelectOptionsHook = ({ model }) => {
  const query = MODEL_OPTIONS_QUERIES[model as ModelTypes];
  const [getOptions, { data, loading }] = useLazyQuery(query);

  useEffect(() => {
    if (query) {
      getOptions();
    }
  }, []);

  return {
    loading,
    options: data?.options || [],
    getOptions,
  };
};

export default useFetchSelectOptions;
