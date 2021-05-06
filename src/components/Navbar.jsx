import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //fixed-top Fija el navbar arriba 
    <div className="header-blue">
      <nav className="navbar navbar-dark header-blue navbar-expand-md navigation-clean-search">
        <div className="container-fluid fixed-top">
          <Link className="navbar-brand" to="/"><h2>Chasky Money</h2></Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/quienes-somos">Quienes Somos?</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
              </li>
              <li className="dropdown">
                <Link className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" to="/">Blog </Link>
                <div className="dropdown-menu" role="menu">
                  <Link className="dropdown-item" role="presentation" to="/noticias-relevantes">Noticias</Link>
                  <Link className="dropdown-item" role="presentation" to="/testimonios">Testimonios</Link>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/contactanos">Contactanos</Link>
              </li>
            </ul>

            <div className="row">
              <div className="container-fluid">
                <span className="navbar-text d-flex justify-content-end">
                  <Link className="login" to="/inicio-sesion" >Ingresa</Link>
                </span>
                <Link className="btn btn-light action-button" role="button" to="/registrate">Regístrate</Link>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
