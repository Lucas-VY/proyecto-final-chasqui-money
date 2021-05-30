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

// vistas de perfil
import PerfilUser from "./views/PerfilUser";
import Transferencias from "./views/Transferencias";
import RegistroOperacion from "./views/RegistroOperacion";
import DatosPago from "./views/DatosPago";
import Historial from "./views/Historial";
import ContactanosPerfil from "./views/ContactanosPerfil";
import ChaskiCard from "./views/ChaskiCard";

import "./components/navbar.css";

import Particles from "react-particles-js";
import particlesConfig from "./components/ParticlesConfig";

function App() {
  return (
    <>
      <BrowserRouter>
        {/*       */}
        <div
          className="container-fluid p-0 d-flex flex-column justify-content-between"
          style={{ height: "100vh" }}
        >
          <div style={{ position: "fixed" }}>
            <Particles height="100vh" width="100vw" params={particlesConfig} />
          </div>
          {/*        */}
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
{/*             <Route exact path="/testimonios" component={Testimonios}></Route> */}
            <Route exact path="/contactanos" component={Contactanos}></Route>
            <Route exact path="/quienes-somos" component={QuienesSomos}></Route>
            <Route exact path="/inicio-sesion" component={InicioSesion}></Route>
            <Route exact path="/registrate" component={Registro}></Route>

            <Route exact path="/user/profile/" component={PerfilUser}></Route>
            <Route
              exact
              path="/user/transferencias"
              component={Transferencias}
            ></Route>
            <Route
              exact
              path="/user/transferencias/registro-beneficiario"
              component={RegistroOperacion}
            ></Route>
            <Route
              exact
              path="/user/transferencias/datos-pago"
              component={DatosPago}
            ></Route>
            <Route exact path="/user/historial" component={Historial}></Route>
            <Route
              exact
              path="/user/contactanos"
              component={ContactanosPerfil}
            ></Route>
            <Route
              exact
              path="/user/credit-card"
              component={ChaskiCard}
            ></Route>
            {/* NOT FOUND DEBE IR AL FINAL DE TODO SIEMPRE */}
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
