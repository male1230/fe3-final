import React, { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const { theme } = useContext(ContextGlobal);
  return (
      <BrowserRouter>
        <div className={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
