import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-responsive">
      <div className="col-md-12">
        <div className="row">
          <div className="container">
            {/*  LOGO */}
            <a className="navbar-brand float-left" href="..">
              <Link className="navbar-brand text-white" to="/">
                <img className="img-responsive" id="headImg" src="" alt="" />
              </Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/*  BOTONES INDEX  */}
            <div
              className="collapse navbar-collapse text-align"
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item lead px-2 rounded bg-dark mx-3">
                  <Link className="nav-link active" to="/preguntas-frecuentes">
                    <i className="fas fa-question"></i> Preguntas Frecuentes
                  </Link>
                </li>
                <li className="nav-item lead px-1 rounded bg-dark mx-3">
                  <Link className="nav-link active" to="/noticias-relevantes">
                    <i className="fas fa-newspaper"></i> Noticias Relevantes
                  </Link>
                </li>
                <li className="nav-item lead px-2 rounded bg-dark mx-3">
                  <Link className="nav-link active" to="/testimonios">
                    <i className="fas fa-comment-dots"></i> Testimonios
                  </Link>
                </li>
                <li className="nav-item lead px-2 rounded bg-dark mx-3">
                  <Link className="nav-link active" to="/contactanos">
                    <i className="far fa-address-book"></i> Contáctanos
                  </Link>
                </li>
                <li className="nav-item lead px-2 rounded bg-dark mx-3">
                  <Link className="nav-link active" to="/quienes-somos">
                    <i className="fas fa-user-friends"></i> Quienes Somos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
