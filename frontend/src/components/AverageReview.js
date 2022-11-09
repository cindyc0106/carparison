import { useState, useEffect } from "react";
import axios from "axios";
import "./AverageReview.css";
import { FaStar } from "react-icons/fa";

function AverageReview(props) {

  const [averageReview, setAverageReview] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/reviews/average/${props.make}/${props.model}/${props.year}`
      )
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        setAverageReview(data.data[0].avg);
      });
  }, [props.make, props.model, props.year]);

  const stars = [...Array(5)].map((star, index) => {

    const value = index + 1;
    return (

          <FaStar 
            key={index}
            size={25} 
            color={ value <= averageReview ? "#FFD700": "#504F4C"}
          />

    );
  });
 
   return <>
   <div className="average">
    {averageReview > 0 ? <><strong>Average Rating:</strong>{stars}</> : ""}
  </div>
  </>
}

export default AverageReview;
