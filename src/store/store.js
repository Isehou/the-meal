import { configureStore } from "@reduxjs/toolkit";
import { randomMealReducer } from "./slices/randomMealSlice";
import { detailsMealReducer } from "./slices/detailsMealSlice";
import { searchByNameReducer } from "./slices/searchByNameSlice";

const store = configureStore({
  reducer: {
    randomMeal: randomMealReducer,
    detailsMeal: detailsMealReducer,
    searchByName: searchByNameReducer,
  },
});
export default store;
