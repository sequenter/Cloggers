<script lang="ts">
  import { page } from '$app/state';

  import '../app.css';

  import { CollectionLog, Featured, Footer, Header, Rankings } from '$lib/components';
  import { searchStore } from '$lib/stores/search.store.svelte';

  const { setGroupId } = $derived(searchStore);

  $effect(() => {
    setGroupId(page.url.searchParams.get('group') || '');
  });
</script>

<div class="flex flex-col gap-4 min-h-screen">
  <Header />

  <main class="flex flex-col container mx-auto px-2 grow last:mb-4">
    <div class="flex flex-col gap-4">
      <Rankings />

      <CollectionLog />

      <Featured />
    </div>
  </main>
</div>

<Footer />
