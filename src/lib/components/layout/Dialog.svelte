<script lang="ts">
  import { clsx } from 'clsx';
  import Portal from 'svelte-portal';

  import { Icon } from '$lib/components';
  import { ITEMS } from '$lib/util/constants';
  import { closeIcon } from '$lib/util/icon';

  let isOpen = $state(false);
  let item = $state('');
  let players: Array<string> = $state([]);

  const handleDialogClick = (event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) => {
    if (event.target === event.currentTarget) {
      isOpen = false;
    }
  };

  export const open = (itemId: string, playersCollected: Array<string>) => {
    isOpen = true;
    item = itemId;
    players = playersCollected;

    console.log(playersCollected);
  };
</script>

{#if isOpen}
  <Portal>
    <div
      class="flex items-center justify-center fixed bottom-0 top-0 left-0 right-0 z-[999] bg-black/60"
      role="presentation"
      onclick={handleDialogClick}
    >
      <div
        class="flex flex-col gap-2 p-2 border-2 mx-2 w-md max-h-10/12 overflow-hidden m-auto pointer-events-auto border-black bg-grey-100"
      >
        <div class="flex items-center justify-between p-2 border-2 border-grey-50 bg-primary-100">
          <div class={`sprite-icon id_${item}`}></div>

          <span class="font-bold text-2xl">{ITEMS[item]}</span>

          <button
            class="flex items-center justify-center w-6 h-6 bg-red border-2 border-black bg-linear-to-r from-button-start-stop to-button-end-stop"
            aria-label="close"
            onclick={() => (isOpen = false)}
          >
            <Icon
              class="w-6 h-6 text-black"
              title="close"
              path={closeIcon}
            />
          </button>
        </div>

        <div class="flex justify-center border-2 overflow-x-hidden overflow-y-auto border-grey-50 bg-primary-100">
          {#if players.length}
            <ul class="text-xl w-full">
              {#each players.sort() as player, i (player)}
                <li class={clsx('px-2', i & 1 && 'bg-primary-50')}>{player}</li>
              {/each}
            </ul>
          {:else}
            <span class="text-xl">Noone has collected this item!</span>
          {/if}
        </div>
      </div>
    </div>
  </Portal>
{/if}
