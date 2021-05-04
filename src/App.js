import React from "react-router-dom";
import "./index.css";
<<<<<<< HEAD
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import CurrencyConverter from "./componentes/Conversor";
import CarruselNoticias from "./componentes/CarruselNoticias";
=======
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CarruselNoticias from "./components/CarruselNoticias"
>>>>>>> ddc1c07649fd285da84b8f88791906bcdb1e7fdb

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
