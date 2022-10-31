import "./App.css";
import Navigator from "./components/Navigator";
// import Review from "./components/Review";
import { ChakraProvider } from "@chakra-ui/react";
import CarSearch from "./components/CarSearch";
// import PastReviewList from "./components/PastReviewList";

import About from "./pages/About";
import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";

function App() {

  //background image rotation
  // let c = 45;
  // function draw() {
  //   document.documentElement.style.setProperty('--direction', c++ + 'deg');
  //   requestAnimationFrame(draw);
  // }

  // requestAnimationFrame(draw);
  return (
    <ChakraProvider>
      {/* <div className="background">      </div>
      <div className="foreground"> </div> */}
      <div className="App">
      <Navigator />

        <CarSearch />

        {/* <Review /> <PastReviewList id={}/> */}


        {/* Routing */}

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </div>
    </ChakraProvider>
  );
}

export default App;
