<script lang="ts">
  import { clsx } from 'clsx';

  import { Icon } from '$lib/components';
  import { collectionsFetchStore } from '$lib/stores/collections.store.svelte';
  import { groupFetchStore } from '$lib/stores/group.store.svelte';
  import { searchStore } from '$lib/stores/search.store.svelte';
  import { closeIcon, ironmanIcon } from '$lib/util/icon';
  import { gameModePlayerMap } from '$lib/util/mapping';

  const { selectedPlayers, resetSelectedPlayers, setSelectedPlayers, toggleSelectedPlayer } = $derived(searchStore);

  /* Derived API data states */
  const { data } = $derived(collectionsFetchStore);
  const { data: groupStatsData } = $derived(groupFetchStore);

  // Rank members by collections logged
  const ranking = $derived(
    data
      ? data.members
          .map(({ player_name_with_capitalization, items }) => ({ player: player_name_with_capitalization, itemTotal: items.length }))
          .sort((a, b) => b.itemTotal - a.itemTotal)
      : []
  );

  // All group members
  const members = $derived(data ? data.members.map(({ player_name_with_capitalization }) => player_name_with_capitalization) : []);
</script>

<div class="flex flex-col gap-2 p-2 border-2 border-black bg-grey-100">
  <div class="relative flex items-center justify-center gap-4 p-2 border-2 border-grey-50 bg-primary-100">
    <span class="font-bold text-2xl">Group Rankings</span>

    {#if groupStatsData}
      <button
        class="absolute left-2 flex items-center justify-center w-6 h-6 border-2 border-black bg-linear-to-r from-button-start-stop to-button-end-stop"
        title="Filter by ironman members"
        onclick={() => {
          setSelectedPlayers(
            Object.entries(gameModePlayerMap(groupStatsData)).reduce(
              (acc, [player, mode]) => (mode > 0 && members.includes(player) ? [...acc, player] : acc),
              [] as Array<string>
            )
          );
        }}
      >
        <img
          class="w-4 h-4 text-black"
          alt="Ironman"
          src={ironmanIcon}
        />
      </button>
    {/if}

    <div class="absolute right-2 flex items-center gap-2">
      {#if selectedPlayers.length}
        <span class="invisible sm:visible">{`Filtering ${selectedPlayers.length} member${selectedPlayers.length === 1 ? '' : 's'}`}</span>

        <button
          class="flex items-center justify-center w-6 h-6 border-2 border-black bg-linear-to-r from-button-start-stop to-button-end-stop"
          title="Clear filter"
          onclick={() => resetSelectedPlayers()}
        >
          <Icon
            class="w-6 h-6 text-black"
            title="close"
            path={closeIcon}
          />
        </button>
      {/if}
    </div>
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
