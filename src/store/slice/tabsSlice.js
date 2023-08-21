import { createSlice } from "@reduxjs/toolkit";

const initialState = { tabs: "general", searchResult: "" };

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    tabsHandler: (state, action) => {
      state.tabs = action.payload;
    },
    searchHandler: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { tabsHandler, searchHandler } = tabsSlice.actions;

export default tabsSlice.reducer;
