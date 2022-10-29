
import './App.css';
import Navigator from './components/Navigator'
import Review from './components/Review'
import Car from './components/Car'
import RatingStars from './components/RatingStars';
import PastReviewList from './components/PastReviewList';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
     <ChakraProvider>
    <div className="App">
      < Navigator />
      < Review />
      < Car />
      < RatingStars />
      < PastReviewList />
    </div>
    </ChakraProvider>
  );
}

export default App;
