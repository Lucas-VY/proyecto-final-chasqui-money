import React from "react-router-dom";
import "./index.css";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import CurrencyConverter from "./componentes/Conversor";
import CarruselNoticias from "./componentes/CarruselNoticias";

function App() {
  let objectNavbar = {
    titulo: "Start Booststrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  };
  return (
    <>
      <Navbar
        titulo={objectNavbar.titulo}
        home={objectNavbar.home}
        about={objectNavbar.about}
        services={objectNavbar.services}
        contact={objectNavbar.contact}
      />
      <CurrencyConverter />

      <CarruselNoticias />
      <Footer tituloFooter="Copyright" webSite="your website 2019" />
    </>
  );
}

export default App;
