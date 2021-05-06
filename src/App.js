import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import PreguntasFrecuentes from "./views/PreguntasFrecuentes";
import Noticias from "./views/Noticias";
import Testimonios from "./views/Testimonios";
import Contactanos from "./views/Contactanos";
import QuienesSomos from "./views/QuienesSomos";
import Registro from "./views/Registro";
import InicioSesion from "./views/InicioSesion";
import NotFound from "./views/NotFound";
import injectContext from "./store/appContext";

import "./components/navbar.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
              component={Noticias}
            ></Route>
            <Route exact path="/testimonios" component={Testimonios}></Route>
            <Route exact path="/contactanos" component={Contactanos}></Route>
            <Route exact path="/quienes-somos" component={QuienesSomos}></Route>
            <Route exact path="/inicio-sesion" component={InicioSesion}></Route>
            <Route exact path="/registrate" component={Registro}></Route>
            <Route exact path="/" component={NotFound}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
