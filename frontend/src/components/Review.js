import { useState } from "react";
import axios from "axios";
import { FormControl, Textarea, Button, FormLabel, Input, useToast } from "@chakra-ui/react";
import "./Review.css";
// import RatingStars from "./RatingStars";
import { FaStar } from "react-icons/fa";
import "./RatingStars.css";

function Review(props) {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  //create an array of 5 elements and map over to insert each "star"
  const stars = [...Array(5)].map((star, index) => {
    //giving the radio input a value for each star
    const value = index + 1;
    return (
      <label key={index}>
        <input 
          type="radio" 
          value={value} 
          onClick={() => setRating(value)}
        />
          <FaStar 
            size={25} 
            className="pointer" 
            // have the yellow color take effect when hovered, or else is grey
            color={ value <= (hover || rating) ? "#FFD700": "#504F4C"}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(null)}
          />
      </label>
    );
  });


  const enterReview = (event) => {
    setReview(event.target.value);
  };

  const enterName = (event) => {
    setUser(event.target.value)
  }
  const toast = useToast()

  function save(name, review, rating, make, model, year) {
    if (name && review && rating) {
      toast({
      title: 'Review submitted!',
      description: "Your review has been successfully submitted.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })}
    if (!name || !review || !rating) {
      toast({
        title: 'Incomplete required fields!',
        description: "Please input your name, review and rating.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    setUser("")
    setReview("")
    setRating(null)
    axios
    .post("http://localhost:3001/reviews", {
      user: user,
      description: review,
      rating: rating,
      make: props.make,
      model: props.model,
      year: props.year
    })
    .then((res) => {
      setUser(name)
      setReview(review)
      setRating(rating)
    })
    .catch((err) => console.log("error msg:", err.message))
    
    props.reset(name)
  }


  return (
    <h1>
      <form className='form' onSubmit={event => event.preventDefault()}>
        <FormControl isRequired >
          <FormLabel>Name: </FormLabel>
          <Input placeholder="Please enter name" value={user} onChange={enterName}/>
          <FormLabel>Review: </FormLabel>
        <Textarea
          className="input"
          value = {review}
          onChange={enterReview}
          placeholder="Please input review"
        />
        <span className="star-btn">
        <div className="stars">{stars}</div>
        <Button className="submit-btn" colorScheme="teal" variant="outline" onClick={() => {save(user, review, rating, props.make, props.model, props.year)}} >
          Submit
        </Button>
        
        </span>
       
        </FormControl>
      </form>
    </h1>
  );
}

export default Review;
