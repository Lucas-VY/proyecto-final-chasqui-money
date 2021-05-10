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
            <div className="row">
              <div className="col-12 mb-4">
                <h2 className="text-white ">Confirmación de orden y pago</h2>
                <span className="text-white ">
                  Realice la confirmación de sus datos y culmine el pago
                </span>
              </div>

              <div className="col-md-6">
                <div className="card carta-transferencia p-3 text-dark">
                  <div className="row">
                    <div className="col-12">
                      <h6 className="text-uppercase">Detalles de Pago</h6>
                    </div>

                    <div className="col-12 inputbox mt-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control-transferencias"
                        required="required"
                      />
                      <span>Name on card</span>
                    </div>

                    <div className="col-12 inputbox mt-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control-transferencias"
                        required="required"
                      />
                      <i className="fa fa-credit-card" />
                      <span>Card Number</span>
                    </div>

                    <div className="col-12 col-md-6 inputbox mt-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control-transferencias"
                        required="required"
                      />
                      <span>Expiry</span>
                    </div>

                    <div className="col-12 col-md-6 inputbox mt-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control-transferencias"
                        required="required"
                      />
                      <span>CVV</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card carta-transferencia p-3 text-dark">
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
      </div>
    </>
  );
};

export default Transferencias;
