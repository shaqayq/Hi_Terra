import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const terraApi = createApi({
  reducerPath: "terraApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    getFarms: builder.query({
      query: () => "getfarms",
    }),
    countFarms: builder.query({
      query: () => "totalFarm",
    }),
    countField: builder.query({
      query: () => "totalField",
    }),
    contactList: builder.query({
      query: () => "contacts",
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "login",
        method: "POST",
        body: payload,
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useGetFarmsQuery,
  useCountFarmsQuery,
  useCountFieldQuery,
  useContactListQuery,
  useLoginMutation,
  useDeleteContactMutation,
} = terraApi;
