import { createSlice } from "@reduxjs/toolkit";
import one from "../assets/images/shop/product1.jpg";
import two from "../assets/images/shop/product2.jpg";
import three from "../assets/images/shop/product3.jpg";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [
			{ id: 1, name: "Item 1", price: 59, quantity: 1, img: one },
			{ id: 2, name: "Item 2", price: 59, quantity: 1, img: two },
			{ id: 3, name: "Item 3", price: 59, quantity: 1, img: three },
		],
	},
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (existingItem) {
				existingItem.qty += newItem.qty;
			} else {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					description: newItem.description,
					image: newItem.image,
					price: newItem.price,
					qty: newItem.qty,
				});
			}
		},

		deleteFromCart: (state, action) => {
			const itemId = action.payload;
			state.items = state.items.filter((item) => item.id !== itemId);
		},
		increment: (state, action) => {
			const itemId = action.payload;
			const item = state.items.find((item) => item.id === itemId);
			if (item) {
				item.quantity += 1;
			}
		},
		decrement: (state, action) => {
			const itemId = action.payload;
			const item = state.items.find((item) => item.id === itemId);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
			}
		},
	},
});

export const { addToCart, deleteFromCart, increment, decrement } =
	cartSlice.actions;

export default cartSlice.reducer;
