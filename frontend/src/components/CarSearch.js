import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Car from "./Car";
import { FormControl, FormLabel, Select, Button } from "@chakra-ui/react";
import "./CarSearch.css";
import { BiSearch } from "react-icons/bi";

import { SelectedCarContext } from "../Context/SelectedCarContext";

function CarSearch() {

  const {
    make,
    models,
    setMake,
    setModels,
    year,
    setYear,
    // car,
    setCar
  } = useContext(SelectedCarContext);

  const [cars, setCars] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/cars_lists")
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
  const modelsFiltered = filteredCarModels(make).map((model, key) => <option key={key}>{model}</option>);

  // CAR YEAR
  const yearList = () => {
    const year = [];
    for (let i = 2021; i >= 1990; i--) {
      year.push(i);
    }
    return year;
  };
  const years = yearList();
  const yearFiltered = years.map((year, key) => <option key={key} className="option">{year}</option>);


  const clickHandler = function() {
    navigate(`/cars/${make}/${models}/${year}`);
    axios
      .get(`http://localhost:3001/cars/${make.toLowerCase()}/${models.toLowerCase()}/${year}`)
      .then((res) => {
        setCar(res.data);

      })
      .catch((err) => console.log("error:", err));
  };

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
              {modelsFiltered}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Year</FormLabel>
            <Select placeholder="Select Year" onChange={(e) => {
              setYear(e.target.value);
            }}>{yearFiltered}</Select>
          </FormControl>
          <br />
        </div>
        {/* <div className="button-div" style={{ display: carForm ? "flex" : "none" }}> */}
        <div className="button-div">
          <Button
            className="animated-border-button"
            colorScheme="teal"
            variant="outline"
            size="xs"
            onClick={() => { clickHandler(); }}
          ><BiSearch />  Search

          </Button>
        </div>
        <div id="car-details"></div>
      </SelectedCarContext.Provider>
    </>
  );
}

export default CarSearch;
