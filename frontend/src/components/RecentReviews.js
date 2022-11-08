// import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import "./RecentReviews.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import { Input, Button } from "@chakra-ui/react";

export default function RecentReviews() {
  const [recentReview, setRecentReview] = useState([])
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/reviews/recent`
      )
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        setRecentReview(data.data);
      });
  }, []);
  console.log("recent", recentReview)
 const show = recentReview.map(review => {
  return (
    <span className="each-review">
    <div>{review.car_make}{" "}{review.car_model}{" "}{review.car_year}</div>
      <div>{review.user_name}</div>
      <div>{review.description}</div>
     
    </span>
 
  )
 })
  return (
    <div className="recent-container">{show}</div>
  );
}
