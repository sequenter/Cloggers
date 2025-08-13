<script lang="ts">
  import { clsx } from 'clsx';

  import Dialog from '../layout/Dialog.svelte';

  import { ITEMS } from '$lib/util/constants';

  interface Props {
    item: string;
    players: Array<string>;
    scale?: string;
    size?: string;
  }

  let dialog: Dialog;

  const { item, players, scale = 'scale-200', size = 'w-18 h-18' }: Props = $props();
</script>

<button
  class={clsx('relative flex justify-center items-center', size)}
  data-title={ITEMS[item]}
  onclick={() => dialog.open(item, players)}
>
  {#if players.length > 0}
    <span class="absolute text-lg z-10 top-0 left-0 text-yellow">{players.length}</span>
  {/if}

  <div class={clsx(`sprite-icon id_${item}`, scale, players.length === 0 && 'opacity-50')}></div>
</button>

<Dialog bind:this={dialog} />
