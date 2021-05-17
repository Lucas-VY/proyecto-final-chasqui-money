import "./Footer.css";

const Footer = () => {
  return (
    //fixed-bottom fija el footer para estar siempre abajo
    <div className="container-fluid footer p-0 m-0 justify-content-center text-light ">
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </section>
          {/* Section: Social media */}
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-white" href="/">
            Chaski-Team
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

/* <div className="container-fluid footer pb-0 mb-0 fixed-bottom justify-content-center text-light ">
      <footer>
        <div className="row my-5 justify-content-center py-5">
          <div className="col-11">
            <div className="row ">
              <div className="col-xl-4 col-md-2 col-sm-2 col-12 my-auto mx-auto">
                <h3 className="text-muted mb-md-0 mb-5 bold-text">
                  Chaski Money
                </h3>
                <div className="mb-3 mb-lg-4 bold-text my-3">
                  <p className="mb-3 mb-lg-4 bold-text text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul className="list-unstyled">
                  <li>Inicio</li>
                  <li>Quienes Somos?</li>
                  <li>Blog</li>
                  <li>Contactanos</li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                  <b>DIRECCION</b>
                </h6>
                <p className="mb-1">666, ALAMEDA</p>
                <p>SANTIAGO, CHILE</p>
              </div>
            </div>
            <small className="rights">
              <span>®</span>
              Chaski All Rights Reserved.
            </small>
          </div>
        </div>
      </footer>
    </div>  */
