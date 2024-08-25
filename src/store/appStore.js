import { configureStore } from '@reduxjs/toolkit';
import abcd from './cartSlice';

const appStore = configureStore({
	reducer: {
		cart: abcd,
	},
});

export default appStore;
