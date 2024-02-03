import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SEARCH_MEAL } from "../../services/dataService";

export const fetchSearchByName = createAsyncThunk(
  "searchByName/fetchSearchByName",
  async () => {
    const response = await fetch(SEARCH_MEAL);
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
      strInstructions: "description",
      strMealThumb: "images-links",
      strTags: "tags",
      strYoutube: "youtube-links",
    },
  ],
};

const searchByNameSlice = createSlice({
  name: "searchByName",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSearchByName.fulfilled, (state, action) => {
      state.meals = action.payload.meals;
    });
  },
});

export const searchByNameReducer = searchByNameSlice.reducer;
