<script lang="ts">
  import CollectionItem from './CollectionItem.svelte';

  import { collectionsFetchStore } from '$lib/stores/collections.store.svelte';
  import { searchStore } from '$lib/stores/search.store.svelte';
  import type { CollectedItem } from '$lib/types';

  interface Props {
    items: Array<CollectedItem>;
    title: string;
  }
  const { selectedPlayers } = $derived(searchStore);

  /* Derived API data states */
  const { data } = $derived(collectionsFetchStore);

  // All group members
  const groupPlayers = $derived(data ? data.members.map(({ player_name_with_capitalization }) => player_name_with_capitalization) : []);

  const { items, title }: Props = $props();
</script>

<div class="flex flex-col gap-2 p-2 border-2 border-black bg-grey-100">
  <div class="flex items-center justify-center gap-4 py-2 border-2 border-grey-50 bg-primary-100">
    <span class="capitalize font-bold text-2xl">{title}</span>
  </div>

  <div class="p-2 border-2 border-grey-50 bg-primary-100">
    {#if items.length}
      <div class="grid grid-cols-10">
        {#each items as { item, players } (item)}
          <div class="flex items-center justify-center">
            <CollectionItem
              scale="scale-100"
              size="w-9 h-9"
              playersNotCollected={groupPlayers.filter(
                (player) => !players.includes(player) && (!selectedPlayers.length || selectedPlayers.includes(player))
              )}
              {item}
              {players}
            />
          </div>
        {/each}
      </div>
    {:else}
      <div class="flex items-center justify-center w-full"><span class="text-lg">Search for a group to view {title}</span></div>
    {/if}
  </div>
</div>
