import "./App.css";
import Navigator from "./components/Navigator";
// import Review from "./components/Review";
import { ChakraProvider } from "@chakra-ui/react";
import CarSearch from "./components/CarSearch";
import Car from "./components/Car";

function App() {  
  return (
    <ChakraProvider>
      <div className="App">

        <Navigator />
        <CarSearch />
        {/* <Car/> */}
    {/* <Review /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
