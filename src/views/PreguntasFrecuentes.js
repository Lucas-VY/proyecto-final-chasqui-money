import "../css/PreguntasFrecuentes.css";

const PreguntasFrecuentes = () => {
  return (
    <>
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-9 mx-auto text-white text-center">
            <h1 class="display-4">¿Tienes alguna duda?</h1>
            <p class="lead mb-0">
              Revisa esta sección seguramente encontrarás la respuesta que
              buscas
            </p>
            <p class="lead"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div id="accordionExample" class="accordion shadow">
              <div class="card">
                <div
                  id="headingOne"
                  class="card-header bg-white shadow-sm border-0"
                >
                  <h6 class="mb-0 font-weight-bold">
                    <a
                      href="/"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      class="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                    >
                      ¿Cómo enviar dinero con Chaski Money?
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                  class="collapse show"
                >
                  <div class="card-body p-5">
                    <p class="font-weight-light m-0">
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

              <div class="card">
                <div
                  id="headingTwo"
                  class="card-header bg-white shadow-sm border-0"
                >
                  <h6 class="mb-0 font-weight-bold">
                    <a
                      href="/"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                    >
                      ¿Por qué enviar con Chaski Money?
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                  class="collapse"
                >
                  <div class="card-body p-5">
                    <p class="font-weight-light m-0">
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

              <div class="card">
                <div
                  id="headingThree"
                  class="card-header bg-white shadow-sm border-0"
                >
                  <h6 class="mb-0 font-weight-bold">
                    <a
                      href="/"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                    >
                      Ventajas de enviar con Chaski Money
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                  class="collapse"
                >
                  <div class="card-body p-5">
                    <p class="font-weight-light m-0">
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
    </>
  );
};

export default PreguntasFrecuentes;
