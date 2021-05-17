import { ReactNode, useState } from 'react';
import {
  AutoSizer,
  Index,
  IndexRange,
  InfiniteLoader,
  List,
  ListRowProps,
} from 'react-virtualized';

export type InfiniteListRowRenderer = (
  item: any,
  isRowLoaded: boolean,
  props: ListRowProps,
) => ReactNode;

export type InfiniteListFetchRows = (
  startIndex: number,
  limit: number,
) => Promise<any>;

interface Props {
  fetchRows: InfiniteListFetchRows;
  rowRenderer: InfiniteListRowRenderer;
  className?: string;
}

const InfiniteList = ({ fetchRows, rowRenderer, className }: Props) => {
  const [list, setList] = useState<any[]>([]);

  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const rowCount = hasNextPage ? list.length + 8 : list.length;

  const isRowLoaded = ({ index }: ListRowProps | Index) => Boolean(list[index]);

  const getItem = ({ index }: ListRowProps) => list[index];

  const loadMoreRows = ({
    startIndex,
    stopIndex,
  }: IndexRange): Promise<any> => {
    const limit = stopIndex - startIndex;
    return fetchRows(startIndex, limit).then((result) => {
      setHasNextPage(result.length > 0);
      setList([...list, ...result]);
    });
  };

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
      className={className}
    >
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={registerChild}
              onRowsRendered={onRowsRendered}
              rowCount={rowCount}
              rowHeight={88}
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
