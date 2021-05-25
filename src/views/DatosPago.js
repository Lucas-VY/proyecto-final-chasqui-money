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

          <div className="col-12 col-md-9 mt-2 mb-3 px-5">
            {/* BODY AQUI */}
            <div className="container d-flex justify-content-center">
              <div className="card-datos shaodw-lg card-datos-1">
                <div className="card-datos-header pt-3 pb-0 ml-auto border-0 ">
                  {" "}
                  <svg
                    className=" cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={20}
                    height={20}
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                  >
                    <g
                      fill="none"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth={1}
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit={10}
                      strokeDasharray
                      strokeDashoffset={0}
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none" />
                      <g fill="#ffffff">
                        <path d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z" />
                      </g>
                    </g>
                  </svg>{" "}
                </div>
                <div className="card-datos-body d-flex pt-0">
                  <div className="row no-gutters mx-auto justify-content-start flex-sm-row flex-column">
                    <div className="col-md-4 text-center">
                      <img
                        className="irc_mi img-fluid mr-0"
                        src="https://cdn4.iconfinder.com/data/icons/logistics-delivery-2-5/64/137-512.png"
                        alt=""
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="col-md-8 ">
                      <div className="card-datos-datos border-0 ">
                        <div className="card-datos-datos-body">
                          <h4 className="card-datos-datos-title text-center  ">
                            <b>Datos Bancarios</b>
                          </h4>
                          <p className="card-datos-datos-text"></p>
                          <h5 className="text-center">Chaski Money</h5>
                          <p>Banco Santander</p>
                          <p>Cuenta Corriente</p>
                          <p>RUT: 264639739-K </p>
                          <p>Nº de Cuenta : 13249793902 </p>
                          <p>Correo : chaskimoney@gmail.com</p>

                          <p className="text-justify text-center">
                            Una vez hecho el pago, presiona el botón para enviar
                            tu comprobante y afinar los detalles de entrega de
                            tu operación
                          </p>
                          <a
                            href="https://wa.me/56937410583?text=Hola,%20te%20hago%20envio%20de%20mi%20codigo%20de%20transferencia"
                            className="d-flex justify-content-center btn btn-counter btn-primary btn-sm"
                            id="botonConfirma"
                          >
                            <i className="fab fa-whatsapp fa-lg" id="whatsapp">
                              <div>Confirma Aquí</div>
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default DatosPago;
