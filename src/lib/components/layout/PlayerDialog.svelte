<script lang="ts">
  import { clsx } from 'clsx';

  import ModeIcon from '../ui/ModeIcon.svelte';

  import { Dialog, Icon } from '$lib/components';
  import type { PlayerDetail } from '$lib/types';
  import { ITEMS } from '$lib/util/constants';
  import { arrowLeftIcon, gnomeIcon, searchIcon } from '$lib/util/icon';

  let players: Record<string, PlayerDetail> = $state({});
  let unsyncedPlayers: Array<string> = $state([]);
  let selectedItems: Array<string> = $state([]);
  let title = $state('Group Members');

  let dialog: Dialog;

  const onShowUniques = (player: string, uniques: Array<string>) => {
    selectedItems = uniques;
    title = `${player}'s Unique Collections`;
  };

  /**
   * Open the dialog.
   * @param {Record<string, PlayerDetail>} playersDetail Record containing players and their statistics.
   */
  export const open = (playersDetail: Record<string, PlayerDetail>, unsyncedPlayersDetail: Array<string>) => {
    players = playersDetail;
    unsyncedPlayers = unsyncedPlayersDetail;

    dialog.open();
  };
</script>

{#snippet iconSnippet()}
  <img
    class="w-6 h-6"
    alt="Members"
    src={gnomeIcon}
  />
{/snippet}

{#snippet returnSnippet()}
  <button
    class={clsx(
      'flex items-center justify-center w-6 h-6 border-2 border-black bg-linear-to-r from-button-start-stop to-button-end-stop',
      !selectedItems.length && 'hidden'
    )}
    aria-label="close"
    onclick={() => {
      selectedItems = [];
      title = 'Group Members';
    }}
  >
    <Icon
      class="w-6 h-6 text-black"
      title="close"
      path={arrowLeftIcon}
    />
  </button>
{/snippet}

<Dialog
  bind:this={dialog}
  controls={returnSnippet}
  icon={iconSnippet}
  {title}
>
  {#if selectedItems.length}
    <ul class="text-xl w-full">
      {#each selectedItems as selectedItem, i (selectedItem)}
        <li class="flex items-center gap-2 px-2 even:bg-primary-50">
          <div class={`sprite-icon id_${selectedItem}`}></div>

          <span>{ITEMS[selectedItem]}</span>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="flex flex-col w-full whitespace-nowrap overflow-auto">
      <div class="sticky top-0 grid grid-cols-4 text-xl px-2 border-b-2 border-grey-50 text-white bg-primary-300">
        <span class="flex justify-center">Member</span>
        <span class="flex justify-center">Collections</span>
        <span class="flex justify-center">Uniques</span>
        <span class="flex justify-center">Mode</span>
      </div>

      {#if Object.keys(players).length}
        <ul class="text-xl w-full">
          {#each Object.entries(players).sort((a, b) => a[0].localeCompare(b[0])) as [player, { items, uniques }] (player)}
            <li class="px-2 even:bg-primary-50">
              <div class="grid grid-cols-4 text-xl">
                <div class="flex items-center justify-between gap-2">
                  <span>{player}</span>
                </div>

                <span class="flex justify-end">{items.length}</span>

                <div class="flex gap-2 justify-end">
                  <span>{uniques.length}</span>

                  {#if uniques.length > 0}
                    <button
                      aria-label="Search"
                      onclick={() => {
                        onShowUniques(player, uniques);
                      }}
                    >
                      <Icon
                        class="w-4 h-4"
                        title="Search"
                        path={searchIcon}
                      />
                    </button>
                  {/if}
                </div>

                <div class="flex items-center justify-end">
                  <ModeIcon {player} />
                </div>
              </div>
            </li>
          {/each}
        </ul>
      {:else}
        <span class="text-xl">Search for a group to view members</span>
      {/if}

      {#if unsyncedPlayers.length}
        <details class="open:[&>summary]:border-b-2">
          <summary class="sticky top-0 text-xl px-2 cursor-pointer border-t-2 border-grey-50 bg-primary-300 text-white"
            >{`Unsynced members (${unsyncedPlayers.length})`}</summary
          >
          <ul class="text-xl w-full">
            {#each unsyncedPlayers.sort((a, b) => a.localeCompare(b)) as unsyncedPlayer (unsyncedPlayer)}
              <li class="flex items-center justify-between gap-2 px-2 even:bg-primary-50">
                <span>{unsyncedPlayer}</span>

                <ModeIcon player={unsyncedPlayer} />
              </li>
            {/each}
          </ul>
        </details>
      {/if}
    </div>
  {/if}
</Dialog>
