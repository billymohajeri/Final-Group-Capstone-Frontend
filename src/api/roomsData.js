import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const roomsApi = createApi({
  reducerPath: 'roomsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cottage-booking.onrender.com' }),
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
    createReservation: builder.mutation({
      query: (reservation) => ({
        url: '/reservations',
        method: 'POST',
        body: reservation,
      }),
    }),
  }),
});

export const {
  useGetRoomsDetailsQuery,
  useCreateRoomMutation,
  useDeleteRoomMutation,
  useCreateReservationMutation,
} = roomsApi;
