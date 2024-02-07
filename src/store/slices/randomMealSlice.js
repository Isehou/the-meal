import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RANDOM_MEAL } from "../../services/dataService";

export const fetchRandomMeal = createAsyncThunk(
  "randomMeal/fetchRandomMeal",
  async () => {
    const response = await fetch(RANDOM_MEAL);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  meals: [
    {
      idMeal: "id",
      strMeal: "name",
      strCategory: "category",
      strArea: "nations",
      strMealThumb: "images-links",
    },
  ],
};

const randomMealSlice = createSlice({
  name: "randomMeal",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRandomMeal.fulfilled, (state, action) => {
      state.meals = action.payload.meals;
    });
  },
});

export const randomMealReducer = randomMealSlice.reducer;
