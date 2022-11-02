import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Review from "./Review";
import PastReviewList from "./PastReviewList";
import "./Car.css";
import { SelectedCarContext } from "../Context/SelectedCarContext";


function Car() {
  const [cars, setCars] = useState([]);
  const { make, models, car, year, photo, setPhoto } = useContext(SelectedCarContext);

  //const [id, setId] = useState([]);
  // console.log("car in car.js", car);
  useEffect(() => {
    // axios
    //   .get("http://localhost:3001/cars")
    //   .then((res) => JSON.parse(JSON.stringify(res)))
    //   .then((data) => {
    //     setCars(data.data);
    //   });
    axios.all([
      axios.get("http://localhost:3001/cars"),
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

  return (
    <SelectedCarContext.Provider value={cars}>
      <h1 className="car-details">
        <div className="car-container">
          <div className="photo"> <img alt="" width={1000} height={1000} src={photo} /></div>
          <div className="carDetails">
            <span className="car-text"><strong><font size="+2">Vehicle Information</font></strong></span>
            <span>__________________________</span>
            <h2 className="make">Make: <strong>{car.make}</strong></h2>
            <h2 className="model">Model: <strong>{car.model}</strong></h2>
            <h2 className="class">Class: <strong>{car.class}</strong></h2>
            <h2 className="year">Year: <strong>{car.year}</strong></h2>
            <h2 className="city-mpg">MPG: <strong>{car.city_mpg}</strong></h2>
            <h2 className="cylinders">Cylinders: <strong>{car.cylinders}</strong></h2>
            <h2 className="displacement">Displacement: <strong>{car.displacement}</strong></h2>
            <h2 className="drive">Drive: <strong>{car.drive}</strong></h2>
            <h2 className="fuel-type">Fuel Type: <strong>{car.fuel_type}</strong></h2>
            <h2 className="transmission">Transmission: <strong>{car.transmission}</strong></h2>
          </div>
          <div className="both-reviews">
            <span className="review">
              <Review make={make.toLowerCase()} model={models.toLowerCase()} year={year}/>
            </span>
            <span className="past-review">
              <PastReviewList make={make.toLowerCase()} model={models.toLowerCase()} year={year} />
            </span>
          </div>
        </div>
      </h1>


    </SelectedCarContext.Provider>
  );
}

export default Car;
