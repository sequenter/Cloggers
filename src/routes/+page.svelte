<script lang="ts">
  import { CollectionLog } from '$lib/components';
  import { searchStore } from '$lib/stores/search.store.svelte';

  const { groupId } = $derived(searchStore);

  $effect(() => {
    console.log(groupId);
  });
</script>

<div class="flex flex-col gap-4">
  <CollectionLog />
</div>
