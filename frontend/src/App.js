import "./App.css";
import Navigator from "./components/Navigator";
import Review from "./components/Review";
import { ChakraProvider } from "@chakra-ui/react";
import CarSearch from "./components/CarSearch";
import PastReviewList from "./components/PastReviewList";
function App() {  

  //background image rotation
let c = 45;
function draw(){
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
  return (
    <ChakraProvider>
   <Navigator />  
    <span className="App">
      <CarSearch />
    <Review /> 
    {/* <PastReviewList id={}/> */}
        
    </span>
      <span className="background"></span>
      <span className="foreground"></span>
     
    </ChakraProvider>
  );
}

export default App;
