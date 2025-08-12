<script lang="ts">
  import { clsx } from 'clsx';

  interface Props {
    class?: string;
    path: string;
    title: string;
  }

  let { path, title, ...rest }: Props = $props();
</script>

<svg
  class={clsx(rest.class)}
  fill="currentColor"
  role="img"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>{title}</title>
  <path d={path}></path>
</svg>
