import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONSTANTS from '../../utils/constant';

export const restaurantApi = createApi({
	reducerPath: 'restaurantApi',

	baseQuery: fetchBaseQuery({
		baseUrl: CONSTANTS.SWIGGY_BASE_URL,
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
			query: () => 'restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
			transformResponse: (res) => [
				...res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
				...res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
			],
		}),
		getAllMenuByRestaurant: builder.query({
			query: (resId) => `menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}`,
			transformResponse: (res) => res?.data?.cards,
		}),
		getSearchedRestaurants: builder.query({
			query: (searchText) => `restaurants/search/suggest?lat=12.96340&lng=77.58550&str=${searchText}`,
			transformResponse: (res) => res?.data?.suggestions,
		}),
		getLandingCuisinesForSearch: builder.query({
			query: () => 'landing/PRE_SEARCH?lat=12.96340&lng=77.58550',
			transformResponse: (res) => res?.data?.cards,
		}),
		getSelectedRestaurantResult: builder.query({
			query: ({ queriedStr, id }) =>
				id
					? `restaurants/search/v3?lat=12.96340&lng=77.58550&str=${queriedStr}&submitAction=ENTER&selectedPLTab=${id}`
					: `restaurants/search/v3?lat=12.96340&lng=77.58550&str=${queriedStr}&submitAction=ENTER`,
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
