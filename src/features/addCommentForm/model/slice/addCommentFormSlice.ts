import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormType } from '../types/addCommentForm';

const initialState: AddCommentFormType = {
  text: undefined,
  error: undefined,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    addTextComment: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { actions: addCommentFormActions } = addCommentFormSlice;
