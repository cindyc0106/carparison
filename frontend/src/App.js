import "./App.css";
import Navigator from "./components/Navigator";
// import Review from "./components/Review";
import { ChakraProvider } from "@chakra-ui/react";
import CarSearch from "./components/CarSearch";
import PastReviewList from "./components/PastReviewList";

function App() {  
  return (
    <ChakraProvider>
      <div className="App">

        <Navigator />
        <CarSearch />

    {/* <Review />  <PastReviewList />*/}
        
      </div>
    </ChakraProvider>
  );
}

export default App;
