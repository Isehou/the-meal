import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMeal } from "../../store/slices/randomMealSlice";

import "../pages-setting.css";
import "./home-page.css";

function HomePage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.randomMeal);
  console.log(meals);

  useEffect(() => {
    dispatch(fetchRandomMeal());
  }, [dispatch]);

  return (
    <div className="home-page pages">
      <h2 className="static__title">Meal of the Day</h2>
      {meals.map((elem) => (
        <section className="products-wrapper section-style" key={elem.idMeal}>
          <div className="text-block">
            <h1 className="random-generate__title">{elem.strMeal}</h1>
            <div className="type__subtitle">
              <span className="type__subtitle-category">
                {elem.strCategory}
              </span>
              ||
              <span className="type__subtitle-category">{elem.strArea}</span>
            </div>
          </div>
          <div className="img-block">
            <img className="img" src={elem.strMealThumb} alt="#" />
          </div>
        </section>
      ))}

      <h2 className="static__title">Find your Meal</h2>
      <section className="search-block section-style">
        <input type="search" placeholder="Find your meal" />
        <button>Search</button>
      </section>
    </div>
  );
}

export default HomePage;
