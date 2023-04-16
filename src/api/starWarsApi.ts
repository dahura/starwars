import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { StarWarsPerson } from "./types";

// Define a service using a base URL and expected endpoints
export const starWarsApi = createApi({
  reducerPath: "starwarsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getStarwarsPerson: builder.query<StarWarsPerson, { id: number }>({
      query: ({ id }) => `/starwars/people/${id}`,
    }),
    getAll: builder.query<{ results: StarWarsPerson[] }, null>({
      query: () => `/starwars/people`,
    }),
  }),
});

export const { useGetStarwarsPersonQuery, useGetAllQuery } = starWarsApi;
