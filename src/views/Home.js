import { Link } from "react-router-dom";
import Conversor from "../components/Conversor";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      {/* col-sm-3 col-md-4 col-lg-12 */}
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="jumbotron text-center border border-dark bg-light jumbo">
            <h1 className="display-4">Cuánto Dinero vas a enviar?</h1>
            <Conversor />
            <hr className="my-4" />
            <p>
              Mauris egestas tellus non ex condimentum, ac ullamcorper sapien
              dictum.
            </p>
            <Link
              className="btn btn-primary btn-lg"
              to="/Registrate"
              role="button"
            >
              Regístrate Gratis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <div className=""></div> */
}
