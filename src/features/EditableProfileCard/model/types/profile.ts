import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';

export enum ValidationErrors {
  INCORECT_USER_DATA = 'INCORECT_USER_DATA',
  INCORECT_AGE = 'INCORECT_AGE',
  INCORECT_CITY = 'INCORECT_CITY',
  INCORECT_USER_NAME = 'INCORECT_USER_NAME',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  country?: Country;
  currency?: Currency;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data: Profile | undefined;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
  validateErrores?: ValidationErrors[];
}
