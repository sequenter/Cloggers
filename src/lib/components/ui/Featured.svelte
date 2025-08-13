<script lang="ts">
  import { FeaturedItems } from '$lib/components';
  import { collectionsFetchStore } from '$lib/stores/collections.store.svelte';
  import { searchStore } from '$lib/stores/search.store.svelte';
  import type { CollectedItem } from '$lib/types';
  import { collectedItemMap } from '$lib/util/mapping';

  const MAX_FEATURED_ITEMS = 50;

  const { data } = $derived(collectionsFetchStore);
  const { selectedPlayers } = $derived(searchStore);

  const collectedItems: Array<CollectedItem> = $derived(data ? collectedItemMap(data, selectedPlayers) : []);
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <FeaturedItems
    title="most collected items"
    items={collectedItems.slice(0, MAX_FEATURED_ITEMS)}
  />

  <FeaturedItems
    title="least collected items"
    items={collectedItems.slice(collectedItemMap.length - 1 - MAX_FEATURED_ITEMS)}
  />
</div>
