import React from "react";
import { FaStar } from "react-icons/fa";
// import "components/RatingStars.css";

function RatingStars() {
  const stars = [...Array(5)].map((star) => {
    return (
      <label>
        <input type="radio"/>
        <FaStar size={25} />
      </label>
    );
  });

  return <div className="stars">{stars}</div>;
}

export default RatingStars;
