import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import PreguntasFrecuentes from "./views/PreguntasFrecuentes";
import NoticiasRelevantes from "./views/Noticias";
import Testimonios from "./views/Testimonios";
import Contactanos from "./views/Contactanos";
import QuienesSomos from "./views/QuienesSomos";
import Ingreso from "./views/Ingreso";
import Registro from "./views/Registro";
import NotFound from "./views/NotFound";
import injectContext from "./store/appContext";

import "./components/navbar.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/preguntas-frecuentes"
              component={PreguntasFrecuentes}
            ></Route>
            <Route
              exact
              path="/noticias-relevantes"
              component={NoticiasRelevantes}
            ></Route>
            <Route exact path="/testimonios" component={Testimonios}></Route>
            <Route exact path="/contactanos" component={Contactanos}></Route>
            <Route exact path="/quienes-somos" component={QuienesSomos}></Route>
            <Route exact path="/ingreso" component={Ingreso}></Route>
            <Route exact path="/registrate" component={Registro}></Route>
            <Route exact path="/" component={NotFound}></Route>
          </Switch>
        </div>
        <Footer />
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
