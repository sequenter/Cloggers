<script lang="ts">
  import { Icon } from '$lib/components';
  import { collectionsFetchStore } from '$lib/stores/collections.store.svelte';
  import { searchStore } from '$lib/stores/search.store.svelte';
  import { CollectionsIcon, Spinner, searchIcon } from '$lib/util/icon';

  const { error, isLoading } = $derived(collectionsFetchStore);
  let { setGroupId } = $derived(searchStore);

  let inputGroupId = $state('');

  const onSearch = () => {
    setGroupId(inputGroupId);
  };
</script>

<div class="pb-2 border-b-2 border-black bg-grey-100">
  <div class="py-4 border-b-2 border-grey-50 bg-primary-100">
    <div class="flex gap-8 container mx-auto px-2">
      <div class="flex gap-2 items-center">
        <img
          class="h-8 w-8"
          alt="collections icon"
          src={CollectionsIcon}
        />

        <span class="text-2xl">Cloggers</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-2xl">Group ID:</span>

        <div class="flex items-center rounded-l-sm px-2 border-2 border-grey-50 bg-primary-300">
          <input
            bind:value={inputGroupId}
            autocomplete="off"
            id="input-group-id"
            class="text-shadow-runescape focus:outline-none"
            placeholder="Input group ID..."
          />

          {#if isLoading}
            <img
              class="w-4 h-4"
              alt="..."
              src={Spinner}
            />
          {:else}
            <button
              aria-label="Search"
              onclick={onSearch}
            >
              <Icon
                class="w-4 h-4"
                title="Search"
                path={searchIcon}
              />
            </button>
          {/if}
        </div>

        {#if error}
          <span class="text-md text-red">{error.message}</span>
        {/if}
      </div>
    </div>
  </div>
</div>
