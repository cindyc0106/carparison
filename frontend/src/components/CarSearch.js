import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as ReactDOM from "react-dom";
import axios from "axios";
import Car from "./Car";
import { FormControl, FormLabel, Select, Button } from "@chakra-ui/react";
import "./CarSearch.css";
import { BiSearch } from "react-icons/bi";

import { SelectedCarContext } from "../Context/SelectedCarContext";

function CarSearch() {
  // const [make, setMake] = useState('');
  // const [models, setModels] = useState([]);
  // const [year, setYear] = useState([]);
  const {
    make,
    models,
    setMake,
    setModels
  } = useContext(SelectedCarContext)

  const [cars, setCars] = useState([]);
  // const [carForm, setCarForm] = useState(true);

  const navigate = useNavigate()

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
  const filteredMake = function(arr) {
    return arr.filter((ele, index) => arr.indexOf(ele) === index);
  };
  const flmake = filteredMake(carMake);
  const filteredCarMakes = flmake.map((cars, key) => <option key={key}>{cars}</option>);

  // CAR MODEL
  const filteredCarModels = function(make) {
    const modelsArr = cars.filter(car => car.make === make); // array of objects with current make state
    const carModels = modelsArr.map((car) => car.model); // array of car modelss with that specific make
    return carModels;
  };

  // CAR YEAR
  const carYear = cars.map((car) => car.year);
  const filteredYear = filteredMake(carYear);
  const yearFiltered = filteredYear.map((cars, key) => <option key={key} className="option">{cars}</option>);

  //rendering Car component when submit button is clicked
  // const clickHandler = function() {
  //   setCarForm(false);
  //   ReactDOM.render(<Car />, document.querySelector("#car-details"));
  // };

  if (make) {
    filteredCarModels();
  }
  return (
    <>
      <SelectedCarContext.Provider value={cars}>
        {/* <div id="car-form" style={{ display: carForm ? "flex" : "none" }}> */}
        <div id="car-form" >
          <FormControl>
            <FormLabel>Make</FormLabel>
            <Select
              placeholder="Select Make"
              onChange={(e) => {
                setMake(e.target.value);
              }}>
              {filteredCarMakes}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Model</FormLabel>
            <Select
              placeholder="Select Model"
              onChange={(e) => {
                setModels(e.target.value);
              }}>
              {filteredCarModels(make).map((model, key) => <option key={key}>{model}</option>)}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Year</FormLabel>
            <Select placeholder="Select Year">{yearFiltered}</Select>
          </FormControl>
          <br />
        </div>
        {/* <div className="button-div" style={{ display: carForm ? "flex" : "none" }}> */}
        <div className="button-div">
          <Button
            colorScheme="teal"
            variant="outline"
            size="xs"
            onClick={() => {
              navigate(`/car/${make}/${models}`);
            }}
          ><BiSearch />  Search

          </Button>
        </div>
        <div id="car-details"></div>
      </SelectedCarContext.Provider>
    </>
  );
}

export default CarSearch;
