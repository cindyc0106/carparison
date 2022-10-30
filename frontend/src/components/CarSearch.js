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
        const carObj = data.data;
        setCars(carObj)
      });
  }, []);
  
  return (
    <div>
      <FormControl>
        <FormLabel>Make</FormLabel>
        <Select placeholder="Select Make">
          {cars.map((c, key) => <option key={key}>{c.make}</option>)}
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
    </div>
  );
}

export default CarSearch;