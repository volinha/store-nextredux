import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { Product } from "@/types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    search: builder.query<Product[], string>({
      query: (q) => `search?name=${q}`,
      providesTags: (result, error, search) => [{ type: "product", search }],
    }),
  }),
});