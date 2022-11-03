import {
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import axios from "axios";
import "./Navigator.css";
import { Link } from "react-router-dom";
import { SelectedCarContext } from "../Context/SelectedCarContext";
import { useNavigate } from "react-router-dom";


function Navigator() {
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState("");
  const { make, setMake, models, setModels, year, setYear, setCar } = useContext(SelectedCarContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const searchCar = e.target.value;
    setSearch(searchCar);
    axios
      .get("http://localhost:3001/cars_lists")
      .then((res) => JSON.parse(JSON.stringify(res.data)))
      .then((data) => {
        const newCar = data.filter((value) => {
          return (
            value.make.toLowerCase().includes(searchCar.toLowerCase()) ||
            value.model.toLowerCase().includes(searchCar.toLowerCase()) ||
            value.year
          );
        });
        if (searchCar === "") {
          setQuery([]);
        } else {
          setQuery(newCar);
        }
      });
  };

  const clickHandler = function(make, models, year) {
    axios
      .get(`http://localhost:3001/cars/${make.toLowerCase()}/${models.toLowerCase()}/${year}`)
      .then((res) => {
        setCar(res.data);
        navigate(`/cars/${make}/${models}/${year}`);
      })
      .catch((err) => console.log("error:", err));
  };

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
              <Button
                colorScheme="teal"
                variant="outline"
                size="xs"
                onClick={() => { clickHandler(make, models, year); setQuery(""); }}
              >
                Submit
              </Button>
            </div>
          </div>
          {query.length !== 0 && (
            <div className="carSearch">
              {query.map((value, key) => {
                const car = `${value.make} ${value.model}`;
                return (
                  <span
                    className="carResults"
                    key={key}
                    onClick={() => {
                      setMake(value.make);
                      setModels(value.model);
                      setYear(value.year);
                      setSearch(car);
                      clickHandler(value.make, value.model, value.year);
                      setQuery("");
                      setSearch("");
                    }}>
                    <p>
                      {value.make} {value.model} {" "}
                    </p>
                  </span>
                );
              })}
            </div>
          )}
        </form>

        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/about">About</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link to="/contact">Contact</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </nav>
  );
}

export default Navigator;
