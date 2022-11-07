import { createSelector } from '@reduxjs/toolkit';
import { getLoginData } from 'features/AuthBtUsername/model/selectors/getLoginData/getLoginData';

export const getLoading = createSelector(
  getLoginData,
  (loginData) => loginData.isLoading
);
