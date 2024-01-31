import React from "react";

import "../pages-setting.css";
import "./home-page.css";

function HomePage() {
  return (
    <div className="home-page pages">
      <h2 className="static__title">Meal of the Day</h2>
      <section className="products-wrapper section-style">
        <div className="text-block">
          <h1 className="random-generate__title">Kuurdak</h1>
          <div className="type__subtitle">
            <p className="type-name">Beef</p>
            || <p className="nation-name">Kyrgyz</p>
          </div>
        </div>
        <div className="img-block">
          <img className="img" src="" alt="random-img" />
        </div>
      </section>

      <h2 className="static__title">Find your Meal</h2>
      <section className="search-block section-style">
        <input type="search" placeholder="Find your meal" />
        <button>Search</button>
      </section>
    </div>
  );
}

export default HomePage;
