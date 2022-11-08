import { FaStar } from "react-icons/fa";
import { SelectedCarContext } from "../Context/SelectedCarContext";
import "./RecentReviews.css";
import axios from 'axios';
import React, { useContext, useEffect } from 'react';


export default function RecentReviews() {

  const {recentReview, setRecentReview} = useContext(SelectedCarContext);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/reviews/recent`
      )
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        setRecentReview(data.data);
      });
  }, [setRecentReview]);

 const show = recentReview.map(review => {
  
  const stars = [...Array(review.rating)].map((star, index) => {

    return (

          <FaStar 
            size={25} 
            color={"#FFD700"}
          />

    );
  });

  const faStar = <FaStar size={25} color={"#504F4C"}/>

  return (
    <span className="each-review">
      <div><strong style={{color:"#878384"}}>{review.user_name}{" "}</strong> <small>wrote a review on</small></div>
    <div ><strong>{review.car_make.toUpperCase()}{" "}{review.car_model.toUpperCase()}{" "}{review.car_year}</strong></div>
      {review.rating === 5 && <div className="stars">{stars}</div>}
      {review.rating === 4 && <div className="stars">{stars}{faStar}</div>}
      {review.rating === 3 && <div className="stars">{stars}{faStar}{faStar}</div>}
      {review.rating === 2 && <div className="stars">{stars}{faStar}{faStar}{faStar}</div>}
      {review.rating === 1 && <div className="stars">{stars}{faStar}{faStar}{faStar}{faStar}</div>}
      {review.rating === 0 && <div className="stars">{faStar}{faStar}{faStar}{faStar}{faStar}</div>}
      <div>{review.description}</div>
     
    </span>
 
  )
 })
  return (
    <>
      <div className="title">Recent Activity
     <div className="recent-container">
      {show}
      </div></div>
    </>
  );
}
