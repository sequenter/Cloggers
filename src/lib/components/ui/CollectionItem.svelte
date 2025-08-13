<script lang="ts">
  import { clsx } from 'clsx';

  import { ITEMS } from '$lib/util/constants';

  interface Props {
    item: string;
    scale?: string;
    size?: string;
    total: number;
  }

  const { item, scale = 'scale-200', size = 'w-18 h-18', total }: Props = $props();
</script>

<button
  class={clsx('relative flex justify-center items-center', size)}
  data-title={ITEMS[item]}
>
  {#if total > 0}
    <span class="absolute text-lg z-10 top-0 left-0 text-yellow">{total}</span>
  {/if}

  <div class={clsx(`sprite-icon id_${item}`, scale, total === 0 && 'opacity-50')}></div>
</button>
