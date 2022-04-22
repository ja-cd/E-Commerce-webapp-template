import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    // toggles show cart state
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
