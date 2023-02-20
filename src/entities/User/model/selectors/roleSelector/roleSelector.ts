import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../types/user';

export const getRoleSelector = (state: StateSchema) =>
  state.user.authData?.roles || [];

export const isUserAdmin = createSelector(getRoleSelector, (roles) =>
  Boolean(roles.includes(UserRole.ADMIN))
);

export const isUserManager = createSelector(getRoleSelector, (roles) =>
  Boolean(roles.includes(UserRole.MANAGER))
);
