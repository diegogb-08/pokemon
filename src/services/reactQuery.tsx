import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Add default Options for Queries
      useErrorBoundary: true,
    },
    mutations: {
      // Add default Options for Queries
      useErrorBoundary: true,
    }
  }
})