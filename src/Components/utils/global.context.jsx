import { createContext, useState, useEffect, useMemo } from "react";
import axios from 'axios';
import Card from "../Card";

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState("");
  const [data, setData] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const newData = useMemo(() => {
    console.log('Processing data...');
    return data.map(dentist =>
      <Card
        key={dentist.id}
        id={dentist.id}
        name={dentist.name}
        username={dentist.username}
      />)
  }, [data]);

  return (
    <ContextGlobal.Provider value={{theme, setTheme, data, fav, setFav, newData}}>
      {children}
    </ContextGlobal.Provider>
  );
};
