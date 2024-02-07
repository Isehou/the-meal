import { useMemo } from "react";

export function useIngredients(meals) {
  const ingredients = useMemo(() => {
    const result = {};
    for (const product of meals) {
      result[product.idMeal] = Object.keys(product)
        .filter((key) => key.includes("strIngredient") && Boolean(product[key]))
        .map((key) => product[key]);
    }
    return result;
  }, [meals]);
  // console.log("strIngredient", ingredients);
  return ingredients;
}
