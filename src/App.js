import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import PreguntasFrecuentes from "./views/PreguntasFrecuentes";
import NoticiasRelevantes from "./views/NoticiasRelevantes";
import Testimonios from "./views/Testimonios";
import Contactanos from "./views/Contactanos";
import QuienesSomos from "./views/QuienesSomos";
import injectContext from "./store/appContext";


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
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Header />
            <CarrouselNotice />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/" component={PreguntasFrecuentes}></Route>
            <Route exact path="/" component={NoticiasRelevantes}></Route>
            <Route exact path="/" component={Testimonios}></Route>
            <Route exact path="/" component={Contactanos}></Route>
            <Route exact path="/" component={QuienesSomos}></Route>
            
          </Switch>
            <Footer tituloFooter="Copyright" webSite="your website 2019" />
        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);


/* function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/characters" component={Characters}></Route>
            <Route exact path="/planets" component={Planets}></Route>
            <Route exact path="/vehicles" component={Vehicles}></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
} */


/*   let objectNavbar = {
    titulo: "Start Booststrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  }; */


/* <Navbar
titulo={objectNavbar.titulo}
home={objectNavbar.home}
about={objectNavbar.about}
services={objectNavbar.services}
contact={objectNavbar.contact}
/> */