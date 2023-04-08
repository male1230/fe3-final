import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, newData, fav } = useContext(ContextGlobal);

  localStorage.setItem("dentist", JSON.stringify(fav))

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {newData}
      </div>
    </main>
  );
};

export default Home;