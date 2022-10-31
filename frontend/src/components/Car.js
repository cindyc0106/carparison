import { useState, useEffect } from "react";
import axios from 'axios';
// import Review from "./components/Review";
// import PastReviewList from "./components/PastReviewList";
import "./Car.css";


export default function Car() {
  const [cars, setCars] = useState([])
  
  useEffect(() => {
    
    axios
    .get("http://localhost:3001/cars")
    .then((res) => JSON.parse(JSON.stringify(res)))
    .then((data) => {
      setCars(data.data)
    })

  },[])

  const carData = cars.map((car, index) => {
    return (
      <>
      <div className="car-container">
      <div className="photo"> <img alt="" width={200} height={200} src={car.photo_url}/></div>
      <div className="carDetails" key={index}>
      <span className="car-text"><strong><font size="+2">Vehicle Information</font></strong></span>
      <span>__________________________</span>
        <h2 className="make">Make: <strong>{car.make}</strong></h2>
        <h2 className="model">Model: <strong>{car.model}</strong></h2>
        <h2 className="class">Class: <strong>{car.class}</strong></h2>
        <h2 className="year">Year: <strong>{car.year}</strong></h2>
        </div>
        <hr />
      </div>

        </>
    );
  })
    // axios.get("/api/cars"),
    // axios.get("/api/reviews")

  return (
    <h1 className="car-details">  
    <ul >
      <li key={cars.id}>{carData}</li>
      </ul>


    
    </h1>
  );
}


