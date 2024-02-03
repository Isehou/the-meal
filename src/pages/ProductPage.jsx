import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailsMeal } from "../store/slices/detailsMealSlice";
import { fetchSearchByName } from "../store/slices/searchByNameSlice";

import "./page-setting.css";

function ProductPage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.randomMeal);

  useEffect(() => {
    dispatch(fetchDetailsMeal());
  }, [dispatch]);

  return (
    <div className="product-page pages">
      {meals.map((elem) => (
        <section className="products-wrapper" key={elem.idMeal}>
          <div className="title-block">
            <h1 className="random-generate__title">{elem.strMeal}</h1>
            <div className="subtitle">
              <span className="subtitle-category">
                <pre>
                  {elem.strCategory} || {elem.strArea}
                </pre>
              </span>
              <div className="ingredients">{}</div>
            </div>
          </div>
          <div className="meal-img-block">
            <img className="img" src={elem.strMealThumb} alt="" />
          </div>
          <div className="instruction">
            <h2 className="static__title">Instruction</h2>
            <ul className="meal-description">{elem.strInstructions}</ul>
            <a className="meal-youtube" target="_blank" href={elem.strYoutube}>
              Watch on YouTube
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductPage;
