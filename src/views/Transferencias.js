import React from "react";
import Sidebar from "../components/Sidebar";
import "../css/Transferencias.css";
import Conversor from "../components/Conversor";

const Transferencias = (props) => {
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
