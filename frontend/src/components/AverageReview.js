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

  const stars = function (averageReview) {
    let num = 0;
    let full = [];

    while (num < averageReview) {
      full.push("star");
      num++;
    }

    const star = full.map(() => {
      return <FaStar color="#FFD700" />;
    });

    return star;
  };

  const nonStars = function (averageReview) {
    let empty = [];
    let a = Math.round(5 - averageReview);
    while (a > 0) {
      empty.push("not");
      a--;
    }
    const nonStar = empty.map(() => {
      return <FaStar color="#504F4C" />;
    });
    return nonStar;
  };
  const star = stars(averageReview);
  const nonStar = nonStars(averageReview);
 
   return <>
   <div className="average">
    Average Rating: {star}{nonStar}
  </div>
  </>
}

export default AverageReview;
