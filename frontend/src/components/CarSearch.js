import React, { useState, useEffect } from "react";
// import { Router, Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom";
import axios from "axios";
import Car from "./Car";
import { FormControl, FormLabel, Select, Button } from "@chakra-ui/react";
import "./CarSearch.css";

function CarSearch() {
  const [cars, setCars] = useState([]);
  const [carForm, setCarForm] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cars")
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        const carObj = data.data;
        setCars(carObj);
      });
  }, []);

  // CAR MAKE
  const carMake = cars.map((car) => car.make); // array of car makes
  const filtered = function (arr) {
    return arr.filter((ele, index) => arr.indexOf(ele) === index);
  };
  const fl = filtered(carMake);
  const carFiltered = fl.map((cars) => <option>{cars}</option>);

  // CAR YEAR
  const carYear = cars.map((car) => car.year);
  const filteredYear = filtered(carYear);
  const yearFiltered = filteredYear.map((cars) => <option>{cars}</option>);

  //rendering Car component when submit button is clicked
  const clickHandler = function () {
    setCarForm(false);
    ReactDOM.render(<Car />, document.querySelector("#car-details"));
  };

  return (
    <div>
      <div id="car-form" style={{ display: carForm ? "flex" : "none" }}>
        <FormControl>
          <FormLabel>Make</FormLabel>
          <Select placeholder="Select Make">{carFiltered}</Select>
        </FormControl>

        <FormControl>
          <FormLabel>Model</FormLabel>
          <Select placeholder="Select Model">
            {cars.map((c, key) => (
              <option key={key}>{c.model}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Year</FormLabel>
          <Select placeholder="Select Year">{yearFiltered}</Select>
        </FormControl>
        <br />
      </div>
      <div>
        <Button
          colorScheme="teal"
          variant="outline"
          size="xs"
          onClick={() => {
            clickHandler();
          }}
          >Search
        </Button>
      </div>
      <div id="car-details"></div>
    </div>
  );
}

export default CarSearch;
