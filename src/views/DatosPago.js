import React from "react";
import Sidebar from "../components/Sidebar";
import "../css/DatosPago.css";

const DatosPago = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="card-pago bg-white">
            <h5 className="card-pago-header">Datos Bancarios</h5>
            <div className="card-pago-body">
              <p className="card-pago-text">Cuenta: Banco Santander</p>
              <p className="card-pago-text">
                Nombre: ChaskiMoney / Rut de empresa: 139.874.874-J
              </p>
              <p className="card-pago-text">
                Número de cuenta: 9497327974 Tipo de Cuenta: Corriente
              </p>
              <p className="card-pago-text">
                Correo electrónico: chaskimoney@gmail.com
              </p>
              <p className="card-pago-text">
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
