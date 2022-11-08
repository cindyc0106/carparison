import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Text, Divider, ListItem, List, Avatar, Flex } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa";
//import Review from "./Review";
import "./PastReviewList.css";


function PastReviewList(props) {
  const [pastReviews, setPastReviews] = useState([])

  useEffect(() => {
    axios
    .get(`http://localhost:3001/reviews/${props.make}/${props.model}/${props.year}`)
    .then((res) => JSON.parse(JSON.stringify(res)))
    .then((data) => {
      setPastReviews(data.data)
    })
  }, [props.make, props.model, props.year, props.reset])

  const stars = function (rating) {
    let num = 0;
    let full = [];
    
    while (num < rating) {
      full.push('star');
      num ++;
    }
    
    const star = full.map(() => {
      return (<FaStar color="#FFD700"/>);
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
      return (<FaStar color="#504F4C"/>)
    })
    return nonStar
  }
  
  const show = pastReviews.map((review, index) => {
    const rating = review.rating;
    
    const star = stars(rating);
    const nonStar = nonStars(rating);
    return (
      <Box maxW='lg' key={index} borderWidth="0px" borderRadius="lg" >
        <Heading fontSize={20} display='flex' flexDirection='row' p={2} justifyContent='space-between' bg='#a9b4a4a8' borderRadius={"md"}>
          <div><Avatar boxSize='1.25em'/> {review.user_name}</div>
          <Flex direction='row'>{star}{nonStar}</Flex>
        </Heading>
        <Divider orientation="horizontal" />
        <Text p={4} display='flex' justifyContent='left'>{review.description}</Text>

      </Box>
    );
  })
  return (
    <div className="old-review">

    <h1> 
      <Box maxW='lg' maxH='lg' overflow='auto' borderWidth="0px" >
        <List >
          <ListItem key={show.index} >{show}</ListItem>
        </List>
      </Box>
      
    </h1>
    </div>
  );
  }
  
  export default PastReviewList;