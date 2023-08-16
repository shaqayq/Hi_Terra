import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const terraApi = createApi({
  reducerPath: "terraApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
   idType: 'uuid',
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
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
       
      }),
      
    }),
    getContactDetail: builder.query({
      query: (id) => `contacts/${id}`, 
    }),

    createContact: builder.mutation({
      query: (contactData) => ({
        url: 'contacts',
        method: 'POST',
        body: contactData,
        headers:{
          'Content-Type': 'application/json'
        }
      }),
    }),
    editContact: builder.mutation({
      query: ({ id, ...contactData }) => ({
        url: `/contacts/${id}`,
        method: 'PUT', 
        body: contactData,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetFarmsQuery,
  useCountFarmsQuery,
  useCountFieldQuery,
  useContactListQuery,
  useLoginMutation,
  useDeleteContactMutation,
  useGetContactDetailQuery,
  useCreateContactMutation,
  useEditContactMutation
} = terraApi;
