import "../css/PerfilUser.css";
import IMG_1020 from "../assets/IMG_1020.JPG";
import Sidebar from "../components/Sidebar";

const PerfilUser = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9 mt-5 px-5">
            <div className="row gutters-sm">
              <div className="col-12 my-2 col-lg-5 col-xl-4">
                <div className="card">
                  <div className="card-body perfil">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={IMG_1020}
                        alt="Admin"
                        className="rounded-circle"
                        width={150}
                      />
                      <div className="mt-3 text-dark">
                        <h4>Bárbara Ulloa</h4>
                        <hr />
                        <p className="text-dark mb-1">Nacionalidad</p>
                        <hr />
                        <p className="text-dark mb-1">Venezolana</p>
                        <hr />
                        <p className="text-dark mb-1">
                          País de Residencia Chile
                        </p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 my-2 col-lg-7 col-xl-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="inputbox mt-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                          value=""
                        />
                        <span className="text-dark">Nombre y Apellido:</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox mt-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />
                        <span className="text-dark">Email:</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox mt-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />
                        <span className="text-dark">Teléfono Móvil:</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox mt-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />
                        <span className="text-dark">Dirección:</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox mt-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />
                        <span className="text-dark">Contraseña:</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox mt-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />
                        <span className="text-dark">Repetir Contraseña:</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 my-2 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          Bancos de uso frecuente
                        </i>
                      </h6>
                      <small className="text-dark">Banco Estado</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small className="text-dark">Banco Santander</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small className="text-dark">Banco de Chile</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small className="text-dark">Banco Falabella</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small className="text-dark">Banco Edwards</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 my-2 col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3">
                      <i className="material-icons text-info mr-2">
                        Actividades
                      </i>
                    </h6>
                    <small className="text-dark">Diarias</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small className="text-dark">Mensual</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow={72}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small className="text-dark">Anual</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow={89}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small className="text-dark">Dispositivo Movil</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small className="text-dark">Página web</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow={66}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 my-2 col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3">
                      <i className="material-icons text-info mr-2">
                        Países de Destino
                      </i>
                    </h6>
                    <small className="text-dark">Chile</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small className="text-dark">Colombia</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow={72}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small className="text-dark">Estados Unidos</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow={89}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small className="text-dark">Perú</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small className="text-dark">Venezuela</small>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow={66}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 my-2 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-dark">Revisa</h5>
                    <p className="card-text text-dark">
                      Accede a tu historial de transacciones aquí
                    </p>
                    <a href="/" className="btn btn-primary">
                      click aquí
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 my-2 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      Realiza tu transacción
                    </h5>
                    <p className="card-text text-dark">
                      Dirígite a realizar tu operación, haciendo
                    </p>
                    <a href="/" className="btn btn-primary">
                      click aquí
                    </a>
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

export default PerfilUser;
