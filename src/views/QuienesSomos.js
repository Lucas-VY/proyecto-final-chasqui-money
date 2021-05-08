import "../css/QuienesSomos.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
              Somos una ecomerce , encargada a través de la intermediación de
              cambios de divisas, hacerle llegar el dinero al destinatario.
            </p>
          </div>
          <div className="row people d-flex justify-content-center">
            <div className="col-md-4 col-lg-3 item">
              <div
                className="box"
                style={{
                  backgroundImage: "url(https://i.imgur.com/HjKTNkG.jpg)",
                }}
              >
                <div className="cover">
                  <h3 className="name">Lucas Varas</h3>
                  <p className="title" id="pquienes-somos">
                    Developer Full-Stack</p>
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
                  backgroundImage: "url(https://i.imgur.com/WgXRMDs.jpg)",
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
                  backgroundImage: "url(https://i.imgur.com/0Cdlenp.jpg)",
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
