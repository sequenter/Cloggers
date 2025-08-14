import { dev } from '$app/environment';

import type { FetchResponse, GroupCollections } from '$lib/types';

interface JsonResponse<T> {
  error?: {
    Code: number;
    Message: string;
  };
  data: T;
}

type Endpoint = 'group_collection_log' | 'group_recent_items';

const API_URL = 'https://templeosrs.com/api/collection-log/';
const API_CORS_PROXY = dev ? 'https://cors-anywhere.herokuapp.com/' : '';

/**
 * Query the given endpoint on the API asynchrounously and return the JSON result as a promise.  Throws an exception in the event that the
 * response contains an error object.
 * @param {Endpoint} endpoint The endpoint to call
 * @param {Record<string, string>} params Params to append
 * @returns {Promise<FetchResponse<T>>} JSON response promise
 */
const fetchEndpoint = async <T>(endpoint: Endpoint, params: Record<string, string> = {}): Promise<FetchResponse<T>> => {
  const paramString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const response = await fetch(`${API_CORS_PROXY}${API_URL}${endpoint}.php?${paramString}`);

  const { data, error }: JsonResponse<T> = await response.json();

  // Ensure errors are captured
  if (error) {
    throw new Error(error.Message);
  }

  return { data };
};

/**
 * Calls the group collection endpoint on the TempleOSRS API.
 * @param {string} group The group ID
 * @returns {Promise<FetchResponse<GroupCollections>>} Response promise
 */
export const fetchGroupCollections = (group: string): Promise<FetchResponse<GroupCollections>> =>
  fetchEndpoint('group_collection_log', { group, categories: 'all' });
