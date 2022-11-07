import { createSelector } from '@reduxjs/toolkit';
import { getLoginData } from 'features/AuthBtUsername/model/selectors/getLoginData/getLoginData';

export const getPassword = createSelector(
  getLoginData,
  (loginData) => loginData.password
);
