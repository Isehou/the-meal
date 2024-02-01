import { configureStore } from "@reduxjs/toolkit";
import { randomMealReducer } from "./slices/randomMealSlice";

const store = configureStore({
  reducer: {
    randomMeal: randomMealReducer,
  },
});
export default store;
