import "../css/QuienesSomos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IMG_1020 from "../assets/IMG_1020.JPG";
import IMG_1019 from "../assets/IMG_1019.jpeg";
import IMG_1021 from "../assets/IMG_1021.jpeg";

const QuienesSomos = () => {
  return (
    <>
      <Navbar />
      <div className="team-grid">
        <div className="container">
          <div className="intro">
            <h2 className="text-center" id="titulo">
              Creadores
            </h2>
            <p className="text-center" id="pquienes-somos">
              Microempresa encargada de hacer intermediación de cambios de
              divisas a diferentes países del mundo de forma rápida y segura
            </p>
          </div>
          <div className="row people d-flex justify-content-center">
            <div className="col-md-4 col-lg-3 item">
              <div
                className="box"
                style={{
                  backgroundImage: `url(${IMG_1019})`,
                }}
              >
                <div className="cover">
                  <h3 className="name">Lucas Varas</h3>
                  <p className="title" id="pquienes-somos">
                    Developer Full-Stack
                  </p>
                  <div className="social">
                    <a href="/">
                      <i className="fa fa-facebook-official" />
                    </a>
                    <a href="/">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="/">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 item">
              <div
                className="box"
                style={{
                  backgroundImage: `url(${IMG_1020})`,
                }}
              >
                <div className="cover">
                  <h3 className="name">Bárbara Ulloa</h3>
                  <p className="title" id="pquienes-somos">
                    Developer Full-Stack
                  </p>
                  <div className="social">
                    <a href="/">
                      <i className="fa fa-facebook-official" />
                    </a>
                    <a href="/">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="/">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 item">
              <div
                className="box"
                style={{
                  backgroundImage: `url(${IMG_1021})`,
                }}
              >
                <div className="cover">
                  <h3 className="name">Alex Herrera</h3>
                  <p className="title" id="pquienes-somos">
                    Developer Full-Stack
                  </p>
                  <div className="social">
                    <a href="/">
                      <i className="fa fa-facebook-official" />
                    </a>
                    <a href="/">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="/">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default QuienesSomos;
