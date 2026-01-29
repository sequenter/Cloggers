import { CollectionsContext } from '@hooks/useCollections';
import { useFetch } from '@hooks/useFetch';
import { useSearch } from '@hooks/useSearch';

import type { FetchGroupCollections, ItemDetail } from '@types';

import { ITEMS } from '@utils/constants';

import { type ReactNode, useEffect, useMemo } from 'react';

interface Props {
  children: ReactNode;
}

export const CollectionsProvider = ({ children }: Props) => {
  const { groupId, isSelectedPlayer } = useSearch();
  const { data, error, isLoading, fetchData } = useFetch<FetchGroupCollections>('collection-log/group_collection_log');

  const playersWithCollections = useMemo(
    /**
     * Creates a record containing item collections indexed by player name.
     */
    () => {
      if (data) {
        const record: Record<string, Array<string>> = {};

        for (const { items, player_name_with_capitalization } of data.members) {
          record[player_name_with_capitalization] = items.map(String);
        }

        return record;
      }

      return {};
    },
    [data]
  );

  const collectedItems = useMemo(
    /**
     * Creates an object of collected items and their item detail, indexed by the item id.
     */
    () => {
      if (data) {
        const itemRecord: Record<string, ItemDetail> = {};

        // Create a map of items and the players that have collected them
        for (const { items, player_name_with_capitalization } of data.members) {
          // Filter by selected members
          if (isSelectedPlayer(player_name_with_capitalization)) {
            for (const item of items.map(String)) {
              if (itemRecord[item]) {
                itemRecord[item].playersCollected.push(player_name_with_capitalization);
              } else {
                itemRecord[item] = {
                  item,
                  name: ITEMS[item] ?? '???',
                  playersCollected: [player_name_with_capitalization],
                  playersNotCollected: []
                };
              }
            }
          }
        }

        // Update players that have not collected the item
        for (const key of Object.keys(itemRecord)) {
          itemRecord[key].playersNotCollected = Object.keys(playersWithCollections).filter(
            (player) => isSelectedPlayer(player) && !itemRecord[key].playersCollected.includes(player)
          );
        }

        return itemRecord;
      }

      return {};
    },
    [data, playersWithCollections, isSelectedPlayer]
  );

  // Effect to fetch data based on the group id
  useEffect(() => {
    if (groupId) {
      fetchData({ group: groupId, categories: 'all' });
    }
  }, [groupId, fetchData]);

  return (
    <CollectionsContext.Provider value={{ collectedItems, playersWithCollections, data, error, isLoading }}>
      {children}
    </CollectionsContext.Provider>
  );
};
