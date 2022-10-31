import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  Button,
} from '@chakra-ui/react';

import { FaSearch, FaRegTimesCircle } from "react-icons/fa";
import { useState } from 'react';
import axios from "axios";
import './Navigator.css';

function Navigator() {
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchCar = e.target.value;
    setSearch(searchCar);
    axios
      .get("http://localhost:3001/cars")
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((data) => {
        // console.log(data.data);
        data = data.data;
        const newCar = data.filter((value) => {
          return (value.make.toLowerCase().includes(searchCar.toLowerCase())) || (value.model.toLowerCase().includes(searchCar.toLowerCase()) || (value.year.toString().includes(searchCar)));
        });
        if (searchCar === "") {
          setQuery([]);
        } else {
          setQuery(newCar);
        }
      });
  };

  // add clear button for input field
  const clearInput = () => {
    setQuery("");
    setSearch("");
  };

  return (
    <nav>
      <div className='nav'>
        <h1> LOGO </h1>
        <form className='form'>
          <div className='searchBar'>

            <Input type='text' placeholder='Search for your car...' size='xs' value={search} onChange={handleSearch} />
            <div className='icon'>
              {!query.length ? <FaSearch /> : <FaRegTimesCircle id='clearBtn' onClick={clearInput} />}
            </div>
          </div>
          {query.length !== 0 &&
            <div className='carSearch'>
              {query.map((value, key) => {
                return (
                  <div className='carResults' key={key}>
                    <a>{value.make} {value.model} {value.year} </a>
                  </div>);
              })}
            </div>
          }
          <div className='searchButton'>
            <Button colorScheme='teal' variant='outline' size='xs'>Submit</Button>
            {/* <Button isLoading
            loadingText='Loading'
            colorScheme='teal'
            variant='outline'
            spinnerPlacement='end'
          >
            Submit</Button> */}
          </div>
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
