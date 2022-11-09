import {
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Button,
} from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Navigator.css";
import { Link } from "react-router-dom";
import { SelectedCarContext } from "../Context/SelectedCarContext";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons"

import Coffee from "./Coffee";

function Navigator() {
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState("");
  
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const { make, setMake, models, setModels, year, setYear, setCar } = useContext(SelectedCarContext);
  const navigate = useNavigate();
  const width = () => {
    if (innerWidth < 700) {
      return false
    }
    return true;
  }
  const [isShown, setIsShown] = useState(width());

  useEffect(() => {
    const handleWidth = () => {
      setInnerWidth(window.innerWidth)
      setIsShown(width());
    }
    window.addEventListener('resize', handleWidth)
  })
  
  const handleSearch = (e) => {
    const searchCar = e.target.value;
    setSearch(searchCar);
    axios
      .get("http://localhost:3001/cars_lists")
      .then((res) => res.data)
      .then((data) => {
        const newCar = data.filter((value) => {
          return (
            (value.make.toLowerCase().includes(searchCar.toLowerCase()) ||
            value.model.toLowerCase().includes(searchCar.toLowerCase()))
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
        navigate(`/cars/${make}/${models}/${res.data.year}`);
      })
      .catch((err) => console.log("error:", err));
  };

  const menuChange = event => {
    setIsShown(current => !current);
  }


  return (
    <nav >
      <div className="menu"><HamburgerIcon w={10} onClick={menuChange}/></div>
      <div className="nav" style={{display: isShown ? 'flex' : 'none'}}>
        <h1>
          <img alt="" src="logo1.png" className="logo" />
        </h1>
        
        <form className="form">
          <div className="searchBar">
            <Input
              id='searchinput'
              type="search"
              placeholder="Search for your car..."
              size="m"
              value={search}
              onChange={handleSearch}
            />
            &nbsp;
            <div>
              <Button
                colorScheme="teal"
                variant="outline"
                height="40px"
                size="s"
                onClick={() => { clickHandler(make, models, year); setQuery(""); }}
              >
                &nbsp;Submit&nbsp;
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
