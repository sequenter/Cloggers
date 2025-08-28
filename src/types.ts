/* Fetch */
import type { MAIN_CATEGORIES_ARRAY, SUB_CATEGORIES_ARRAY } from '@utils/constants';

export interface FetchResponse<T> {
  data: T;
}

/* Common */

export type SubCategories = (typeof SUB_CATEGORIES_ARRAY)[number];
export type MainCategories = (typeof MAIN_CATEGORIES_ARRAY)[number];

export interface ItemDetail {
  item: string;
  name: string;
  playersCollected: Array<string>;
  playersNotCollected: Array<string>;
}

export interface PlayerDetail {
  name: string;
  gameMode: number;
  isSynced: boolean;
  totalItemsCollected: number;
  uniques: Array<ItemDetail>;
}

export type RecentItemDetail = ItemDetail & Omit<FetchRecentItem, 'id'>;

/* Group Collections */

interface CollectionMember {
  player: string;
  player_name_with_capitalization: string;
  last_checked: string;
  last_changed: string;
  ehc: number;
  ehc_gilded: number;
  total_collections_finished: number;
  total_categories_finished: number;
  items: Array<number>;
}

export interface FetchGroupCollections {
  categories: string;
  group_id: number;
  group_name: string;
  member_count: number;
  members: Array<CollectionMember>;
  members_with_items_synced: number;
  total_collections_available: number;
  total_categories_available: number;
}

/* Group Stats */

interface StatsMember {
  game_mode: number;
  player: string;
  player_name_with_capitalization: string | null;
}

export interface FetchGroupMemberStats {
  memberlist: Record<string, StatsMember>;
}

/* Recent Items */

export interface FetchRecentItem {
  id: string;
  date_unix: number;
  notable_item: boolean;
  player: string;
  player_name_with_capitalization: string;
}
