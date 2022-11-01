import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import "./Car.css";
// import { SelectedCarContext } from "./CarSearch";

function Car() {
  const [cars, setCars] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:3001/cars")
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        setCars(data.data);
      });

  }, []);

  const carData = cars.map((car, index) => {
    return (
      <div key={index}>
        <h2>make: {car.make}</h2>
        <h2>model: {car.model}</h2>
        <h2>class: {car.class}</h2>
        <h2>year: {car.year}</h2>
        <div className="photo">photo: <img alt="" width={200} height={200} src={car.photo_url} /></div>
        <hr />
      </div>
    );
  });
  // axios.get("/api/cars"),
  // axios.get("/api/reviews")

  // console.log('cars', cars)
  return (
    <div className="car">

      <h1> This is the Car
        <div>
          <a key={cars.id}>{carData}</a>
        </div>
      </h1>
    </div> 

    

  );
}



export default Car;