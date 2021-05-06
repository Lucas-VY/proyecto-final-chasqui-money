import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //fixed-top Fija el navbar arriba
    <div className="header-blue">
      <nav className="navbar navbar-dark header-blue navbar-expand-md navigation-clean-search col-sm-3 col-md-4 col-lg-12">
        <div className="container-fluid fixed-top">
          <Link className="navbar-brand" to="/">
            <h2>Chasky Money</h2>
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/QuienesSomos">
                  Quiénes Somos?
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/PreguntasFrecuentes">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  className="dropdown-toggle nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  to="/"
                >
                  Blog{" "}
                </Link>
                <div className="dropdown-menu" role="menu">
                  <Link
                    className="dropdown-item"
                    role="presentation"
                    to="/noticias-relevantes"
                  >
                    Noticias
                  </Link>
                  <Link
                    className="dropdown-item"
                    role="presentation"
                    to="/testimonios"
                  >
                    Testimonios
                  </Link>
                </div>
              </li>
              <li className="nav-item" role="presentation">
<<<<<<< HEAD
                <Link className="nav-link active" to="/contactanos">
                  Contáctanos
                </Link>
=======
                <Link className="nav-link active" to="/contactanos">Contáctanos</Link>
>>>>>>> 8e77f968657eaa0f83491ae33d5ccdc5c90fa40a
              </li>
            </ul>
          </div>
          <span className="navbar-text px-2">
            <Link className="login px-2" to="/inicio-sesion">
              Ingresa
            </Link>
            <Link
              className="btn btn-light action-button"
              role="button"
              to="/registrate"
            >
              Regístrate
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
