<script lang="ts">
  import { clsx } from 'clsx';

  import ModeIcon from '../ui/ModeIcon.svelte';

  import { Dialog } from '$lib/components';
  import { ITEMS } from '$lib/util/constants';

  let item = $state('');
  let playersCollected: Array<string> = $state([]);
  let playersNotCollected: Array<string> = $state([]);

  let dialog: Dialog;

  /**
   * Open the dialog.
   * @param {string} itemId Item
   * @param {Array<string>} collected Players that have collected the item
   * @param {Array<string>} notCollected Players that have not collected the item
   */
  export const open = (itemId: string, collected: Array<string>, notCollected: Array<string>) => {
    item = itemId;
    playersCollected = collected;
    playersNotCollected = notCollected;

    dialog.open();
  };
</script>

{#snippet iconSnippet()}
  <div class={`sprite-icon id_${item}`}></div>
{/snippet}

<Dialog
  bind:this={dialog}
  title={ITEMS[item]}
  icon={iconSnippet}
>
  {#if playersCollected.length}
    <div class="flex flex-col w-full overflow-auto">
      <span class="sticky top-0 text-xl px-2 border-b-2 border-grey-50 text-white bg-primary-300"
        >{`Collected (${playersCollected.length})`}</span
      >

      <ul class="text-xl w-full">
        {#each playersCollected.sort() as player, i (player)}
          <li class="flex items-center justify-between px-2 even:bg-primary-50">
            <span>{player}</span>

            <ModeIcon {player} />
          </li>
        {/each}
      </ul>

      {#if playersNotCollected.length}
        <details class="open:[&>summary]:border-b-2">
          <summary class="sticky top-0 text-xl px-2 cursor-pointer border-t-2 border-grey-50 bg-primary-300 text-white"
            >{`Not collected (${playersNotCollected.length})`}</summary
          >
          <ul class="text-xl w-full">
            {#each playersNotCollected.sort((a, b) => a.localeCompare(b)) as player (player)}
              <li class="flex items-center justify-between gap-2 px-2 even:bg-primary-50">
                <span>{player}</span>

                <ModeIcon {player} />
              </li>
            {/each}
          </ul>
        </details>
      {/if}
    </div>
  {:else}
    <span class="text-xl">Noone has collected this item!</span>
  {/if}
</Dialog>
