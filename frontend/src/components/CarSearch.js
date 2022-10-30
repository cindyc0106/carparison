import { useState, useEffect } from "react";
import axios from 'axios';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const data = [
  {
    id: 1,
    city_mpg: 29,
    class: "midsize car",
    combination_mpg: 32,
    cylinders: 4,
    displacement: 2,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 37,
    make: "toyota",
    model: "corolla",
    transmission: "a",
    year: 2015,
    photo_url: "https://www.carimagery.com/img/v2/5824.jpg"
  },
  {
    id: 2,
    city_mpg: 25,
    class: "midsize car",
    combination_mpg: 28,
    cylinders: 4,
    displacement: 3,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 34,
    make: "toyota",
    model: "camry",
    transmission: "a",
    year: 2015,
    photo_url: "https://www.carimagery.com/img/v2/12465.jpg"
  }
];

function CarSearch() {
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  const [year, setYear] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cars")
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        console.log(data.data);
        const carObj = data.data;
        carObj.map((car) => {
          setMake(car.make);
          setModel(car.model);
          setYear(car.year);
          return data.data;
        });
      });
  }, [model]);
  
  return (
    <div>
      <FormControl>
        <FormLabel>Make</FormLabel>
        <Select placeholder="Select Make">
          {/* <option>{make}</option> */}
          {data.map((c) => <option>{c.make}</option>)}
          <option>Nigeria</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Model</FormLabel>
        <Select placeholder="Select Model">
          {/* <option>{model}</option> */}
          {data.map((c) => <option>{c.model}</option>)}
          <option>Nigeria</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Year</FormLabel>
        <Select placeholder="Select Year">
          {/* <option>{year}</option> */}
          {data.map((c) => <option>{c.year}</option>)}
          <option>Nigeria</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default CarSearch;