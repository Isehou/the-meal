import React from "react";
import trooper from "../../assets/404trooper.jpg";
import "./not-found-page.css";

function NotFoundPage() {
  return (
    <div className="nfp pages">
      <div className="nfp-container">
        <img className="img" src={trooper} alt="#" />
      </div>
    </div>
  );
}

export default NotFoundPage;
