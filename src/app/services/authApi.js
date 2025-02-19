import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "/auth/register_login",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
            languageid: 1,
          },
        };
      },
    }),
  }),
});
export const { useLoginUserMutation } = authApi;
