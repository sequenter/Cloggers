<script lang="ts">
  import { clsx } from 'clsx';

  import { collectionsFetchStore } from '$lib/stores/collections.store.svelte';
  import { searchStore } from '$lib/stores/search.store.svelte';

  const { selectedPlayers, toggleSelectedPlayer } = $derived(searchStore);

  /* Derived API data states */
  const { data } = $derived(collectionsFetchStore);

  // Rank members by collections logged
  const ranking = $derived(
    data
      ? data.members
          .map(({ player_name_with_capitalization, items }) => ({ player: player_name_with_capitalization, itemTotal: items.length }))
          .sort((a, b) => b.itemTotal - a.itemTotal)
      : []
  );
</script>

<div class="flex flex-col gap-2 p-2 border-2 border-black bg-grey-100">
  <div class="flex items-center justify-center gap-4 py-2 border-2 border-grey-50 bg-primary-100">
    <span class="font-bold text-2xl">Group Rankings</span>
  </div>

  <div class="flex p-2 border-2 gap-2 overflow-x-scroll overflow-y-hidden whitespace-nowrap border-grey-50 bg-primary-100">
    {#if ranking.length}
      {#each ranking as { player, itemTotal }, i (player)}
        <button
          class={clsx(
            'flex items-center min-w-48 border-2 border-grey-50',
            selectedPlayers.includes(player) ? 'bg-selected' : 'bg-primary-300'
          )}
          onclick={() => toggleSelectedPlayer(player)}
        >
          {#if i < 3}
            <span
              class={clsx(
                'text-2xl px-2 border-r-2 font-bold text-shadow-none bg-linear-to-r text-black border-grey-50',
                i === 0 && 'from-yellow-200 to-yellow-500',
                i === 1 && 'from-gray-200 to-gray-500',
                i === 2 && 'from-amber-800 to-amber-950'
              )}>{i + 1}</span
            >
          {/if}

          <div class="flex items-center justify-between px-2 w-full">
            <span class="text-xl">{`${i > 2 ? `${i + 1}.` : ''} ${player}`}</span>
            <span class="text-xl">{itemTotal}</span>
          </div>
        </button>
      {/each}
    {:else}
      <div class="flex items-center justify-center w-full"><span class="text-lg">Search for a group to view rankings</span></div>
    {/if}
  </div>
</div>
