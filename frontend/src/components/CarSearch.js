import { useState, useEffect } from "react";
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

function CarSearch() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState([]);
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
  const filteredCarMake = flmake.map((cars, key) => <option key={key}>{cars}</option>);

  // CAR MODEL
  
  //  console.log(flmodel)
  // console.log('carModel', carModel);
  // function isAcura() {
  //   return;
  // }
  const filteredCarModel = function(arr) {
    // console.log('flmake', flmake)
    const array = [];
    const modelArr = cars.filter(car => car.make === make) // array of objects with current make state
    console.log('modelArr', modelArr)
    const carModel = modelArr.map((car) => car.model); // array of car models with that specific make

    console.log('carModel', carModel)

    // if (cars.filter(car => car.make === 'Acura')) {
    //   // array.push(car);
    //   // console.log('cars', cars);
    // }
  };

  if (make) {
    filteredCarModel();
  }
  console.log('make', make);
  console.log('model', model)
  // console.log('setModel', setModel)
  return (
    <div>
      <FormControl>
        <FormLabel>Make</FormLabel>
        <Select
          placeholder="Select Make"
          onChange={(e) => {
            setMake(e.target.value);
          }}>
          {filteredCarMake}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Model</FormLabel>
        <Select
          placeholder="Select Model"
          onChange={(e) => {
            setModel(e.target.value);
          }}>
          {cars.map((c, key) => <option key={key}>{c.model}</option>)}
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