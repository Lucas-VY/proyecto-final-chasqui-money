import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Conversor from "./components/Conversor";
import Home from "./views/Home";
import NoticiasRelevantes from "./views/NoticiasRelevantes";
import PreguntasFrecuentes from "./views/PreguntasFrecuentes";
import Testimonios from "./views/Testimonios";
import Contactanos from "./views/Contactanos";
import QuienesSomos from "./views/QuienesSomos";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
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
          </Switch>
          <Footer tituloFooter="Copyright" webSite="your website 2019" />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

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
