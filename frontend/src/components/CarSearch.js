import { useState, useEffect } from "react";
import axios from 'axios';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

function CarSearch() {
  // const [make, setMake] = useState([]);
  // const [model, setModel] = useState([]);
  // const [year, setYear] = useState([]);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cars")
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        console.log(data.data);
        const carObj = data.data;
        setCars(carObj)
        // carObj.map((car) => {
        //   setMake(car.make);
        //   setModel(car.model);
        //   setYear(car.year);
        //   return data.data;
        // });
      });
  }, []);
  
  return (
    <div>
      <FormControl>
        <FormLabel>Make</FormLabel>
        <Select placeholder="Select Make">
          {/* <option>{make}</option> */}
          {cars.map((c, key) => <option key={key}>{c.make}</option>)}
          <option>Nigeria</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Model</FormLabel>
        <Select placeholder="Select Model">
          {/* <option>{model}</option> */}
          {cars.map((c, key) => <option key={key}>{c.model}</option>)}
          <option>Nigeria</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Year</FormLabel>
        <Select placeholder="Select Year">
          {/* <option>{year}</option> */}
          {cars.map((c, key) => <option key={key}>{c.year}</option>)}
          <option>Nigeria</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default CarSearch;