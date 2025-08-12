import { searchStore } from './search.store.svelte';

import { fetchStore } from '$lib/stores/fetch.store.svelte';
import { fetchGroupCollections } from '$lib/util/fetch';

const createCollectionsFetchStore = () => {
  const { groupId } = $derived(searchStore);
  const { data, error, isLoading } = $derived(
    groupId ? fetchStore(() => fetchGroupCollections(groupId)) : { data: undefined, error: undefined, isLoading: false }
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

export const collectionsFetchStore = createCollectionsFetchStore();
