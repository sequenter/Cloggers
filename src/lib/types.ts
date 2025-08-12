import type { CATEGORIES, MAIN_CATEGORIES } from './util/constants';

export type Categories = keyof typeof CATEGORIES;
export type MainCategories = keyof typeof MAIN_CATEGORIES;

export interface Category {
  boss_name?: string;
  items: Array<string>;
}
