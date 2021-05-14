import { Link, Redirect } from "react-router-dom";

const Navbar = () => {
  return (
    /* FALTA HACERLO RESPONSIVE */
    //fixed-top Fija el navbar arriba
    <>
    <div className="header-blue">
      <nav className="navbar navbar-dark header-blue navbar-expand-md navigation-clean-search">
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
                <Link className="nav-link active" to="/quienes-somos">
                  Quiénes Somos?
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/preguntas-frecuentes">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  className="dropdown-toggle nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
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
                <Link className="nav-link active" to="/contactanos">Contáctanos</Link>
              </li>
          <span className="navbar-text ">
            <Link className="login px-2" to="/inicio-sesion">
              Ingresa
            </Link>
          </span>
          <span className="navbar-text">
            <Link
              className="btn btn-light action-button"
              role="button"
              to="/registrate"
            >
              Regístrate
            </Link>
          </span>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    {false && <Redirect to="UserView"/>}
    </>
  );
};


export default Navbar;
