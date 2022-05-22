import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
  },
  reducers: {
    storeResults(state, action) {
      state.results = action.payload;
      console.log(state.results);
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
