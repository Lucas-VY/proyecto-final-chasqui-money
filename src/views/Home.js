import { Link } from "react-router-dom";
//import CarrouselNoticias from "../components/CarrouselNotice";
import Conversor from "../components/Conversor";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      {/* col-sm-3 col-md-4 col-lg-12 */}

      <Conversor />



      {/* BANNERS */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card-counter primary">
              <i className="fas fa-coins" />
              <span className="count-numbers">200</span>
              <span className="count-name">Monedas Disponibles</span>
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
    </>
  );
};

export default Home;
