import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: undefined,
  error: undefined,
  loading: undefined,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    addTextComment: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    addLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { actions: addCommentFormActions } = addCommentFormSlice;
