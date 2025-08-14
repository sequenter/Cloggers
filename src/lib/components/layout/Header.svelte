<script lang="ts">
  import { clsx } from 'clsx';

  import { Icon, PlayerDialog } from '$lib/components';
  import { collectionsFetchStore } from '$lib/stores/collections.store.svelte';
  import { groupFetchStore } from '$lib/stores/group.store.svelte';
  import { searchStore } from '$lib/stores/search.store.svelte';
  import { CollectionsIcon, GnomeIcon, Spinner, searchIcon } from '$lib/util/icon';
  import { playerDetailMap, unsyncedPlayerMap } from '$lib/util/mapping';

  const { data, error, isLoading } = $derived(collectionsFetchStore);
  const { data: groupStatsData } = $derived(groupFetchStore);

  let { groupId, setGroupId } = $derived(searchStore);

  let inputGroupId = $derived(groupId);

  let dialog: PlayerDialog;

  const onSearch = () => {
    setGroupId(inputGroupId);
  };
</script>

<div class="pb-2 border-b-2 border-black bg-grey-100">
  <div class="py-4 border-b-2 border-grey-50 bg-primary-100">
    <div class="flex items-center justify-between container mx-auto px-2">
      <div class="flex gap-4">
        <div class="flex gap-2 items-center">
          <img
            class="h-8 w-8"
            alt="collections icon"
            src={CollectionsIcon}
          />

          <span class="text-2xl">Cloggers</span>
        </div>

        <div class="flex items-center gap-2 whitespace-nowrap">
          <form
            class="flex items-center rounded-l-sm px-2 border-2 border-grey-50 bg-primary-300"
            onsubmit={onSearch}
          >
            <input
              bind:value={inputGroupId}
              autocomplete="off"
              id="input-group-id"
              class="text-shadow-runescape focus:outline-none"
              placeholder="Input group ID..."
            />

            {#if isLoading}
              <img
                class="w-4 h-4"
                alt="..."
                src={Spinner}
              />
            {:else}
              <button
                aria-label="Search"
                onclick={onSearch}
              >
                <Icon
                  class="w-4 h-4"
                  title="Search"
                  path={searchIcon}
                />
              </button>
            {/if}
          </form>

          {#if error}
            <span class="text-md text-red">{error.message}</span>
          {/if}
        </div>
      </div>

      {#if data}
        <div class={clsx('flex items-center gap-4')}>
          <span class="hidden md:flex text-lg whitespace-nowrap"
            >{data.group_name}&nbsp;
            <span class="hidden lg:flex">{`(${data.member_count} members, ${data.members_with_items_synced} synced)`}</span></span
          >

          {#if groupStatsData}
            <button
              class="flex items-center justify-center w-6 h-6 border-2 border-black bg-linear-to-r from-button-start-stop to-button-end-stop"
              aria-label="close"
              onclick={() =>
                dialog.open(
                  playerDetailMap(data),
                  unsyncedPlayerMap(
                    data.members.map(({ player_name_with_capitalization }) => player_name_with_capitalization),
                    groupStatsData
                  )
                )}
            >
              <img
                class="w-4 h-4"
                alt="Members"
                src={GnomeIcon}
              />
            </button>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>

<PlayerDialog bind:this={dialog} />
