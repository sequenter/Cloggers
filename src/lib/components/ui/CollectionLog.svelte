<script lang="ts">
  import clsx from 'clsx';

  import { collectionsFetchStore } from '$lib/stores/collections.store.svelte';
  import type { Categories, MainCategories } from '$lib/types';
  import { CATEGORIES, ITEMS, MAIN_CATEGORIES } from '$lib/util/constants';
  import { collectedItemsMap } from '$lib/util/mapping';

  /* Selected tab and category states */
  const tabs = Object.keys(MAIN_CATEGORIES) as Array<MainCategories>;

  let selectedTab: MainCategories = $state('bosses');
  const tabCategories = $derived(MAIN_CATEGORIES[selectedTab]) as Array<Categories>;

  let selectedCategory: Categories = $derived(tabCategories[0]);
  const categoryItems = $derived(CATEGORIES[selectedCategory].items);

  /* Derived API data states */
  const { data } = $derived(collectionsFetchStore);

  // Total unique items across members
  const totalCollectedItems = $derived(
    data ? [...new Set(data.members.reduce((acc, { items }) => [...acc, ...items], [] as Array<number>))].length : 0
  );

  // Collated collected items across members
  const collectedItems = $derived(data ? collectedItemsMap(data) : {});

  // Selected category collected items
  const totalCollectedCategoryItems = $derived(Object.keys(collectedItems[selectedCategory] || []).length);

  const onTabSelected = (tab: MainCategories) => {
    selectedTab = tab;
  };

  const onCategorySelected = (category: Categories) => {
    selectedCategory = category;
  };

  const getCollectedItemCount = (category: Categories, item: string) =>
    collectedItems[category] && collectedItems[category][item] ? collectedItems[category][item].length : 0;

  const isGreenLog = (category: Categories) => Object.keys(collectedItems[category] || []).length === CATEGORIES[category].items.length;

  const isItemCollected = (category: Categories, item: string) => collectedItems[category] && collectedItems[category][item];
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
        {#each tabCategories as tabCategory, i (tabCategory)}
          <li class={clsx(i & 1 && 'bg-primary-50', selectedCategory === tabCategory ? 'bg-selected' : 'hover:bg-selected')}>
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
            {@const collectedItemCount = getCollectedItemCount(selectedCategory, categoryItem)}
            <div class="relative flex justify-center items-center w-18 h-18">
              {#if collectedItemCount > 0}
                <span class="absolute text-lg z-10 top-0 left-0 text-yellow">{getCollectedItemCount(selectedCategory, categoryItem)}</span>
              {/if}

              <div
                class={clsx(`sprite-icon id_${categoryItem} scale-200`, !isItemCollected(selectedCategory, categoryItem) && 'opacity-50')}
              ></div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
