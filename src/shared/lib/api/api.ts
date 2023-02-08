import axios, { AxiosRequestConfig } from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localSotorage';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization =
      localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
  }

  return config;
});
