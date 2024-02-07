import "./page-setting.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailsMeal } from "../store/slices/detailsMealSlice";
import { useParams } from "react-router-dom";
import { useIngredients } from "../hooks/useIngredients";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ingredients = useIngredients(meals);

  const { meals } = useSelector((state) => state.randomMeal);

  useEffect(() => {
    dispatch(fetchDetailsMeal());
  }, [id, dispatch]);

  useEffect(() => {}, [meals]);

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
              <ul className="ingredients">
                {ingredients[elem.idMeal].map((ingredient, index) => (
                  <li key={ingredient + index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="meal-img-block">
            <img className="img" src={elem.strMealThumb} alt="" />
          </div>
          <div className="instruction">
            <h2 className="static__title">Instruction</h2>
            <div className="meal-description">{elem.strInstructions}</div>
            <a className="meal-youtube" target="_blank" href={elem.strYoutube}>
              Watch on YouTube
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default DetailsPage;
