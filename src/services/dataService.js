import axios from "axios";

const RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";
const SEARCH_MEAL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const DETAILS_MEAL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

async function searchByName() {
  try {
    const response = await axios.get(SEARCH_MEAL);
    console.log("responce data", response.data);
  } catch (error) {
    console.log("Error :", error);
  }
}

async function randomPhotos() {
  try {
    const response = await axios.get(RANDOM_MEAL);
    console.log("responce data", response.data);
  } catch (error) {
    console.log("Error :", error);
  }
}

async function detailsMeal() {
  try {
    const response = await axios.get(DETAILS_MEAL);
    console.log("responce data", response.data);
  } catch (error) {
    console.log("Error :", error);
  }
}

export { searchByName, randomPhotos, detailsMeal };
