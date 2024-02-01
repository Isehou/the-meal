import axios from "axios";

export const SEARCH_MEAL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";
export const RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";
export const DETAILS_MEAL =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// async function getSearchByName() {
//   try {
//     const response = await axios.get(SEARCH_MEAL);
//     console.log("response data", response.data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// }

// async function getRandomMeal() {
//   try {
//     const response = await axios.get(RANDOM_MEAL);
//     console.log("response data", response.data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// }

// async function getDetailsMeal() {
//   try {
//     const response = await axios.get(DETAILS_MEAL);
//     console.log("response data", response.data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// }

// export { getSearchByName, getRandomMeal, getDetailsMeal };
