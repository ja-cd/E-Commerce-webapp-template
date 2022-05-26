import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    productSearchResults: {},
    showResults: false,
    showIndividual: false,
    prodChanged: false,
  },
  reducers: {
    // storeResults checks if the api returned results or an empty string. If empty, set condition
    // variable to false and exit, if payload contains data then set condition to true.
    storeResults(state, action) {
      if (action.payload === "") {
        state.showResults = false;
        return;
      }
      state.results = action.payload;
      state.showResults = true;
    },
    productResult(state, action) {
      state.productSearchResults = action.payload;
      state.showIndividual = true;
      state.prodChanged = true;
    },
    resultsOn(state) {
      state.showResults = true;
    },
    toggleResults(state){
      state.showResults = false;
    }
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
