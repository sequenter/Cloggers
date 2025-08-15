import { searchStore } from './search.store.svelte';

import { fetchStore } from '$lib/stores/fetch.store.svelte';
import { fetchGroupMemberStats } from '$lib/util/fetch';

const createGroupFetchStore = () => {
  const { groupId } = $derived(searchStore);
  const { data, error, isLoading } = $derived(
    groupId ? fetchStore(() => fetchGroupMemberStats(groupId)) : { data: undefined, error: undefined, isLoading: false }
  );

  // Player game mode map
  const gameModePlayerMap = $derived(
    data
      ? Object.values(data.memberlist).reduce(
          (acc, { game_mode, player, player_name_with_capitalization }) => ({
            ...acc,
            [player_name_with_capitalization ?? player]: game_mode ?? 0
          }),
          {} as Record<string, number>
        )
      : {}
  );

  return {
    get gameModePlayerMap() {
      return gameModePlayerMap;
    },
    get data() {
      return data;
    },
    get error() {
      return error;
    },
    get isLoading() {
      return isLoading;
    }
  };
};

export const groupFetchStore = createGroupFetchStore();
