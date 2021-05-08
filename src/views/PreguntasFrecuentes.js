import "../css/PreguntasFrecuentes.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PreguntasFrecuentes = () => {
  return (
    <>
    <Navbar />
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-9 mx-auto text-white text-center">
            <h1 className="display-4">¿Tiénes alguna duda?</h1>
            <br></br>
            <p className="lead mb-0" id="reseña">
              Revisa esta sección seguramente encontrarás la respuesta que
              buscas
            </p>
            <p className="lead" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div id="accordionExample" className="accordion shadow">
              <div className="card">
                <div
                  id="headingOne"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <a
                      href="/"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      className="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                    >
                      ¿Cómo enviar dinero con Chaski Money?
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                  className="collapse show"
                >
                  <div className="card-body p-5">
                    <p
                      className="font-weight-light m-0"
                      id="ppreguntas-frecuentes"
                    >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  id="headingTwo"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <a
                      href="/"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                    >
                      ¿Por qué enviar con Chaski Money?
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p
                      className="font-weight-light m-0"
                      id="ppreguntas-frecuentes"
                    >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  id="headingThree"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <a
                      href="/"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                    >
                      Ventajas de enviar con Chaski Money
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p
                      className="font-weight-light m-0"
                      id="ppreguntas-frecuentes"
                    >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
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

export default PreguntasFrecuentes;
