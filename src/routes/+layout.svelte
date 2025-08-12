<script lang="ts">
  import type { Snippet } from 'svelte';

  import '../app.css';

  import Footer from '$lib/components/layout/Footer.svelte';
  import Header from '$lib/components/layout/Header.svelte';

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<div class="flex flex-col gap-4 min-h-screen">
  <Header />

  <main class="flex flex-col container mx-auto grow">
    {@render children()}
  </main>
</div>

<Footer />
