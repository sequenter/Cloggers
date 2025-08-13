import type { FetchResponse } from '$lib/types';

interface FetchState<T> {
  data: T | undefined;
  error: Error | undefined;
  isLoading: boolean;
}

export const fetchStore = <T>(callback: () => Promise<FetchResponse<T>>): FetchState<T> => {
  let store: FetchState<T> = $state({ data: undefined, error: undefined, isLoading: false });

  /**
   * Fetch data via the provided callback and update store states accordingly.
   */
  const fetch = async () => {
    // Update store loading
    store = { ...store, isLoading: true };

    try {
      // Update store data by waiting for the fetch callback and destructuring the result
      (({ data }) => {
        store = { ...store, data, isLoading: false };
      })(await callback());
    } catch (error) {
      // Update store error
      store = { ...store, error: error instanceof Error ? error : new Error(String(error)), isLoading: false };
    }
  };

  fetch();

  return {
    get data() {
      return store.data;
    },
    get error() {
      return store.error;
    },
    get isLoading() {
      return store.isLoading;
    }
  };
};
