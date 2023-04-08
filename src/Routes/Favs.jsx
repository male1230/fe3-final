import React, {useEffect, useState, useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { data } = useContext(ContextGlobal);
  const [arrayFavs, setArrayFavs] = useState([]);
  const dentistsFavs = data.filter(dentist => arrayFavs.includes(dentist.id));
  

    useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dentist"));
    setArrayFavs(storedData);
  }, []);

  return (
    <div className ="favs">
      <h1>Dentista(s) favorito(s)</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {/* Aqui deberias renderizar las cards */}
        {dentistsFavs.map(dentist =>
        <Card
          key={dentist.id}
          id={dentist.id}
          name={dentist.name}
          username={dentist.username}
          favorite={true}
        />)}
      </div>
    </div>
  );
};

export default Favs;
