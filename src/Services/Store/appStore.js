import { configureStore } from '@reduxjs/toolkit';
import { imageApi } from '../API/imageApi';
import { restaurantApi } from '../API/restaurantApi';
import cartReducer from './cartSlice';

const appStore = configureStore({
	reducer: {
		[restaurantApi.reducerPath]: restaurantApi.reducer,
		[imageApi.reducerPath]: imageApi.reducer,
		cart: cartReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware, imageApi.middleware),
});

export default appStore;
