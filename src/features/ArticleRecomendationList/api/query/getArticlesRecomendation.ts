import { rtkApi } from 'shared/lib/api/rtkApi';

const getArticlesRecommendation = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlesRecommendationList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetArticlesRecommendationListQuery } =
  getArticlesRecommendation;
