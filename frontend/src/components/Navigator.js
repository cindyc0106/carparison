import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  Button
} from '@chakra-ui/react';

import { useState } from 'react';

data = [
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
    "city_mpg": 23,
    "class": "compact car",
    "combination_mpg": 26,
    "cylinders": 4,
    "displacement": 1.6,
    "drive": "fwd",
    "fuel_type": "gas",
    "highway_mpg": 31,
    "make": "toyota",
    "model": "corolla",
    "transmission": "m",
    "year": 1993
  },
  {
    "city_mpg": 23,
    "class": "compact car",
    "combination_mpg": 25,
    "cylinders": 4,
    "displacement": 1.8,
    "drive": "fwd",
    "fuel_type": "gas",
    "highway_mpg": 30,
    "make": "toyota",
    "model": "corolla",
    "transmission": "a",
    "year": 1993
  },
  {
    "city_mpg": 23,
    "class": "compact car",
    "combination_mpg": 26,
    "cylinders": 4,
    "displacement": 1.8,
    "drive": "fwd",
    "fuel_type": "gas",
    "highway_mpg": 30,
    "make": "toyota",
    "model": "corolla",
    "transmission": "m",
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
  }
];

function Navigator() {
  const [query, setQuery] = useState("");

  return (
    <nav>
      <div className='nav'>
        <h1> LOGO </h1>
        <form className='searchbar'>

          <Input placeholder='Search for your car' onChange={e => setQuery(e.target.value)} />

          <Button colorScheme='teal' variant='outline'>Submit</Button>
          <Button isLoading
            loadingText='Loading'
            colorScheme='teal'
            variant='outline'
            spinnerPlacement='end'
          >
            Submit</Button>

        </form>

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
