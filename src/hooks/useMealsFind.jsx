import React, { useEffect, useState } from "react";

function useMealsFind(meals) {
  const [list, setList] = useState(meals);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    setList(
      meals.filter(
        (e) => typeof e.title === "string" && e.title.includes(filter)
      )
    );
  }, [meals, filter]);

  function find(str) {
    setFilter(str);
  }
  return { list, find };
}

export default useMealsFind;
