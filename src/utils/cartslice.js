import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;

      state.items.push({ ...item, quantity: 1 });
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;

      state.items = state.items.filter((i) => i.id !== itemId);
    },
    clearItemsFromCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearItemsFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
