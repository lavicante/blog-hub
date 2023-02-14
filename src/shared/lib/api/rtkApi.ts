import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localSotorage';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      if (headers) {
        headers.set(
          'authorization',
          localStorage.getItem(USER_LOCAL_STORAGE_KEY) || ''
        );
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
