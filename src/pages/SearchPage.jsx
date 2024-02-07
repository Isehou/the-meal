import "./page-setting.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMealsFind from "../hooks/useMealsFind";
import SearchResult from "../components/SearchResult/SearchResult";
import { fetchSearchByName } from "../store/slices/searchByNameSlice";

function SearchPage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.searchByName);
  const { list, find } = useMealsFind(meals);

  useEffect(() => {
    dispatch(fetchSearchByName());
  }, [dispatch]);

  return (
    <div className="search-wrapper">
      <h2 className="static__title">Find your Meal</h2>
      <form className="search-block section-style">
        <input
          type="search"
          onChange={(e) => find(e.target.value)}
          placeholder="Find your meal"
        />
        <button type="submit">Search</button>
      </form>
      <div className="search__result-list">
        <SearchResult list={list} />
      </div>
    </div>
  );
}

export default SearchPage;
