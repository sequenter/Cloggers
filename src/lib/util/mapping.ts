import { CATEGORIES } from './constants';

import type { Categories, GroupCollections } from '$lib/types';

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
 * Collates collected items across members of a group.
 * @param {GroupCollections} data API group data
 */
export const collectedItemsMap = (data: GroupCollections) => {
  const collectedMap: Partial<Record<Categories, Record<string, Array<string>>>> = {};

  data.members.forEach(({ items, player }) => {
    items.forEach((item) => {
      const categories = ITEM_MAP[item];

      categories.forEach((category) => {
        // Append a member to the item within a category of the collected map, signifying that the member has collected the item
        if (collectedMap[category]) {
          if (collectedMap[category][item]) {
            collectedMap[category][item] = [...collectedMap[category][item], player];
          } else {
            collectedMap[category][item] = [player];
          }
        } else {
          collectedMap[category] = { [item]: [player] };
        }
      });
    });
  });

  return collectedMap;
};
