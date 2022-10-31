import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Text, Divider, ListItem, List, Avatar, Flex } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa";
//import Review from "./Review";
// import "./PastReviewList.css";


function PastReviewList() {
  const [pastReviews, setPastReviews] = useState([])

  useEffect(() => {

    axios
    .get("http://localhost:3001/reviews")
    .then((res) => JSON.parse(JSON.stringify(res)))
    .then((data) => {
      setPastReviews(data.data)
    })
  }, [])

  const stars = function (rating) {
    let num = 0;
    let full = [];
    
    while (num < rating) {
      full.push('star');
      num ++;
    }
    
    const star = full.map(() => {
      return (<FaStar color="#f9d02f"/>);
    })
    
    return star;
  }
  const nonStars = function (rating) {
    let empty = [];
    let a = 5 - rating;
    while (a > 0) {
      empty.push('not');
      a --;
    }
    const nonStar = empty.map(() => {
      return (<FaStar color="#c7c7c7"/>)
    })
    return nonStar
  }
  const reviews = pastReviews.map((review, index) => {
    const rating = review.rating;
    
    const star = stars(rating);
    const nonStar = nonStars(rating)
    return (
      <Box maxW='sm' key={index} borderWidth="1px" borderRadius="lg" >
        <Heading fontSize={20} display='flex' flexDirection='row' p={2} justifyContent='space-between' bg='teal.100'>
          <div><Avatar boxSize='1.25em'/> user: {review.user_id}</div>
          <Flex direction='row'>{star}{nonStar}</Flex>
        </Heading>
        <Divider orientation="horizontal" />
        <Text p={4} display='flex' justifyContent='left'>{review.description}</Text>

      </Box>
    );
  })
    return (
      <h1> This is the PastReviewList 
        <Box maxW='sm' maxH='sm' overflow='scroll' borderWidth="1px" >
          <List >
            <ListItem key={pastReviews.id} >{reviews}</ListItem>
          </List>
        </Box>
        
        
      </h1>
    );
  }
  
  export default PastReviewList;