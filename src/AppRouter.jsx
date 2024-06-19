import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home-page/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path={`/products/:id`} element={<DetailsPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default AppRouter;
