import "./App.css";
import { useState, useEffect } from "react";
import Navigator from "./components/Navigator";
// import Review from "./components/Review"
import axios from 'axios';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

function App() {

  const [make, setMake] = useState([])
  const [model, setModel] = useState([])
  const [year, setYear] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3001/cars")
    .then((res) => JSON.parse(JSON.stringify(res)))
    .then((data) => {
      // console.log(data.data)
      const carObj = data.data
      carObj.map((car) => {
        setMake(car.make)
        setModel(car.model)
        setYear(car.year)
       return data.data
      })
    })
  }, [model])
  
  return (
    <ChakraProvider>
      <div className="App">
        <Navigator />

        <FormControl>
          <FormLabel>Make</FormLabel>
          <Select placeholder="Select Make">
            <option>{make}</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Model</FormLabel>
          <Select placeholder="Select Model">
            <option>{model}</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
        
        <FormControl>
          <FormLabel>Year</FormLabel>
          <Select placeholder="Select Year">
            <option>{year}</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>

    {/* <Review /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
