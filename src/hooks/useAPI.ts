import { useState, useEffect, useCallback, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

// Types for our hook parameters and return values
interface UseAPIOptions {
  baseURL?: string;
  headers?: Record<string, string>;
  timeout?: number;
  cache?: boolean;
  cacheTime?: number;
  requireAuth?: boolean;
}

interface APIResponse<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  fetch: (endpoint: string, options?: RequestInit) => Promise<T | null>;
  post: <U>(endpoint: string, body: U, options?: RequestInit) => Promise<T | null>;
  put: <U>(endpoint: string, body: U, options?: RequestInit) => Promise<T | null>;
  del: (endpoint: string, options?: RequestInit) => Promise<T | null>;
}

// Simple cache implementation
const apiCache = new Map<string, { data: any; timestamp: number }>();

/**
 * Custom hook for API operations with authentication, loading states, error handling, and caching
 * 
 * @param initialEndpoint - Optional initial endpoint to fetch on mount
 * @param options - Configuration options for the API client
 * @returns Object containing data, loading state, error, and CRUD methods
 */
export function useAPI<T = any>(initialEndpoint?: string, options?: UseAPIOptions): APIResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  const auth = useContext(AuthContext);

  // Return early with error if auth context is undefined
  if (!auth && options?.requireAuth) {
    throw new Error('useAPI with requireAuth must be used within an AuthProvider');
  }

  const {
    baseURL = '',
    headers = {},
    timeout = 10000,
    cache = true,
    cacheTime = 5 * 60 * 1000, // 5 minutes default cache time
    requireAuth = false
  } = options || {};

  // Helper function to build the full URL
  const buildURL = (endpoint: string): string => {
    return `${baseURL}${endpoint}`;
  };

  // Helper function to check cache
  const checkCache = (url: string): { hit: boolean; data: T | null } => {
    if (!cache) return { hit: false, data: null };
    
    const cachedItem = apiCache.get(url);
    if (!cachedItem) return { hit: false, data: null };
    
    const now = Date.now();
    if (now - cachedItem.timestamp > cacheTime) {
      apiCache.delete(url);
      return { hit: false, data: null };
    }
    
    return { hit: true, data: cachedItem.data };
  };

  // Helper function to set cache
  const setCache = (url: string, data: T): void => {
    if (!cache) return;
    apiCache.set(url, { data, timestamp: Date.now() });
  };

  // Helper to build auth headers
  const getAuthHeaders = (): Record<string, string> => {
    if (!requireAuth || !auth?.isAuthenticated) {
      return {};
    }
    
    // Add authentication headers here
    // In a real implementation, you might get a token from localStorage or auth state
    // Example: return { 'Authorization': `Bearer ${localStorage.getItem('token')}` };
    return { 'Authorization': `Bearer user-${auth.user?.id}` };
  };

  // Implement fetch functionality
  const fetchData = useCallback(async (endpoint: string, options?: RequestInit): Promise<T | null> => {
    // Check authentication requirements
    if (requireAuth && !auth?.isAuthenticated) {
      setError(new Error('Authentication required for this request'));
      return null;
    }

    const url = buildURL(endpoint);
    setLoading(true);
    setError(null);

    // Check cache first
    const { hit, data: cachedData } = checkCache(url);
    if (hit) {
      setData(cachedData);
      setLoading(false);
      return cachedData;
    }

    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      const authHeaders = getAuthHeaders();

      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...authHeaders,
          ...(options?.headers || {})
        },
        signal: controller.signal
      });

      clearTimeout(id);

      if (!response.ok) {
        // Special handling for authentication errors
        if (response.status === 401 || response.status === 403) {
          // Optionally handle token refresh or logout here
          if (auth) {
            auth.logout();
          }
          throw new Error('Authentication failed. Please log in again.');
        }
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
      setCache(url, result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error occurred');
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [baseURL, headers, timeout, cache, cacheTime, auth, requireAuth]);

  // Implement POST functionality
  const postData = useCallback(async <U>(endpoint: string, body: U, options?: RequestInit): Promise<T | null> => {
    return await fetchData(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options
    });
  }, [fetchData]);

  // Implement PUT functionality
  const putData = useCallback(async <U>(endpoint: string, body: U, options?: RequestInit): Promise<T | null> => {
    return await fetchData(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...options
    });
  }, [fetchData]);

  // Implement DELETE functionality
  const deleteData = useCallback(async (endpoint: string, options?: RequestInit): Promise<T | null> => {
    return await fetchData(endpoint, {
      method: 'DELETE',
      ...options
    });
  }, [fetchData]);

  // Fetch initial data if endpoint is provided and not waiting for auth
  useEffect(() => {
    if (initialEndpoint && (!requireAuth || auth?.isAuthenticated)) {
      fetchData(initialEndpoint);
    }
  }, [initialEndpoint, fetchData, requireAuth, auth?.isAuthenticated]);

  return {
    data,
    loading,
    error,
    fetch: fetchData,
    post: postData,
    put: putData,
    del: deleteData
  };
}

export default useAPI;