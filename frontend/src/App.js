import "./App.css";
import { useState, useEffect } from "react";
import Navigator from "./components/Navigator";
import axios from 'axios';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import CarSearch from "./components/CarSearch";

function App() {

  return (
    <ChakraProvider>
      <div className="App">

        <Navigator />
        <CarSearch />

      </div>
    </ChakraProvider>
  );
}

export default App;
