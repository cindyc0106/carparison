import { useState, useEffect, useContext } from "react";
import axios from 'axios';
// import Review from "./components/Review";
import PastReviewList from "./PastReviewList";
import "./Car.css";
import { SelectedCarContext } from "../Context/SelectedCarContext";
// import { Container } from "@chakra-ui/react";

function Car() {
  const [cars, setCars] = useState([]);
  const { make, models } = useContext(SelectedCarContext);
  //const [id, setId] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cars")
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        setCars(data.data);
      });

  }, []);

  const getID = cars.map((car) => {
    if (make == car.make && models == car.model) {
      //setId(car.id);
      return car.id;
    }
  })
  const idGet = function (array) {
    for (let arr of array) {
      if (arr) {
        //setId(arr);
        return arr;
      }
    }
  }
  const id = idGet(getID);
  const carData = cars.map((car, index) => {
    if (make == car.make && models == car.model) {
      // setId(car.id);
      return (
        <>
          <div className="car-container">
            <div className="photo"> <img alt="" width={200} height={200} src={car.photo_url} /></div>
            <div className="carDetails" key={index}>
              <span className="car-text"><strong><font size="+2">Vehicle Information</font></strong></span>
              <span>__________________________</span>
              <h2 className="make">Make: <strong>{car.make}</strong></h2>
              <h2 className="model">Model: <strong>{car.model}</strong></h2>
              <h2 className="class">Class: <strong>{car.class}</strong></h2>
              <h2 className="year">Year: <strong>{car.year}</strong></h2>
              <h2 className="id">ID: <strong>{car.id}</strong></h2>
            </div>
            <hr />
          </div>

        </>
      );
    }
  });

  // console.log('id', idGet(getID))
  //console.log('id', car.id)
  // console.log('cars', cars);
  // console.log('cardata', carData);
  // console.log('make', make);
  // console.log('models', models);
  // const getCar = carData[0];
  // console.log('carmake', getCar)

  // axios.get("/api/cars"),
  // axios.get("/api/reviews")


  // return (
  //   <div className="car">
  //     <SelectedCarContext.Provider value={cars}>
  //       <h1> This is the Car
  //         <div className="car-detail">

  //           {/* <h2> {make} </h2>
  //           <h2> {models} </h2>
  //           <h2> 2022 </h2> */}
  //           <h2>{carData}</h2>

  //         </div>
  //       </h1>
  //     </SelectedCarContext.Provider>
  //   </div>



  return (
    <SelectedCarContext.Provider value={cars}>
      <h1 className="car-details">
        {carData}
        <PastReviewList id={id}/>
      </h1>
    </SelectedCarContext.Provider>
  );
}

export default Car;
