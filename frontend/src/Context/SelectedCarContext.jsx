import { createContext, useState } from "react";

const SelectedCarContext = createContext('');


function CarContextProvider({ children }) {

  const [make, setMake] = useState('');
  const [models, setModels] = useState([]);

  const value = {
    make,
    models,
    setMake,
    setModels
  }

  return <SelectedCarContext.Provider value={value}>
    {children}
  </SelectedCarContext.Provider>;
}

export { CarContextProvider, SelectedCarContext };