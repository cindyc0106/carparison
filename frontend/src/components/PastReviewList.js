import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Text, Divider, ListItem, List, Avatar, Flex } from "@chakra-ui/react"
import { getUserById, getReviewsByCarId } from "../helpers/helpers";
import { FaStar } from "react-icons/fa";
//import Review from "./Review";
// import "./PastReviewList.css";


function PastReviewList(props) {
  const [pastReviews, setPastReviews] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {

    axios
    .get("http://localhost:3001/reviews")
    .then((res) => JSON.parse(JSON.stringify(res)))
    .then((data) => {
      setPastReviews(data.data)
    })
  }, [])

  useEffect(() => {
    axios
    .get("http://localhost:3001/users")
    .then((res) => JSON.parse(JSON.stringify(res)))
    .then((data) => {
      setUsers(data.data)
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
  const reviews = getReviewsByCarId(pastReviews, props.id)
  const show = reviews.map((review, index) => {
    const rating = review.rating;
    
    const star = stars(rating);
    const nonStar = nonStars(rating);
    const user = getUserById(users, review.user_id )
    return (
      <Box maxW='lg' key={index} borderWidth="0px" borderRadius="lg" >
        <Heading fontSize={20} display='flex' flexDirection='row' p={2} justifyContent='space-between' bg='#a9b4a4a8'>
          <div><Avatar boxSize='1.25em'/> {user.name}</div>
          <Flex direction='row'>{star}{nonStar}</Flex>
        </Heading>
        <Divider orientation="horizontal" />
        <Text p={4} display='flex' justifyContent='left'>{review.description}</Text>

      </Box>
    );
  })
  return (
    <div className="review">

    <h1> 
      <Box maxW='lg' maxH='lg' overflow='auto' borderWidth="0px" >
        <List >
          <ListItem key={reviews.id} >{show}</ListItem>
        </List>
      </Box>
      
    </h1>
    </div>
  );
  }
  
  export default PastReviewList;