import { useState, useEffect } from "react";
import { Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Car from "./Car";
import {
  FormControl,
  FormLabel,
  Select,
  Button
} from "@chakra-ui/react";

function CarSearch() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cars")
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        const carObj = data.data;
        setCars(carObj)
      });
    }, []);
  
    // CAR MAKE
    const carMake = cars.map((car) => car.make) // array of car makes
    const filtered = function(arr) {
     return arr.filter((ele, index) => arr.indexOf(ele) === index) 
    }
    const fl = filtered(carMake)
    const carFiltered = fl.map((cars) => <option>{cars}</option> )
  
    // CAR MODEL

  return (
    <div>
      <FormControl>
        <FormLabel>Make</FormLabel>
        <Select placeholder="Select Make">
          {carFiltered}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Model</FormLabel>
        <Select placeholder="Select Model">
          {cars.map((c, key) => <option key={key}>{c.model}</option>)}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Year</FormLabel>
        <Select placeholder="Select Year">
          {cars.map((c, key) => <option key={key}>{c.year}</option>)}
        </Select>
      </FormControl>
      <Button colorScheme='teal' variant='outline' size='xs'>Submit</Button>
    </div>
  );
}

export default CarSearch;