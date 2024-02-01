import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SEARCH_MEAL } from "../../services/dataService";

export const fetchSearchByName = createAsyncThunk(
  "searchByName/fetchSearchByName",
  async () => {
    const response = await fetch(SEARCH_MEAL);
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const searchByNameSlice = createSlice({
  name: "searchByName",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    fetchSearchByName(state, action) {
      state.status = "success";
      state.meals = action.payload;
    },
  },
});

export const searchByNameReducer = searchByNameSlice.reducer;
