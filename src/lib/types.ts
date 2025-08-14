import type { CATEGORIES, MAIN_CATEGORIES } from './util/constants';

export type Categories = keyof typeof CATEGORIES;
export type MainCategories = keyof typeof MAIN_CATEGORIES;

/* Interfaces */

export interface Category {
  boss_name?: string;
  items: Array<string>;
}

interface Member {
  player: string;
  player_name_with_capitalization: string;
  last_checked: string;
  last_changed: string;
  ehc: number;
  ehc_gilded: number;
  total_collections_finished: 111;
  total_categories_finished: 7;
  items: Array<number>;
}

export interface GroupCollections {
  categories: string;
  group_id: number;
  group_name: string;
  member_count: number;
  members: Array<Member>;
  members_with_items_synced: number;
  total_collections_available: number;
  total_categories_available: number;
}

export interface CollectedItem {
  item: string;
  players: Array<string>;
}

export interface PlayerDetail {
  items: Array<string>;
  uniques: Array<string>;
}

/* Fetch */

export interface FetchResponse<T> {
  data: T;
}
