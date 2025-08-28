import { fetchEndpoint } from '@utils/fetch';

import { useCallback, useState } from 'react';

interface FetchState<T> {
  data: T | undefined;
  error: Error | undefined;
  isLoading: boolean;
}

/**
 * Custom hook to utilise a fetch callback and update corresponding data, error, and loading states depending on the result of the fetch.
 * @param callback The fetch callback to utilise
 */
export const useFetch = <T>(endpoint: string) => {
  const [state, setState] = useState<FetchState<T>>({ data: undefined, error: undefined, isLoading: false });

  const fetchData = useCallback(
    async (params: Record<string, string>) => {
      // Update state loading
      setState({ data: undefined, error: undefined, isLoading: true });

      try {
        // Update state data by waiting for the fetch callback and destructuring the result
        (({ data }) => {
          setState((curr) => ({ ...curr, data, isLoading: false }));
        })(await fetchEndpoint<T>(endpoint, params));
      } catch (error) {
        // Update state error
        setState((curr) => ({ ...curr, error: error instanceof Error ? error : new Error(String(error)), isLoading: false }));
      }
    },
    [endpoint]
  );

  return { ...state, fetchData };
};
