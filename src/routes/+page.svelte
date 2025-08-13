<script lang="ts">
  import '../app.css';

  import { CollectionLog, Featured, Footer, Header, Rankings } from '$lib/components';
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
