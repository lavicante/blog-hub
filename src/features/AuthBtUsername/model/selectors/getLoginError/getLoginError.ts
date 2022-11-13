import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginData } from 'features/AuthBtUsername/model/selectors/getLoginData/getLoginData';

export const getLoginError = (state: StateSchema) => state?.login?.error || '';
