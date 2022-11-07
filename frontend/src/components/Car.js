import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Review from "./Review";
import PastReviewList from "./PastReviewList";
import "./Car.css";
import { SelectedCarContext } from "../Context/SelectedCarContext";
import { FaPen } from "react-icons/fa";



function Car() {
  const [cars, setCars] = useState([]);
  const { make, models, car, year, photo, setPhoto } = useContext(SelectedCarContext);
  const [review, setReview] = useState("");
  const reset = function(value) {
    setReview(value);
  };

  useEffect(() => {

    axios.all([
      axios.get("http://localhost:3001/cars_lists"),
      axios.get(
        `https://cdn.imagin.studio/getImage?&customer=cacindychencompany&make=${make}&modelFamily=${models}&modelYear=${year}`
      ),
    ])
      .then(
        axios.spread((...responses) => {
          setCars(responses[0].data);
          setPhoto(responses[1].config.url);
        })
      );

  }, [make, models, setPhoto, year]);

  //getting transmission to render full word automatic instead of "a"
  const transmission = function(car) {
    if (car.transmission === "a" || car.transmission === "A") {
      return "Automatic";
    }
    return "Manual";
  };

  return (
    <SelectedCarContext.Provider value={cars}>
      <h1 className="car-details">
        <div className="car-container">
          <div className="photo"> <img alt="" src={photo} /></div>
          {!car && (
            <div className="carDetails">
              <span className="car-text"><strong><font size="+3">Vehicle Information</font></strong></span>
              <span>___________________________________</span>
              <br></br>
              <h2> <strong>No car data for vehicle. </strong></h2>
              <h2> <strong>Please select another vehicle! </strong></h2>
            </div>
          )}
          {car && (
            <div className="carDetails">
              <span className="car-text"><strong><font size="+3">Vehicle Information</font></strong></span>
              <span>___________________________________</span>
              <br></br>
              <h2 className="make">Make: <strong style={{ textTransform: "uppercase" }}>{car.make}</strong></h2>
              <h2 className="model">Model: <strong style={{ textTransform: "uppercase" }}>{car.model}</strong></h2>
              <h2 className="class">Class: <strong style={{ textTransform: "uppercase" }}>{car.class}</strong></h2>
              <h2 className="year">Year: <strong>{car.year}</strong></h2>
              <h2 className="city-mpg">MPG: <strong>{car.city_mpg}</strong></h2>
              <h2 className="cylinders">Cylinders: <strong>{car.cylinders}</strong></h2>
              <h2 className="displacement">Displacement: <strong>{car.displacement}</strong></h2>
              <h2 className="drive">Drive: <strong style={{ textTransform: "uppercase" }}>{car.drive}</strong></h2>
              <h2 className="fuel-type">Fuel Type: <strong style={{ textTransform: "uppercase" }}>{car.fuel_type}</strong></h2>
              <h2 className="transmission">Transmission: <strong style={{ textTransform: "uppercase" }}>{transmission(car)}</strong></h2>
            </div>
          )}

        </div>
        <div className="both-reviews">
          <div ><span className="review-title"><FaPen />  Write a review</span>
            <span className="review">
              <Review make={make.toLowerCase()} model={models.toLowerCase()} year={year} reset={reset} />
            </span>
          </div>
          <span className="past-review">
            <span className="past-review-title" style={{ fontWeight: "bold", fontSize: "larger" }}>Consumer reviews</span>
            <font size="3">Read what other owners think about the {car.year} {car.make} {car.model}.</font>
            <PastReviewList make={make.toLowerCase()} model={models.toLowerCase()} year={year} reset={review} />
          </span>
        </div>
      </h1>


    </SelectedCarContext.Provider>
  );
}

export default Car;
