import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import Conversor from "../components/Conversor";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="jumbotron bg-transparent text-center border border-dark ">
          <h1 className="display-4">Cuánto Dinero vas a enviar?</h1>
          <Conversor />
          <hr className="my-4" />
          <p>
            Mauris egestas tellus non ex condimentum, ac ullamcorper sapien
            dictum.
          </p>
          <Link className="btn btn-primary btn-lg" to="/Registro" role="button">
            Registrate Aquí!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* <div className=""></div> */
