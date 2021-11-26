// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
  endpoints: (builder) => ({
    getClientsByUserId: builder.query({
      query: (user_id) => `clients/${user_id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClientsByUserIdQuery } = clientsApi
