import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';

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
}
