import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="col-sm-3 col-md-4 col-lg-12 navbar header-blue bg-transparent navbar-dark ">
      <div className="row">
        <div className="container">
          <Link className="navbar-brand float-left link pl-2 pr-5" to="/">
            <h2>Chaski Money</h2>
          </Link>
          <div className="navbar  d-flex" id="navcol-1">
            <Link
              className="nav-brand active link pr-3"
              role="button"
              to="/QuienSomos"
            >
              Quiénes Somos?
            </Link>
            <Link
              className="nav-brand px-3 link"
              role="button"
              to="/PreguntasFrecuentes"
            >
              Preguntas Frecuentes
            </Link>
            <a
              className="dropdown-toggle nav-link dropdown-toggle px-3 link"
              data-toggle="dropdown"
              aria-expanded="false"
              href="/"
            >
              Blog
            </a>
            <div className="dropdown-menu" role="menu">
              <Link className="dropdown-item link" role="button" to="/Noticias">
                Noticias
              </Link>
              <Link
                className="dropdown-item link"
                role="button"
                to="/Testimonios"
              >
                Testimonios
              </Link>
            </div>
            <Link
              className="nav-brand active link px-2"
              role="button"
              to="/Contactanos"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="container">
            <span className="navbar-brand navbar-text">
              <Link className="login" to="/Ingresa">
                Ingresa
              </Link>
              <Link
                className="register navbar-brand btn btn-light action-button mx-2 my-1"
                role="button"
                to="/Registrate"
              >
                Regístrate
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
