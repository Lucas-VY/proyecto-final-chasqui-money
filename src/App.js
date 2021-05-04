import React from "react-router-dom";
import "./index.css";
import "./components/footer.css";
import "./components/navbar.css";
import "./components/header.css";
import "./components/carruselNoticias.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CarrouselNotice from "./components/CarrouselNotice ";

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

      <CarrouselNotice />
      <Footer tituloFooter="Copyright" webSite="your website 2019" />
    </>
  );
}

export default App;
