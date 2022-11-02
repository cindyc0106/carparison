import { createContext, useState } from "react";

const SelectedCarContext = createContext('');


function CarContextProvider({ children }) {

  const [make, setMake] = useState('');
  const [models, setModels] = useState([]);
  const [year, setYear] = useState('');
  const [ car, setCar ] = useState({})
  const [ photo, setPhoto ] = useState("")

  const value = {
    make,
    models,
    setMake,
    setModels,
    year,
    setYear, 
    car,
    setCar,
    photo,
    setPhoto
  }

  return <SelectedCarContext.Provider value={value}>
    {children}
  </SelectedCarContext.Provider>;
}

export { CarContextProvider, SelectedCarContext };