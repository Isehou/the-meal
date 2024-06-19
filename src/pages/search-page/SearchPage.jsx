import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMealsFind from "../../hooks/useMealsFind";
import SearchResult from "../../components/SearchResult/SearchResult";
import { fetchSearchByName } from "../../store/slices/searchByNameSlice";

import "../ui/page-setting.css";
import "./ui/search-page.css";

function SearchPage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.searchByName);
  const { list, find } = useMealsFind(meals);

  useEffect(() => {
    dispatch(fetchSearchByName());
  }, [dispatch]);

  return (
    <div className="search">
      <div className="search__wrapper">
        <h2 className="search__static-title static-title">Find your Meal</h2>
        <form className="search__block section-style">
          <input
            type="search__input"
            onChange={(e) => find(e.target.value)}
            placeholder="Search your recipe"
          />
          <button type="search__input-btn">Search</button>
        </form>
        <div className="search__result-list">
          <SearchResult list={list} />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
