import { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { FaStar } from "react-icons/fa";
import "./AverageReview.css";
// import { Box, Heading, Text, Divider, ListItem, List, Avatar, Flex } from "@chakra-ui/react"
// import PastReviewList from "./PastReviewList";
import { SelectedCarContext } from "../Context/SelectedCarContext";
import { FaStar } from "react-icons/fa"

function AverageReview(props) {
console.log(props)
  const [averageReview, setAverageReview] = useState([])

  // const {
  //   make,
  //   models,
  //   year
  // } = useContext(SelectedCarContext);

  useEffect(() => {
    axios
    .get(`http://localhost:3001/reviews/average/${props.make}/${props.model}/${props.year}`)
    .then((res) => JSON.parse(JSON.stringify(res)))
    .then((data) => {
      setAverageReview(data.data[0].avg)
      console.log("ave review", data.data)
    })
  }, [])


  // const stars = function (rating) {
  //   let num = 0;
  //   let full = [];
    
  //   while (num < rating) {
  //     full.push('star');
  //     num ++;
  //   }
    
  //   const star = full.map(() => {
  //     return (<FaStar color="#FFD700"/>);
  //   })
    
  //   return star;
  // }
  // const nonStars = function (rating) {
  //   let empty = [];
  //   let a = 5 - rating;
  //   while (a > 0) {
  //     empty.push('not');
  //     a --;
  //   }
  //   const nonStar = empty.map(() => {
  //     return (<FaStar color="#504F4C"/>)
  //   })
  //   return nonStar
  // }
  
  // const show = pastReviews.map((review, index) => {
  //   const rating = review.rating;
    
  //   const star = stars(rating);
  //   const nonStar = nonStars(rating);
  //   return (
  //     <Box maxW='lg' key={index} borderWidth="0px" borderRadius="lg" >
  //       <Heading fontSize={20} display='flex' flexDirection='row' p={2} justifyContent='space-between' bg='#a9b4a4a8' borderRadius={"md"}>
  //         <div><Avatar boxSize='1.25em'/> {review.user_name}</div>
  //         <Flex direction='row'>{star}{nonStar}</Flex>
  //       </Heading>
  //       <Divider orientation="horizontal" />
  //       <Text p={4} display='flex' justifyContent='left'>{review.description}</Text>

  //     </Box>
  //   );
  // })
  return (
    <div className="average">
      Average Rating: {averageReview}
    </div>
  );
  }
  
  export default AverageReview;