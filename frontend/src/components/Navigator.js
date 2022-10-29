import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  Button
} from '@chakra-ui/react';

import { useState } from 'react';
import './Navigator.css';

const data = [
  {
    "city_mpg": 23,
    "class": "compact car",
    "combination_mpg": 24,
    "cylinders": 4,
    "displacement": 1.6,
    "drive": "fwd",
    "fuel_type": "gas",
    "highway_mpg": 26,
    "make": "toyota",
    "model": "corolla",
    "transmission": "a",
    "year": 1993
  },
  {
    "city_mpg": 18,
    "class": "midsize car",
    "combination_mpg": 21,
    "cylinders": 4,
    "displacement": 2.2,
    "drive": "fwd",
    "fuel_type": "gas",
    "highway_mpg": 26,
    "make": "toyota",
    "model": "camry",
    "transmission": "a",
    "year": 1993
  },
  {
    "city_mpg": 18,
    "class": "midsize car",
    "combination_mpg": 21,
    "cylinders": 4,
    "displacement": 2.2,
    "drive": "fwd",
    "fuel_type": "gas",
    "highway_mpg": 26,
    "make": "lamborghini",
    "model": "aventador",
    "transmission": "a",
    "year": 2022
  }
];

function Navigator() {
  const [query, setQuery] = useState([]);

  const handleSearch = (e) => {
    const searchCar = e.target.value;
    const newCar = data.filter((value) => {
      return (value.make.toLowerCase().includes(searchCar.toLowerCase())) || (value.model.toLowerCase().includes(searchCar.toLowerCase()) || (value.year.toString().includes(searchCar)));
    });
    if (searchCar === "") {
      setQuery([]);
    } else {
      setQuery(newCar);
    }
  };

  return (
    <nav>
      <div className='nav'>
        <h1> LOGO </h1>
        <form className='searchBar'>

          <Input type='text' placeholder='Search for your car...' onChange={handleSearch} />
          {query.length != 0 &&
            <div className='carSearch'>
              {query.map((value, key) => {
                return <div className='carResults' key={key}>
                  {value.make} {value.model} {value.year}
                </div>;
              })}
            </div>
          }
        </form>

        <div className='searchButton'>
          <Button colorScheme='teal' variant='outline'>Submit</Button>
          {/* <Button isLoading
            loadingText='Loading'
            colorScheme='teal'
            variant='outline'
            spinnerPlacement='end'
          >
            Submit</Button> */}
        </div>



        <Breadcrumb separator='-'>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

      </div>
    </nav>

  );
}

export default Navigator;
