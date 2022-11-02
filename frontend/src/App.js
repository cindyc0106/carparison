import "./App.css";
import Navigator from "./components/Navigator";
import Review from "./components/Review";
import { ChakraProvider } from "@chakra-ui/react";
import CarSearch from "./components/CarSearch";
import PastReviewList from "./components/PastReviewList";
import Car from "./components/Car";
import Email from "./components/Email";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";

import { CarContextProvider } from "./Context/SelectedCarContext";

function App() {

  //background image rotation
  let c = 45;
  function draw() {
    document.documentElement.style.setProperty('--direction', c++ + 'deg');
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
  return (
    <ChakraProvider>
    <CarContextProvider>
        <Navigator />
        <Routes>
          <Route path="/" element={<CarSearch />} />
          <Route path="/cars/:make/:model/:year" element={<Car />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
          <Route path="/pastreviewlist" element={<PastReviewList id={1} />} />
        </Routes>
        <Email />
      <div className="background"> </div>
      <div className="foreground"> </div>
      <div className="App">

        {/* Routing */}

        
      </div>
    </CarContextProvider>
  </ChakraProvider>
  );
}

export default App;
