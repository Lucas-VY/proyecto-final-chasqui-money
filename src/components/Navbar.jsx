import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg navbar-dark navbar-responsive">
      <div className="col-md-12">
        <div className="row">
          <div className="container">
            {/*  LOGO */}
            <a className="navbar-brand float-left" href="..">
              <Link className="navbar-brand text-white" to="/">
                <img className="img-responsive" id="headImg" src="" alt="" />
              </Link>
=======
    <nav className="navbar header-blue navbar-dark navbar-expand-md navigation-clean-search">
    <div className="container">
      <a className="navbar-brand float-left" href="/">Chaski Money</a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav">
          <li className="nav-item " role="presentation">
            <Link className="nav-link active" to="/QuienSomos">
              Quienes Somos?
            </Link>
          </li>
          <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="/">Blog </a>
            <div className="dropdown-menu" role="menu">
              <Link className="dropdown-item" role="presentation" to="/NoticiasRelevantes">
                Noticias
              </Link>
              <Link className="dropdown-item" role="presentation" to="/PreguntasFrecuentes">
                Preguntas Frecuentes
              </Link>
              <Link className="dropdown-item" role="presentation" to="/Testimonios">
                Testimonios
              </Link>
            </div>
          </li>
          <li className="nav-item " role="presentation">
            <Link className="nav-link active" to="/QuienSomos">
              Contactanos
            </Link>
          </li>
        </ul>
        <form className="form-inline mr-auto" target="_self">
          <div className="form-group">
            <label htmlFor="search-field"><i className="fa fa-search" /></label><input className="form-control search-field" type="search" name="search" id="search-field" />
          </div>
        </form>
        <span className="navbar-text"> 
          <a href="/" className="login">Ingresa </a> 
        </span> 
          <a className="btn btn-light action-button" role="button" href="/"> registrate</a>
        </div>
    </div>
  </nav>
  );
};

export default Navbar;



/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <a className="navbar-brand" href="/#">
          {props.titulo}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" href="/#">
              {props.home} <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="/#">
              {props.about}
            </a>
            <a className="nav-link" href="/#">
              {props.services}
            </a>
            <a className="nav-link" href="/#">
              {props.contact}
>>>>>>> 69243af4f14c8871c6387074d4deb2b78c47253e
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
    </nav> */