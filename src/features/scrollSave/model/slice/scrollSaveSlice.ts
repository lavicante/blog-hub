import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSaveSchema } from '../types/scrollSave';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; postition: number }>
    ) => {
      state.scroll[action.payload.path] = action.payload.postition;
    },
  },
});

export const { reducer: scrollSaveReducer } = scrollSaveSlice;
export const { actions: scrollSaveActions } = scrollSaveSlice;
