import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMeal } from "../store/slices/randomMealSlice";

import "./page-setting.css";

function HomePage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.randomMeal);
  // console.log(meals);

  useEffect(() => {
    dispatch(fetchRandomMeal());
  }, [dispatch]);

  return (
    <div className="home-page pages">
      <h2 className="static__title">Meal of the Day</h2>
      {meals.map((elem) => (
        <section className="products-wrapper" key={elem.idMeal}>
          <div className="title-block">
            <Link className="link" to="/products:id">
              <h1 className="random-generate__title">{elem.strMeal}</h1>
            </Link>
            <div className="subtitle">
              <span className="subtitle-category">
                <pre>
                  {elem.strCategory} || {elem.strArea}
                </pre>
              </span>
              <div className="ingredients"></div>
            </div>
          </div>
          <div className="meal-img-block">
            <img className="img" src={elem.strMealThumb} alt="" />
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
