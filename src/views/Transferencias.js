import Sidebar from "../components/Sidebar";
import Conversor from "../components/Conversor";
import "../css/Transferencias.css";

const Transferencias = () => {
  return (
    <>
      <Sidebar />
      <div className="container mt-5 px-5">
        <div className="mb-4">
          <h2 className="text-white ">Confirmación de orden y pago</h2>
          <span className="text-white ">
            Realice la confirmación de sus datos y culmine el pago
          </span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3 text-dark">
              <h6 className="text-uppercase">Detalles de Pago</h6>
              <div className="inputbox mt-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required="required"
                />
                <span>Name on card</span>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />
                    <i className="fa fa-credit-card" /> <span>Card Number</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>Expiry</span>
                    </div>
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>CVV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>Street Address</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>City</span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>State/Province</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>Zip code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container-fluid">
              <div className="card p-3 text-dark">
                <div className="row d-flex justify-content-center">
                  <div className="text-center border-none bg-transparent">
                    <h1 className="header__title">Consulta Tu Pago</h1>
                    <p className="header__paragraph">
                      Cambio de dinero Rápido y seguro
                    </p>
                    <Conversor />
                    <hr className="my-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <h5 className="header-title pb-3 mt-0 text-dark">
                  Historial de Pago
                </h5>
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr className="align-self-center">
                        <th>Nombre de Benificiario</th>
                        <th>Método de Pago</th>
                        <th>Día de pago</th>
                        <th>Monto</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Kevin Heal
                        </td>
                        <td>Paypal</td>
                        <td>5/8/2018</td>
                        <td>$15,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-warning">
                            panding
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Frank M. Lyons
                        </td>
                        <td>Paypal</td>
                        <td>15/7/2018</td>
                        <td>$35,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-primary">
                            Success
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Angelo Butler
                        </td>
                        <td>Pioneer</td>
                        <td>30/9/2018</td>
                        <td>$45,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-warning">
                            Panding
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar4.png"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Phillip Morse
                        </td>
                        <td>Paypal</td>
                        <td>2/6/2018</td>
                        <td>$70,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-warning">
                            Success
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Kevin Heal
                        </td>
                        <td>Paypal</td>
                        <td>5/8/2018</td>
                        <td>$15,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-primary">
                            panding
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Frank M. Lyons
                        </td>
                        <td>Paypal</td>
                        <td>15/7/2018</td>
                        <td>$35,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-primary">
                            Success
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*end table-responsive*/}
                <div className="pt-3 border-top text-right">
                  <a href="/" className="text-primary">
                    View all <i className="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transferencias;
