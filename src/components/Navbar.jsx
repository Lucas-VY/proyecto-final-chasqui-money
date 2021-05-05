import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar header-blue bg-transparent navbar-dark ">
      <div className="row">
        <div className="container">
          <Link className="navbar-brand float-left link pl-2 pr-5" to="/">
            <h2>Chaski Money</h2>
          </Link>
          <div className="navbar  d-flex" id="navcol-1">
            <Link
              className="nav-brand active link pr-3"
              role="button"
              to="/QuienesSomos"
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

/* <div className="header-blue">
<nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
  <div className="container">
    <Link className="navbar-brand" href="/">
      Chaski-Money
    </Link>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
      <span className="sr-only">
        Toggle navigation
    </span>
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navcol-1">
      <ul className="nav navbar-nav">
        <li className="nav-item" role="presentation">
          <Link className="nav-link active" to="/">
            Link
          </Link>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="/">
            Blog
          </a>
          <div className="dropdown-menu" role="menu">
            <Link className="dropdown-item" role="presentation" to="/">
              First Item
            </Link>
            <Link className="dropdown-item" role="presentation" to="/">
              Second Item
            </Link>
            <Link className="dropdown-item" role="presentation" to="/">
              Third Item
            </Link>
          </div>
        </li>
      </ul>
      <ul className="nav navbar-nav float-right" id="registers">

      <span className="navbar-text">
        <Link className="login" to="/" >
          Log In
        </Link>
      </span>
      <Link className="btn btn-light action-button mx-3" role="button" to="/">
        Sign Up
      </Link>
      </ul>
    </div>
  </div>
</nav>
</div>  */
