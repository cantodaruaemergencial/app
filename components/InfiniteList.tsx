import { ReactNode, useEffect, useState } from 'react';
import {
  AutoSizer,
  Index,
  IndexRange,
  InfiniteLoader,
  List,
  ListRowProps,
} from 'react-virtualized';

import EmptyState from './EmptyState';

export type InfiniteListRowRenderer = (
  item: any,
  isRowLoaded: boolean,
  props: ListRowProps,
) => ReactNode;

export type InfiniteListFetchRows = (
  startIndex: number,
  limit: number,
  filter: any,
) => Promise<any>;

interface Props {
  fetchRows: InfiniteListFetchRows;
  rowRenderer: InfiniteListRowRenderer;
  filter?: any;
  className?: string;
}

const InfiniteList = ({ fetchRows, rowRenderer, filter, className }: Props) => {
  const [list, setList] = useState<any[]>([]);

  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  let infiteLoaderRef: InfiniteLoader | null = null;

  const rowCount = hasNextPage ? list.length + 8 : list.length;

  const isRowLoaded = ({ index }: ListRowProps | Index) => Boolean(list[index]);

  const getItem = ({ index }: ListRowProps) => list[index];

  const resetList = () => {
    setList([]);
    setHasNextPage(true);

    if (!infiteLoaderRef) return;
    infiteLoaderRef.resetLoadMoreRowsCache();
  };

  const loadMoreRows = ({
    startIndex,
    stopIndex,
  }: IndexRange): Promise<any> => {
    const limit = stopIndex - startIndex;
    return fetchRows(startIndex, limit, filter).then((result) => {
      setHasNextPage(result.length > 0);
      setList([...list, ...result]);
    });
  };

  useEffect(() => {
    const filterIsEmpty = Object.keys(filter).length === 0;

    if (filterIsEmpty) return;

    resetList();
  }, [filter]);

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
      className={className}
      ref={(child) => {
        infiteLoaderRef = child;
      }}
    >
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={registerChild}
              onRowsRendered={onRowsRendered}
              rowCount={rowCount}
              rowHeight={100}
              noRowsRenderer={() => <EmptyState />}
              rowRenderer={(props) =>
                rowRenderer(getItem(props), isRowLoaded(props), props)
              }
              height={height}
              width={width}
            />
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
};

export default InfiniteList;
