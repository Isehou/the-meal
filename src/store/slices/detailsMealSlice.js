import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DETAILS_MEAL } from "../../services/dataService";

export const fetchDetailMeal = createAsyncThunk(
  "detailMeal/fetchDetailMeal",
  async () => {
    const response = await fetch(DETAILS_MEAL);
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const detailsMealSlice = createSlice({
  name: "detailsMeal",
  initialState,
  reducers: {
    fetchDetailMeal(state, action) {
      state.status = "success";
      state.meals = action.payload;
    },
  },
});

export const detailsMealReducer = detailsMealSlice.reducer;
