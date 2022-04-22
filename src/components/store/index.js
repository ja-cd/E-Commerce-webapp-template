import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import searchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
