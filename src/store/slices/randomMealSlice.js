import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RANDOM_MEAL, getRandomMeal } from "../../services/dataService";

export const fetchRandomMeal = createAsyncThunk(
  "randomMeal/fetchRandomMeal",
  async () => {
    // const response = await getRandomMeal();
    const response = await fetch(RANDOM_MEAL);
    const data = await response.json();
    console.log(data);
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

const randomMealSlice = createSlice({
  name: "randomMeal",
  initialState,
  reducers: {
    fetchRandomMeal(state, action) {
      state.meals = action.payload;
    },
  },
});

export const randomMealReducer = randomMealSlice.reducer;
