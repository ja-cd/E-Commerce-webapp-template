import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    cartContents: [],
    totalQuantity: 0,
    subTotal: 0,
  },
  reducers: {
    // toggles show cart state
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    // Clears the cart, and cart subtotal
    clearCart(state) {
      state.cartContents = [];
      state.totalQuantity = 0;
      state.subTotal = 0;
    },
    // addToCart takes a payload that contains the item to be added to the cart,
    // checks if the item currently exists in the cart, if it does not then add it, it it does
    // then increase the amount of the items and update the item subtotal and cart subtotal
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartContents.find(
        (item) => item.key === newItem.key
      );
      if (!existingItem) {
        state.cartContents.push({
          key: newItem.key,
          productName: newItem.productName,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
        });
        state.subTotal = state.subTotal + newItem.price;
        state.totalQuantity++;
      } else {
        existingItem.amount++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.subTotal = state.subTotal + newItem.price;
        state.totalQuantity++;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
