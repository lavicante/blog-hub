import { createSelector } from '@reduxjs/toolkit';
import { getLoginData } from 'features/AuthBtUsername/model/selectors/getLoginData/getLoginData';

export const getUserName = createSelector(
  getLoginData,
  (loginData) => loginData.username
);
