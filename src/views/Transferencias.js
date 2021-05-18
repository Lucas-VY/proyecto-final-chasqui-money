import React, { useState, useContext } from "react";
import { validateInfo } from "../components/ValidateInfo";
import Sidebar from "../components/Sidebar";
import { Context } from "../store/appContext";
import "../css/Transferencias.css";

const Transferencias = (props) => {
  const { actions } = useContext(Context);

  const [inputNameBeneficiario, setInputNameBeneficiario] = useState("");
  const [inputBanco, setInputBanco] = useState("");
  const [inputNumeroCuenta, setInputNumeroCuenta] = useState("");
  const [inputRegistroComprobante, setInputRegistroComprobante] = useState("");
  const [inputMonto, setInputMonto] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "name") {
      setInputNameBeneficiario(value);
    } else if (name === "banco") {
      setInputBanco(value);
    } else if (name === "numeroCuenta") {
      setInputNumeroCuenta(value);
    } else if (name === "registroComprobante") {
      setInputRegistroComprobante(value);
    } else if (name === "monto") {
      setInputMonto(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting === false) {
      const errores = validateInfo({
        name: inputNameBeneficiario,
        banco: inputBanco,
        numeroCuenta: inputNumeroCuenta,
        registroComprobante: inputRegistroComprobante,
        monto: inputMonto,
      });
      console.log("esta registrando");
      if (Object.keys(errores).length === 0) {
        setIsSubmitting(true);

        actions
          .transferencias({
            name: inputNameBeneficiario,
            banco: inputBanco,
            numeroCuenta: inputNumeroCuenta,
            registroComprobante: inputRegistroComprobante,
            monto: inputMonto,
          })
          .then((result) => {
            props.history.push("/user/historial");
          });
      }

      setErrors(errores);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9 mt-2 mb-3 px-5">
            {/* BODY AQUI */}

            <div className="card-transferencias text-center bg-transparent">
              <h3 className="card-header text-white">
                Información de Pago Chaski Money
              </h3>
              <div className="card-body-transferencias text-white">
                <h5 className="card-title ">Instrucciones</h5>
                <p className="card-text">
                  1.-Transfiere a nuestra cuenta, cuyos datos se reflejan a
                  continuación
                </p>
                <p className="card-text">Banco Santander</p>
                <p className="card-text">Nombre: ChaskiMoney Rut 139874874-J</p>
                <p className="card-text">
                  Número de cuenta : 9497327974 Tipo de Cuenta: Corriente
                </p>
                <p className="card-text">
                  Correo electrónico : chaskimoney@gmail.com
                </p>
                <p className="card-text">
                  2.-Carga los datos de tu transacción en el siguiente
                  formulario
                </p>
                <br></br>
                <div classNameName="card card-outline-secondary bg-transparent">
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

                    {/* Detalles de transaccion */}
                    <form
                      className="form"
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <label htmlFor="cc_name">
                          Nombre del Beneficiario o Titular
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc_name"
                          pattern="\w+ \w+.*"
                          title="First and last name"
                          required="required"
                          placeholder="Nombre completo de tú Beneficiario o Titular"
                          name="name"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cc_name">
                          Banco donde recibe el pago
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc_name"
                          pattern="\w+ \w+.*"
                          title=""
                          required="required"
                          placeholder="Nombre de Banco de tu beneficiario"
                          name="banco"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Número de cuenta de recepción</label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          maxLength={60}
                          minLength={10}
                          title=""
                          required="required"
                          placeholder="Nº de cuenta de tu beneficiario"
                          name="numeroCuenta"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group row">
                        <label className="col-md-12">
                          Registro de operación
                        </label>
                        <div className="col-md-4">
                          <select
                            className="form-control"
                            name="cc_exp_mo"
                            placeholder="país de envío"
                            size={0}
                          >
                            <option value="Chile">Chile</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Estados Unidos">
                              Estados Unidos
                            </option>
                            <option value="España">España</option>
                            <option value="Perú">Perú</option>
                          </select>
                        </div>

                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            maxLength={20}
                            pattern="\d{20}"
                            title="Three digits at back of your card"
                            required="required"
                            placeholder="Nº comprobante transferencia a Cuenta Chasky"
                            name="registroComprobante"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            maxLength={20}
                            pattern="\d{20}"
                            title="Three digits at back of your card"
                            required
                            placeholder="Monto Enviado para tu beneficiario"
                            name="monto"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <hr />
                      <div className="form-group row">
                        <div className="col-md-6">
                          <button
                            type="reset"
                            className="btn btn-danger btn-lg btn-block"
                          >
                            Cancelar registro
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
              </div>
              <div className="card-footer-transferencias text-white">
                Asegúrese de ingresar todos los datos correctamente, ya que de
                lo contrario sera imposible validar su transacción
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
