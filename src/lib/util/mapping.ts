import { CATEGORIES, ITEMS } from './constants';

import type { Categories, GroupCollections, PlayerDetail } from '$lib/types';

/**
 * Reduces the {@link CATEGORIES} to a key/value pair of item/category, so that the category corresponding to an item can be easily found.
 * @returns {Record<string, Array<Categories>>} item/category key/value pair
 */
const getItemCategoryMap = (): Record<string, Array<Categories>> => {
  const itemMap: Record<string, Array<Categories>> = {};

  Object.entries(CATEGORIES).forEach(([category, { items }]) => {
    items.forEach((item) => {
      // Items can be in multiple categories
      if (itemMap[item]) {
        itemMap[item] = [...itemMap[item], category as Categories];
      } else {
        itemMap[item] = [category as Categories];
      }
    });
  });

  return itemMap;
};

// Static item map
const ITEM_MAP = getItemCategoryMap();

/**
 * Collates collected items across members of a group into categories.
 * @param {GroupCollections} data API group data
 * @param {Array<string>} [players=[]] Optional array of players to filter by
 */
export const collectedCategoryItemsMap = (data: GroupCollections, players: Array<string> = []) => {
  const collectedMap: Partial<Record<Categories, Record<string, Array<string>>>> = {};

  data.members.forEach(({ items, player_name_with_capitalization }) => {
    if (!players.length || players.includes(player_name_with_capitalization)) {
      items.forEach((item) => {
        const categories = ITEM_MAP[item];

        categories.forEach((category) => {
          // Append a member to the item within a category of the collected map, signifying that the member has collected the item
          if (collectedMap[category]) {
            if (collectedMap[category][item]) {
              collectedMap[category][item] = [...collectedMap[category][item], player_name_with_capitalization];
            } else {
              collectedMap[category][item] = [player_name_with_capitalization];
            }
          } else {
            collectedMap[category] = { [item]: [player_name_with_capitalization] };
          }
        });
      });
    }
  });

  return collectedMap;
};

/**
 * Collates collected items across members of a group and sorts by completion count.
 * @param {GroupCollections} data API group data
 * @param {Array<string>} [players=[]] Optional array of players to filter by
 */
export const collectedItemMap = (data: GroupCollections, players: Array<string> = []) => {
  const collectedMap: Record<string, Array<string>> = {};

  data.members.forEach(({ items, player_name_with_capitalization }) => {
    if (!players.length || players.includes(player_name_with_capitalization)) {
      items.forEach((item) => {
        if (collectedMap[item]) {
          collectedMap[item] = [...collectedMap[item], player_name_with_capitalization];
        } else {
          collectedMap[item] = [player_name_with_capitalization];
        }
      });
    }
  });

  return Object.entries(collectedMap)
    .map(([item, playersCollected]) => ({ item, players: playersCollected }))
    .sort((a, b) => b.players.length - a.players.length || ITEMS[a.item].localeCompare(ITEMS[b.item]));
};

/**
 * Creates a map of players collection items and unique collection items.
 * @param {GroupCollections} data API group data
 */
export const playerDetailMap = (data: GroupCollections) => {
  const collectedUniqueMap = collectedItemMap(data).filter(({ players }) => players.length === 1);

  return data.members.reduce(
    (acc, { items, player_name_with_capitalization }) => ({
      ...acc,
      [player_name_with_capitalization]: {
        items: items.map((item) => item.toString()),
        uniques: collectedUniqueMap.filter(({ players }) => players.includes(player_name_with_capitalization)).map(({ item }) => item)
      }
    }),
    {} as Record<string, PlayerDetail>
  );
};
