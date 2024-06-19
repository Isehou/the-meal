import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMeal } from "../../store/slices/randomMealSlice";
import SearchPage from "../search-page/SearchPage";

import "../ui/page-setting.css";
import "./ui/home-page.css";

function HomePage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.randomMeal);

  useEffect(() => {
    dispatch(fetchRandomMeal());
  }, [dispatch]);

  return (
    <div className="home-page pages">
      <h2 className="home-page__static-title">Meal of the Day</h2>
      {meals.map((elem) => (
        <div key={elem.idMeal}>
          <section className="home-page__wrapper">
            <div className="home-page__title-block">
              <Link className="home-page__link" to="/products/{elem.idMeal}">
                <h1 className="home-page__random-generate-title">
                  {elem.strMeal}
                </h1>
              </Link>
              <div className="home-page__subtitle">
                <span className="home-page__subtitle-category">
                  <pre>
                    {elem.strCategory} || {elem.strArea}
                  </pre>
                </span>
                <div className="home-page__ingredients"></div>
              </div>
            </div>
            <div className="home-page__meal-img-block">
              <img className="home-page__img" src={elem.strMealThumb} alt="" />
            </div>
          </section>
          <SearchPage />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
