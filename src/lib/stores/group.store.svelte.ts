import { searchStore } from './search.store.svelte';

import { fetchStore } from '$lib/stores/fetch.store.svelte';
import { fetchGroupMemberStats } from '$lib/util/fetch';

const createGroupFetchStore = () => {
  const { groupId } = $derived(searchStore);
  const { data, error, isLoading } = $derived(
    groupId ? fetchStore(() => fetchGroupMemberStats(groupId)) : { data: undefined, error: undefined, isLoading: false }
  );

  return {
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
