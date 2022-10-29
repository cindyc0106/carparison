import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
// import "components/RatingStars.css";

function RatingStars() {

  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

//create an array of 5 elements and map over to insert each "star"
  const stars = [...Array(5)].map((star, index) => {
    //giving the radio input a value for each star
    const value = index + 1;
    return (
      <label>
        <input 
          type="radio" 
          value={value} 
          onClick={() => setRating(value)}
        />
          <FaStar 
            size={25} 
            className="pointer" 
            color={ value <= (hover || rating) ? "#f9d02f": "#c7c7c7"}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(null)}
          />
      </label>
    );
  });


  return <div className="stars">{stars}</div>;
}

export default RatingStars;
