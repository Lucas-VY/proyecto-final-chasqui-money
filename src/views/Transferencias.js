import Sidebar from "../components/Sidebar";
import Conversor from "../components/Conversor";
import "../css/Transferencias.css";

const Transferencias = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9 mt-5 px-5">
            {/* BODY AQUI */}

            <div className="card card-outline-secondary bg-transparent">
              <div className="card-body-transaccion pl-5 pr-5 ">
                <h3 className="text-center text-white">
                  Detalles de Transacción
                </h3>
                <hr />
                <div className="alert alert-info p-2 pb-3">
                  <a
                    className="close font-weight-normal initialism"
                    data-dismiss="alert"
                    href="/"
                  >
                    <samp>×</samp>
                  </a>
                  Todos los campos deben estar completos.
                </div>
                <form className="form" autoComplete="off">
                  <div className="form-group">
                    <label className="text-white" htmlFor="cc_name">
                      Nombre de quien recibe
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc_name"
                      pattern="\w+ \w+.*"
                      title="First and last name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-white">Dirección de entrega</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      maxLength={20}
                      pattern="\d{16}"
                      title="Credit card number"
                      required
                    />
                  </div>
                  <div className="form-group row">
                    <label className="col-md-12 text-white">
                      Código de Transacción
                    </label>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        maxLength={20}
                        pattern="\d{20}"
                        title="Three digits at back of your card"
                        required
                        placeholder="introduce tu código de operación aqui"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-12 text-white">
                      Monto transferido
                    </label>
                  </div>
                  <div className="form-inline">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="text"
                        className="form-control text-right"
                        id="exampleInputAmount"
                        placeholder={0}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group row">
                    <div className="col-md-6">
                      <button
                        type="reset"
                        className="btn btn-default btn-lg btn-block text-white"
                      >
                        Cancelar
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg btn-block"
                      >
                        Guardar registro
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row d-flex justify-content-center jumbo">
                <div className="jumbotron text-center border-none bg-transparent jumbo">
                  <h1 className="header__title">Consulta Tu Cambio</h1>
                  <p className="header__paragraph">
                    Cambio de dinero Rápido y seguro
                  </p>
                  <Conversor />
                </div>
              </div>
            </div>

            {/* Etiquetas de cierre global */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transferencias;
