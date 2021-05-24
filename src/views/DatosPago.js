import React, { useState, useContext } from "react";
//import { validateInfo } from "../components/ValidateInfo";
import Sidebar from "../components/Sidebar";
import { Context } from "../store/appContext";
import "../css/Transferencias.css";

const DatosPago = (props) => {
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

          <div className="card">
            <h5 className="card-header">Datos Bancarios</h5>
            <div className="card-body">
              <p className="card-text">Cuenta: Banco Santander</p>
              <p className="card-text">
                Nombre: ChaskiMoney / Rut de empresa: 139.874.874-J
              </p>
              <p className="card-text">
                Número de cuenta: 9497327974 Tipo de Cuenta: Corriente
              </p>
              <p className="card-text">
                Correo electrónico: chaskimoney@gmail.com
              </p>
              <p className="card-text">
                Una vez realizada la transferencia, envía tu capture y afina los
                detalles de entrega
              </p>
              <a
                href="https://wa.me/56937410583?text=Hola,%20te%20hago%20envio%20de%20mi%20codigo%20de%20transferencia"
                className="btn btn-success btn-sm"
              >
                <i className="fab fa-whatsapp fa-lg">Envía tu capture</i>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-9 mt-2 mb-3 px-5">
            {/* BODY AQUI */};{/* Etiquetas de cierre global */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosPago;
