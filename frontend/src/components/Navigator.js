import {
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Button,
} from "@chakra-ui/react";
// import { FaSearch, FaRegTimesCircle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import "./Navigator.css";
import { Link } from "react-router-dom";
import Coffee from "./Coffee";

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
          return (
            value.make.toLowerCase().includes(searchCar.toLowerCase()) ||
            value.model.toLowerCase().includes(searchCar.toLowerCase()) ||
            value.year.toString().includes(searchCar)
          );
        });
        if (searchCar === "") {
          setQuery([]);
        } else {
          setQuery(newCar);
        }
      });
  };

  // add clear button for input field
  // const clearInput = () => {
  //   setQuery("");
  //   setSearch("");
  // };

  return (
    <nav>
      <div className="nav">
        <h1>
          <img alt="" src="logo1.png" className="logo" />
        </h1>
        <form className="form">
          <div className="searchBar">
            <Input
              type="search"
              placeholder="Search for your car..."
              size="xs"
              value={search}
              onChange={handleSearch}
            />
            <div>
              {/* {!query.length ? (
                <FaSearch />
              ) : (
                <FaRegTimesCircle id="clearBtn" onClick={clearInput} />
              )} */}
            </div>
          </div>
          {query.length !== 0 && (
            <div className="carSearch">
              {query.map((value, key) => {
                return (
                  <span className="carResults" key={key}>
                    <a>
                      {value.make} {value.model} {value.year}{" "}
                    </a>
                  </span>
                );
              })}
            </div>
          )}
          <div className="searchButton">
            <Button
              display="none"
              colorScheme="teal"
              variant="outline"
              size="xs"
            >
              Submit
            </Button>
          </div>
        </form>
            <Coffee/>
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <Link to="/"><strong>Home</strong></Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/about"><strong>About</strong></Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link to="/contact"><strong>Contact</strong></Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </nav>
  );
}

export default Navigator;
