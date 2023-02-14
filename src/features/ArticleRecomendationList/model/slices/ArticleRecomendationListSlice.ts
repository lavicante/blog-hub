import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRecomendationListSchema } from '../types/ArticleRecomendationListSchema';

const initialState: ArticleRecomendationListSchema = {
    
};

export const ArticleRecomendationListSlice = createSlice({
    name: 'ArticleRecomendationList',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ArticleRecomendationListActions } = ArticleRecomendationListSlice;
export const { reducer: ArticleRecomendationListReducer } = ArticleRecomendationListSlice;