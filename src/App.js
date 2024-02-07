import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path={`/products/:id`} element={<DetailsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
