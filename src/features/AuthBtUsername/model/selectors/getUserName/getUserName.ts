import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginData } from '../getLoginData/getLoginData';

export const getUserName = (state: StateSchema) => state?.login?.username || '';
