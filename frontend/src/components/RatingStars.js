import React from "react";
import { FaStar } from "react-icons/fa";
// import "components/RatingStars.css";

function RatingStars() {
  const stars = [...Array(5)].map((star, index) => {
    const value = index + 1;
    return (
      <label>
        <input type="radio" value={value}/>
        <FaStar size={25} className="pointer" />
      </label>
    );
  });

  return <div className="stars">{stars}</div>;
}

export default RatingStars;
