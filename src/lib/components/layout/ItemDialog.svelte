<script lang="ts">
  import { clsx } from 'clsx';

  import { Dialog } from '$lib/components';
  import { ITEMS } from '$lib/util/constants';

  let item = $state('');
  let players: Array<string> = $state([]);

  let dialog: Dialog;

  /**
   * Open the dialog.
   * @param {string} itemId Item
   * @param {Array<string>} playersCollected Players that have collected the item
   */
  export const open = (itemId: string, playersCollected: Array<string>) => {
    item = itemId;
    players = playersCollected;

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
  {#if players.length}
    <ul class="text-xl w-full">
      {#each players.sort() as player, i (player)}
        <li class={clsx('px-2', i & 1 && 'bg-primary-50')}>{player}</li>
      {/each}
    </ul>
  {:else}
    <span class="text-xl">Noone has collected this item!</span>
  {/if}
</Dialog>
