import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONSTANTS from '../../Utils/constant';

export const restaurantApi = createApi({
	reducerPath: 'restaurantApi',

	baseQuery: fetchBaseQuery({
		baseUrl: CONSTANTS.DUMMY_SWIGGY_BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			console.log(getState());
		},
		responseHandler: (res) => {
			console.log(res);
			return res.json();
		},
	}),
	endpoints: (builder) => ({
		getAllRestaurants: builder.query({
			query: () => '/restaurants',
			transformResponse: (res) => [
				...res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
				...res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
			],
		}),
		getAllMenuByRestaurant: builder.query({
			query: (resId) => `/menu/${resId}`,
			transformResponse: (res) => res?.data?.cards,
		}),
		getSearchedRestaurants: builder.query({
			query: (searchText) => `/restaurants/search/${searchText}`,
			transformResponse: (res) => res?.data?.suggestions,
		}),
		getLandingCuisinesForSearch: builder.query({
			query: () => '/landing',
			transformResponse: (res) => res?.data?.cards,
		}),
		getSelectedRestaurantResult: builder.query({
			query: ({ queriedStr, id }) => (id ? `/restaurants/search/${id}?queriedStr=${queriedStr}` : `/restaurants/search?queriedStr=${queriedStr}`),
			transformResponse: (res) => res?.data?.cards,
		}),
	}),
});

export const {
	useGetAllRestaurantsQuery,
	useGetAllMenuByRestaurantQuery,
	useGetSearchedRestaurantsQuery,
	useGetLandingCuisinesForSearchQuery,
	useGetSelectedRestaurantResultQuery,
	useLazyGetSelectedRestaurantResultQuery,
} = restaurantApi;
