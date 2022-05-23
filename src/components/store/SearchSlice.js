import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    productSearchResults: {},
    showResults: false,
  },
  reducers: {
    // storeResults checks if the api returned results or an empty string. If empty, set condition 
    // variable to false and exit, if payload contains data then set condition to true.
    storeResults(state, action) {
      console.log(action.payload)
      if (action.payload === "") {
        state.showResults = false;
        return;
      }
      state.results = action.payload;
      state.showResults = true;
    },
    productResult(state, action){
      console.log(state.productSearchResults)
      console.log(action.payload)
      state.productSearchResults = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
