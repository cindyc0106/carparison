import { useState, useEffect } from "react";
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

function CarSearch() {
  const [make, setMake] = useState('');
  const [models, setModels] = useState([]);
  // const [year, setYear] = useState([]);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cars")
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

  // CAR MODELs

  const filteredCarModels = function(make) {
    const modelsArr = cars.filter(car => car.make === make); // array of objects with current make state
    const carModels = modelsArr.map((car) => car.model); // array of car modelss with that specific make
    return carModels;
  };

  if (make) {
    filteredCarModels();
  }
  return (
    <div>
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
        <Select placeholder="Select Year">
          {cars.map((c, key) => <option key={key}>{c.year}</option>)}
        </Select>
      </FormControl>
    </div>
  );
}

export default CarSearch;