import { useCollections } from '@hooks/useCollections';
import { useFetch } from '@hooks/useFetch';
import { RecentContext } from '@hooks/useRecent';
import { useSearch } from '@hooks/useSearch';

import type { FetchRecentItem } from '@types';

import { getUnixDateSubtract, isObjectEmpty } from '@utils/common';

import { type ReactNode, useEffect, useMemo } from 'react';

interface Props {
  children: ReactNode;
}

export const RecentProvider = ({ children }: Props) => {
  const { groupId, isSelectedPlayer } = useSearch();
  const { collectedItems } = useCollections();
  const { data, error, isLoading, fetchData } = useFetch<Array<FetchRecentItem>>('collection-log/group_recent_items');

  const recentItems = useMemo(
    /**
     * Filter recent items not exceeding the last month.
     */
    () => {
      if (data && !isObjectEmpty(collectedItems)) {
        return data
          .filter(
            ({ date_unix, player, player_name_with_capitalization }) =>
              date_unix >= getUnixDateSubtract(1) && isSelectedPlayer(player_name_with_capitalization ?? player)
          )
          .map(({ id, ...rest }) => ({ ...rest, ...collectedItems[id] }));
      }

      return [];
    },
    [data, collectedItems, isSelectedPlayer]
  );

  // Effect to fetch data based on the group id
  useEffect(() => {
    if (groupId) {
      fetchData({ group: groupId, count: '200' });
    }
  }, [groupId, fetchData]);

  return <RecentContext.Provider value={{ recentItems, error, isLoading }}>{children}</RecentContext.Provider>;
};
