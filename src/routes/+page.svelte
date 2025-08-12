<script lang="ts">
  import clsx from 'clsx';

  import type { Categories, MainCategories } from '$lib/types';
  import { CATEGORIES, ITEMS, MAIN_CATEGORIES } from '$lib/util/constants';

  const tabs = Object.keys(MAIN_CATEGORIES) as Array<MainCategories>;

  let selectedTab: MainCategories = $state('bosses');
  const tabCategories = $derived(MAIN_CATEGORIES[selectedTab]) as Array<Categories>;

  let selectedCategory: Categories = $derived(tabCategories[0]);
  const categoryItems = $derived(CATEGORIES[selectedCategory].items);

  const onTabSelected = (tab: MainCategories) => {
    selectedTab = tab;
  };

  const onCategorySelected = (category: Categories) => {
    selectedCategory = category;
  };
</script>

<div class="flex flex-col gap-2 p-2 border-2 border-black bg-grey-100">
  <div class="flex justify-center py-2 border-2 border-grey-50 bg-primary-100">
    <span class="font-bold text-2xl">Collection Log - 0/{Object.keys(ITEMS).length}</span>
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
              class="capitalize text-xl text-shadow-runescape pl-1 w-full text-left"
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
            <span class="text-xl text-red">0/{categoryItems.length}</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 content-start px-4 py-2 grow overflow-x-hidden overflow-y-scroll">
          {#each categoryItems as categoryItem (categoryItem)}
            <div class="flex justify-center items-center w-18 h-18">
              <div class={`sprite-icon id_${categoryItem} opacity-50 scale-200`}></div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
