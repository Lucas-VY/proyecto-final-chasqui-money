import React, { useState, useContext } from "react";
//import { validateInfo } from "../components/ValidateInfo";
import Sidebar from "../components/Sidebar";
import { Context } from "../store/appContext";
import "../css/RegistroOperacion.css";
import ConversorTransfer from "../components/ConversorTransfer";
import { Link } from "react-router-dom";

const RegistroBeneficiario = (props) => {
  const { store } = useContext(Context);

  /* const [inputNameBeneficiario, setInputNameBeneficiario] = useState("");
  const [inputBanco, setInputBanco] = useState("");
  const [inputNumeroCuenta, setInputNumeroCuenta] = useState("");
  const [inputRegistroComprobante, setInputRegistroComprobante] = useState("");
  const [inputMonto, setInputMonto] = useState("");
  //const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); */

  const [state, setState] = useState({});

  /* VALIDACION */
  /* const handleChangeTransfer = (e) => {
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
  }; */

  const handleChangeTransfer = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCurrencyChange = (currency) => {
    setState({
      ...state,
      money: currency,
    });
  };

  const transferencia = (info) => {
    fetch(
      `http://127.0.0.1:5000/user/card/${store.currentUser.resultado.id ? store.currentUser.resultado.id : ""
      }`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data.result))
      .then((result) => {
        props.history.push("/user/transferencias/datos-pago");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  /* 
    
    const handleSubmitTransference = (e) => {
      e.preventDefault();
  
      if (isSubmitting === false) {
        const errores = validateInfo({
          name: inputNameBeneficiario,
          banco: inputBanco,
          numeroCuenta: inputNumeroCuenta,
          registroComprobante: inputRegistroComprobante,
          monto: inputMonto,
        });
        console.log("Formulario enviado");
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
  
        //setErrors(errores);
      }
    }; */

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9 mt-2 mb-3 px-5">
            {/* BODY AQUI */}
            <div className="card-ro text-center bg-white">
              <h3 className="card-ro-header text-dark pt-5">
                Registra la información de tu Beneficiario
              </h3>
              <div className="card-ro-body-ro text-dark">
                <br></br>
                <div classNameName="card-ro card-ro-outline-secondary">
                  <div className="card-ro-body pl-5 pr-5 ">
                    <h3 className="text-center text-dark">
                      Detalles del Beneficiario
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
                      onSubmit={(e) => {
                        e.preventDefault();
                        //actions.transferencias(state)}
                        transferencia(state);
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="cc_name">Nombre del Beneficiario</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc_name"
                          pattern="\w+ \w+.*"
                          title="First and last name"
                          required="required"
                          placeholder="Nombre completo de tú Beneficiario o Titular"
                          name="name"
                          onChange={handleChangeTransfer}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cc_name">Número de contacto</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc_name"
                          title="Numero de contacto"
                          required="required"
                          placeholder="Numero de contacto"
                          name="numero"
                          onChange={handleChangeTransfer}
                        />
                      </div>
                      <div className="form-group">
                        <label>Dirección de entrega</label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          maxLength={60}
                          minLength={10}
                          title=""
                          required="required"
                          placeholder="Direccion referencial"
                          name="direccion"
                          onChange={handleChangeTransfer}
                        />
                      </div>

                      <div className="form-group row">
                        <label className="col-md-12">Datos de destino</label>
                        <div className="col-md-2">
                          <select
                            onChange={handleChangeTransfer}
                            className="form-control"
                            name="country"
                            placeholder="país de envío"
                            size={0}
                          >
                            <option value="">Seleccione Pais</option>
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
                          <div className="row">
                            <div className="col-md-4 ">
                              <ConversorTransfer
                                onSelectCurrency={handleCurrencyChange}
                              />
                            </div>

                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                maxLength={20}
                                minLength={3}
                                title="Ingresa Monto enviado al beneficiario min 3 digitos"
                                required
                                placeholder="Monto en pesos chilenos"
                                name="monto"
                                onChange={handleChangeTransfer}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div className="form-group row">
                        <div className="col-md-6">
                          <button
                            type="reset"
                            className="btn btn-danger btn-primary btn-lg"
                          >
                            Cancelar registro
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg btn-block"
                          >
                            Continua tu operación
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-footer-transferencias text-dark">
                Asegúrese de ingresar todos los datos correctamente, ya que de
                lo contrario será imposible validar su transacción.
              </div>
            </div>
            ;{/* Etiquetas de cierre global */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroBeneficiario;
