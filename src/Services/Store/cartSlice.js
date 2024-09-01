import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		addItemToCart: (state, action) => {
			const item = state.items.find((each) => each.item.id === action.payload.id);
			if (item) {
				item.quantity++;
			} else {
				// Mutating the state over here
				state.items.push({ quantity: 1, item: action.payload });
			}

			console.log(current(state));
		},
		removeItemFromCart: (state, action) => {
			const item = state.items.find((each) => each.item.id === action.payload.id);
			if (item) {
				if (item.quantity > 1) {
					item.quantity--;
				} else {
					const itemIndex = state.items.findIndex((each) => each.item.id === action.payload.id);
					state.items.splice(itemIndex, 1);
				}
			}
		},
		clearSpecificCartItem: (state, action) => {
			const itemIndex = state.items.findIndex((each) => each.item.id === action.payload.id);
			if (itemIndex !== -1) state.items.splice(itemIndex, 1);
		},
		clearCart: () => {
			// RTK - You HAVE to either mutate the state or return a new state
			return [{ items: [] }];
		},
	},
});

export const { addItemToCart, removeItemFromCart, clearSpecificCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
