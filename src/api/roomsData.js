import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const roomsApi = createApi({
  reducerPath: 'roomsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getRoomsDetails: builder.query({
      query: () => '/rooms',
      providesTags: ['Rooms'],
    }),
    createRoom: builder.mutation({
      query: (room) => ({
        url: '/rooms',
        method: 'POST',
        body: room,
      }),
    }),
    deleteRoom: builder.mutation({
      query: (roomId) => ({
        url: `/rooms/${roomId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Rooms'],
    }),
  }),
});

export const {
  useGetRoomsDetailsQuery,
  useCreateRoomMutation,
  useDeleteRoomMutation,
} = roomsApi;
