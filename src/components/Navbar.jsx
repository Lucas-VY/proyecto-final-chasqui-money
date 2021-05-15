//import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
//import { ListGroup } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR TEST  */}
      <nav className="navbar navbar-expand-lg navbar-white bg-transparent">
        <Link className="navbar-brand" to="/">
          Chasky Money
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="navbar-toggler fas fa-align-justify text-dark bg-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/quienes-somos">
                Quiénes Somos?<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preguntas-frecuentes">
                Preguntas
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/noticias-relevantes">
                  Noticas
                </Link>
                <Link className="dropdown-item" to="/testimonios">
                  Testimonios
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactanos">
                Contáctanos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inicio-sesion">
                Ingresa
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn text-dark btn-sm action-button btn-ingresa border border-white bg-light"
                to="/registrate"
              >
                Regístrate
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {false && <Redirect to="UserView" />}

      {/* navbar antiguo */}

      {/* <div className="header-blue">
        <nav className="navbar navbar-dark  navbar-expand-lg navigation-clean-search col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="container-fluid fixed-top">
            <Link className="navbar-brand" to="/">
              <h3>Chasky Money</h3>
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
                    FAQ
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
                  <Link className="nav-link active" to="/contactanos">
                    Contáctanos
                  </Link>
                </li>
                <li className="navbar-text nav-item" role="presentation">
                <Link className="nav-link active login" to="/inicio-sesion">
                  Ingresa
                </Link>
              </li>
              <li className="navbar-text" role="presentation">
                <Link
                  className="btn btn-light btn-sm action-button"
                  role="button"
                  to="/registrate"
                >
                  Regístrate
                </Link>
              </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {false && <Redirect to="UserView" />} */}
    </>
  );
};

export default Navbar;
