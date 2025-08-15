<script lang="ts">
  import clsx from 'clsx';

  import CollectionItem from './CollectionItem.svelte';

  import { collectionsFetchStore } from '$lib/stores/collections.store.svelte';
  import { searchStore } from '$lib/stores/search.store.svelte';
  import type { Categories, MainCategories } from '$lib/types';
  import { CATEGORIES, ITEMS, MAIN_CATEGORIES } from '$lib/util/constants';
  import { collectedCategoryItemsMap } from '$lib/util/mapping';

  const { selectedPlayers } = $derived(searchStore);

  /* Selected tab and category states */
  const tabs = Object.keys(MAIN_CATEGORIES) as Array<MainCategories>;

  let selectedTab: MainCategories = $state('bosses');
  const tabCategories = $derived(MAIN_CATEGORIES[selectedTab]) as Array<Categories>;

  let selectedCategory: Categories = $derived(tabCategories[0]);
  const categoryItems = $derived(CATEGORIES[selectedCategory].items);

  /* Derived API data states */
  const { data } = $derived(collectionsFetchStore);

  // All group members
  const groupPlayers = $derived(data ? data.members.map(({ player_name_with_capitalization }) => player_name_with_capitalization) : []);

  // Collated collected items across members
  const collectedItems = $derived(data ? collectedCategoryItemsMap(data, selectedPlayers) : {});

  // Total unique items across members
  const totalCollectedItems = $derived(
    [...new Set(Object.values(collectedItems).reduce((acc, items) => [...acc, ...Object.keys(items)], [] as Array<string>))].length
  );

  // Selected category collected items
  const totalCollectedCategoryItems = $derived(Object.keys(collectedItems[selectedCategory] || []).length);

  /**
   * On main collection tab selected.
   * @param {MainCategories} tab Selected tab
   */
  const onTabSelected = (tab: MainCategories) => {
    selectedTab = tab;
  };

  /**
   * On collection category selected.
   * @param {Categories} category selected category
   */
  const onCategorySelected = (category: Categories) => {
    selectedCategory = category;
  };

  /**
   * Get players that have collected a given item by category.
   * @param {Categories} category Item category
   * @param {string} item Item to obtain collectors for
   */
  const getCollectedItemPlayers = (category: Categories, item: string) =>
    collectedItems[category] && collectedItems[category][item] ? collectedItems[category][item] : [];

  /**
   * Whether or not a given category has been green logged by group members.
   * @param {Categories} category Category to determine
   */
  const isGreenLog = (category: Categories) => Object.keys(collectedItems[category] || []).length === CATEGORIES[category].items.length;
</script>

<div class="flex flex-col gap-2 p-2 border-2 border-black bg-grey-100">
  <div class="flex justify-center py-2 border-2 border-grey-50 bg-primary-100">
    <span class="font-bold text-2xl">Collection Log - {totalCollectedItems}/{Object.keys(ITEMS).length}</span>
  </div>

  <div class="flex flex-col pt-2 border-2 border-grey-50 bg-primary-100">
    <div class="grid grid-cols-5 gap-2 border-b-2 border-grey-50">
      {#each tabs as tab (tab)}
        <button
          class={clsx(
            'capitalize text-xl text-shadow-runescape rounded-t-lg border-t-2 border-l-2 border-r-2 border-grey-50',
            selectedTab === tab ? 'bg-primary-200' : 'bg-primary-300 hover:bg-primary-200'
          )}
          onclick={() => onTabSelected(tab)}>{tab}</button
        >
      {/each}
    </div>

    <div class="grid grid-cols-7 h-120 overflow-hidden">
      <ul class="col-span-2 overflow-x-hidden overflow-y-scroll">
        {#each tabCategories as tabCategory (tabCategory)}
          <li class={clsx('even:bg-primary-50', selectedCategory === tabCategory ? 'bg-selected' : 'hover:bg-selected')}>
            <button
              class={clsx('capitalize text-xl text-shadow-runescape pl-1 w-full text-left', isGreenLog(tabCategory) && 'text-green')}
              onclick={() => onCategorySelected(tabCategory)}
            >
              {tabCategory.replaceAll('_', ' ')}
            </button>
          </li>
        {/each}
      </ul>

      <div class="flex flex-col col-span-5 border-l-2 border-primary-50 overflow-hidden">
        <div class="flex flex-col px-4 border-b-2 border-primary-50">
          <span class="capitalize font-bold text-2xl">{selectedCategory.replaceAll('_', ' ')}</span>

          <div class="flex gap-2">
            <span class="text-xl">Obtained: </span>
            <span
              class={clsx(
                'text-xl',
                totalCollectedCategoryItems === 0 && 'text-red',
                totalCollectedCategoryItems === categoryItems.length && 'text-green',
                totalCollectedCategoryItems > 0 && totalCollectedCategoryItems < categoryItems.length && 'text-yellow'
              )}>{totalCollectedCategoryItems}/{categoryItems.length}</span
            >
          </div>
        </div>

        <div class="flex flex-wrap gap-4 content-start px-4 py-2 grow overflow-x-hidden overflow-y-scroll">
          {#each categoryItems as categoryItem (categoryItem)}
            {@const collected = getCollectedItemPlayers(selectedCategory, categoryItem)}

            <CollectionItem
              item={categoryItem}
              players={collected}
              playersNotCollected={groupPlayers.filter(
                (player) => !collected.includes(player) && (!selectedPlayers.length || selectedPlayers.includes(player))
              )}
            />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
