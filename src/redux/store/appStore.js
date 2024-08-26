import { configureStore } from '@reduxjs/toolkit';
import { imageApi } from '../services/imageApi';
import { restaurantApi } from '../services/restaurantApi';
import abcd from './cartSlice';

const appStore = configureStore({
	reducer: {
		[restaurantApi.reducerPath]: restaurantApi.reducer,
		[imageApi.reducerPath]: imageApi.reducer,
		cart: abcd,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware, imageApi.middleware),
});

export default appStore;
