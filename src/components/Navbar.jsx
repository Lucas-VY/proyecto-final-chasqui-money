const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <a className="navbar-brand" href="/#">
          {props.titulo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
