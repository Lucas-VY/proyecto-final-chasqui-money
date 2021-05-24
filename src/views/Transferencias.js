import React, { useState, useContext } from "react";
//import { validateInfo } from "../components/ValidateInfo";
import Sidebar from "../components/Sidebar";
import { Context } from "../store/appContext";
import "../css/Transferencias.css";
import Conversor from "../components/Conversor";

const Transferencias = (props) => {
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
      `http://127.0.0.1:5000/user/card/${
        store.currentUser.resultado.id ? store.currentUser.resultado.id : ""
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
        props.history.push("/user/profile");
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
            <div className="container mt-5">
              <div class="card-operacion text-center">
                <div class="card-operacion-header pb-2">
                  Calcula tu operación
                </div>
                <div class="card-operacion-body">
                  <h5 class="card-operacion-title">Chaski Money</h5>
                  <Conversor />
                  <a
                    href="/user/transferencias/registro-beneficiario"
                    class="btn btn-primary mb-5"
                  >
                    Continua tu operación
                  </a>
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
