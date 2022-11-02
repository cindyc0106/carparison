import { useState } from "react";
import axios from "axios";
import { FormControl, Textarea, Button, FormLabel, Input } from "@chakra-ui/react";
import "./Review.css";
// import RatingStars from "./RatingStars";
import { FaStar } from "react-icons/fa";
import "./RatingStars.css";

function Review() {
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

  function save(name, review, rating) {
    setUser("")
    setReview("")
    setRating(null)
    axios
    .post("http://localhost:3001/reviews", {
      user: user,
      description: review,
      rating: rating
    })
    .then((res) => {
      setUser(name)
      setReview(review)
      setRating(rating)
    })
    .catch((err) => console.log("error msg:", err.message))
    // console.log("user name:", name)
    // console.log("review:", review)
    // console.log("rating:", rating)
  }


  return (
    <h1>
      <form className='form' onSubmit={event => event.preventDefault()}>
        <FormControl isRequired width={400}>
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
        <Button className="submit-btn" colorScheme="teal" variant="outline" onClick={() => {save(user, review, rating)}} >
          Submit
        </Button>
        </span>
        </FormControl>
      </form>
    </h1>
  );
}

export default Review;
