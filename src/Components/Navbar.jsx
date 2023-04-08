import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { setTheme, theme } = useContext(ContextGlobal);

  const handleClick = (e) => {
    e.preventDefault();
      theme === "" ? setTheme("dark") : setTheme("");
  };

  return (
    <nav className={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Destacado</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleClick}>Change theme</button>
    </nav>
  );
}

export default Navbar;