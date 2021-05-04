import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NoticiasRelevantes from "./views/NoticiasRelevantes"
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CarruselNoticias from "./components/CarruselNoticias"

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
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar
            titulo={objectNavbar.titulo}
            home={objectNavbar.home}
            about={objectNavbar.about}
            services={objectNavbar.services}
            contact={objectNavbar.contact}
          />
          <Switch>
            <Header />
            <CarruselNoticias />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/" component={NoticiasRelevantes}></Route>
            
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
