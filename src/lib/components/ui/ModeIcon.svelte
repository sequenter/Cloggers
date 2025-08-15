<script lang="ts">
  import { groupFetchStore } from '$lib/stores/group.store.svelte';
  import { gameModeIcon } from '$lib/util/icon';

  interface Props {
    minMode?: number;
    player: string;
  }

  const { gameModePlayerMap } = $derived(groupFetchStore);

  const { minMode = 1, player }: Props = $props();
</script>

{#if gameModePlayerMap[player] !== undefined && gameModePlayerMap[player] >= minMode}
  <div class="flex items-center justify-center w-6 h-6 bg-black border-2 border-grey-50">
    <img
      class="w-4 h-4"
      alt="IM"
      src={gameModeIcon[gameModePlayerMap[player]]}
    />
  </div>
{/if}
