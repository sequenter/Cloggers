<script lang="ts">
  import type { Snippet } from 'svelte';
  import Portal from 'svelte-portal';

  import { Icon } from '$lib/components';
  import { closeIcon } from '$lib/util/icon';

  interface Props {
    title: string;
    children: Snippet;
    controls?: Snippet;
    icon: Snippet;
  }

  let isOpen = $state(false);

  const { title, children, controls, icon }: Props = $props();

  /**
   * On dialog click, determine if the backdrop was the click target, and if so, close the dialog.
   * @param event
   */
  const onDialogClick = (event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) => {
    if (event.target === event.currentTarget) {
      isOpen = false;
    }
  };

  /**
   * Open the dialog.
   */
  export const open = () => {
    isOpen = true;
  };
</script>

{#if isOpen}
  <Portal>
    <div
      class="flex items-center justify-center fixed bottom-0 top-0 left-0 right-0 z-[999] bg-black/60"
      role="presentation"
      onclick={onDialogClick}
    >
      <div
        class="flex flex-col gap-2 p-2 border-2 mx-2 w-md max-h-10/12 overflow-hidden m-auto pointer-events-auto border-black bg-grey-100"
      >
        <div class="flex items-center justify-between p-2 border-2 border-grey-50 bg-primary-100">
          {@render icon()}

          <span class="font-bold text-2xl">{title}</span>

          <div class="flex gap-2">
            {@render controls?.()}

            <button
              class="flex items-center justify-center w-6 h-6 border-2 border-black bg-linear-to-r from-button-start-stop to-button-end-stop"
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
        </div>

        <div class="flex justify-center border-2 overflow-x-hidden overflow-y-auto border-grey-50 bg-primary-100">
          {@render children()}
        </div>
      </div>
    </div>
  </Portal>
{/if}
