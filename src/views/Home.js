import { Link } from "react-router-dom";
//import CarrouselNoticias from "../components/CarrouselNotice";
import Conversor from "../components/Conversor";
import "../css/Home.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <> 
<Navbar/>
  {/* CONVERSOR */}
  <div className="container-fluid">
        <div className="row d-flex justify-content-center jumbo">
          <div className="jumbotron text-center border-none bg-transparent jumbo">
              <h1 className="header__title">Consulta Tu Cambio</h1>
              <p className="header__paragraph">
                Cambio de dinero Rapido y seguro
              </p> 
            <Conversor />
            <hr className="my-2" />
            <Link className="btn btn-counter btn-primary btn-lg" to="/Registrate"role="button">
              Regístrate Gratis
            </Link>
          </div>
        </div>
      </div>




      {/* BANNERS */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card-counter primary">
              <i className="fas fa-coins" />
              <span className="count-numbers">200</span>
              <span className="count-name">Monedas</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter danger">
              <i className="fas fa-handshake" />
              <span className="count-numbers">+1M</span>
              <span className="count-name">Transferencias</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter success">
              <i className="fa fa-database" />
              <span className="count-numbers">+400K</span>
              <span className="count-name">Data</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter info">
              <i className="fa fa-users" />
              <span className="count-numbers">+500K</span>
              <span className="count-name">Usuarios</span>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Home;
