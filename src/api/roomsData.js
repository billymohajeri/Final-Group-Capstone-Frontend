import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const roomsApi = createApi({
  reducerPath: 'roomsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getRoomsDetails: builder.query({
      query: () => '/rooms',
      providesTags: ['Rooms'],
    }),
  }),
});
export const { useGetRoomsDetailsQuery } = roomsApi;
