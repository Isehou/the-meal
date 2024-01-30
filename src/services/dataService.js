import axios from "axios";

async function searchByName() {
  try {
    const response = await axios.get(
      "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    console.log("responce data", response.data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

async function randomPhotos() {
  try {
    const response = await axios.get(
      "www.themealdb.com/api/json/v1/1/random.php"
    );
    console.log("responce data", response.data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

export { searchByName, randomPhotos };
