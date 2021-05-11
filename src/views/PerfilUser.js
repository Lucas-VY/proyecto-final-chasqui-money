import React, { useState } from "react";
import { useLocalStorage } from '../components/useLocalStorage'

import "../css/PerfilUser.css";
import { Link } from "react-router-dom";
import IMG_1020 from "../assets/IMG_1020.JPG";
import Sidebar from "../components/Sidebar";

function PerfilUser(props) {
  /* HOOK PERSONALIZADO guarda texto en Local STORAGE se usa aplicandoselo a un value */
  const [text, setText] = useLocalStorage('text', '');

  const [name, setName] = useState("");


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

        {/*  FOTO Y DATOS DE PERFIL */}
          <div className="col-12 col-md-9 mt-5 px-5">
            <div className="row gutters-sm">
              <div className="col-12 my-2 col-lg-5 col-xl-4">
                <div className="card bg-transparent card-perfil">
                  <div className="card-body perfil">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={IMG_1020}
                        alt="Admin"
                        className="rounded-circle"
                        width={150}
                      />
                      <div className="mt-3 text-white">
                        <h4>Barbara Ulloa</h4>
                        {/* <hr /> */}
                        <p className="text-white mb-1">Nacionalidad: Venezolana</p>
                        <hr />
                        <p className="text-white mb-1">Teléfono Móvil: +569 xxxx xxxx</p>
                        <hr />
                        <p className="text-white mb-1">Direccion: Av Jose miguel carrera 666</p>
                        <hr />
                        <p className="text-white mb-1">
                          País de Residencia: Chile
                        </p>
                       {/*  <br></br> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            {/* INPUTS DE ACTUALIZACION */}
              <div className="col-12 my-2 col-lg-7 col-xl-8">
                <div className="card bg-transparent">
                  <div className="card-body">
                    <div className="row">

                      <div className="inputbox col-12 mt-2">
                        {/* <label className="text-dark">Nombre y Apellido:</label> */}
                        {/* valores deben guardarse en un state */}
                        <input
                          onChange ={ e => setText(e.target.value)}    
                          value={text}
                          placeholder="Nombre y Apellido"
                          type="text"
                          /* ATRIBUTOS TIENEN QUE IR CONECTADOS CON BACKEND  */
                          name=""
                          className="form-control"
                          required="required"
                          
                          />
                          {/* modificar input disabled con use state */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox col-12 mt-2">
                        {/* <label className="text-dark">Email:</label> */}
                        <input
                          placeholder="Email"
                          type="text"
                          /* en name request.json.get // en backend */
                          name="email"
                          className="form-control"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox col-12 mt-2">
                        {/* <label className="text-dark">Teléfono Móvil:</label> */}
                        <input
                          placeholder="Teléfono Móvil"
                          type="text"
                          name=""
                          className="form-control"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox col-12 mt-2">
                        {/* <label className="text-dark">Dirección:</label> */}
                        <input
                          placeholder="Dirección"
                          type="text"
                          name="direccion"
                          className="form-control"
                          required="required"
                        />
                      </div>
                    </div>

                    {/* CONTRASEÑA se modifica con el BACKEND */}
                    <div className="row">
                      <div className="inputbox col-12 mt-2">
                        {/* <label className="text-dark">Contraseña:</label> */}
                        <input
                          placeholder="Nueva Contraseña"
                          type="password"
                          name=""
                          className="form-control"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox col-12 mt-2">
                        {/* <label className="text-dark">Repetir Contraseña:</label> */}
                        <input
                          placeholder="Confirma Contraseña"
                          type="password"
                          name=""
                          className="form-control"
                          required="required"
                        />
                      </div>
                    </div>
                      <div className="row">
                        <button className="btn btn-primary mt-2">
                          Actualizar
                        </button>
                      </div>
                  </div>
                </div>
              </div>

          {/* CARDS CON BARRAS */}
              <div className="col-12 my-2 col-md-6 col-lg-4">
                <div className="card bg-transparent">
                  <div className="card h-100 bg-transparent">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          Bancos de uso frecuente
                        </i>
                      </h6>
                      <small className="text-white">Banco Estado</small>
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
                      <small className="text-white">Banco Santander</small>
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
                      <small className="text-white">Banco de Chile</small>
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
                      <small className="text-white">Banco Falabella</small>
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
                      <small className="text-white">Banco Edwards</small>
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
                <div className="card h-100 bg-transparent">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3">
                      <i className="material-icons text-info mr-2">
                        Actividades
                      </i>
                    </h6>
                    <small className="text-white">Diarias</small>
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
                    <small className="text-white">Mensual</small>
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
                    <small className="text-white">Anual</small>
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
                    <small className="text-white">Dispositivo Movil</small>
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
                    <small className="text-white">Página web</small>
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
                <div className="card h-100 bg-transparent">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3">
                      <i className="material-icons text-info mr-2">
                        Países de Destino
                      </i>
                    </h6>
                    <small className="text-white">Chile</small>
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
                    <small className="text-white">Colombia</small>
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
                    <small className="text-white">Estados Unidos</small>
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
                    <small className="text-white">Perú</small>
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
                    <small className="text-white">Venezuela</small>
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

              {/* CARDS DE ABAJO */}
              <div className="col-12 my-2 col-md-6">
                <div className="card bg-transparent">
                  <div className="card-body">
                    <h5 className="card-title text-white">Revisa</h5>
                    <p className="card-text text-white">
                      Accede a tu historial de transacciones aquí
                    </p>
                    <Link to="/user/historial" className="btn btn-primary">
                      click aquí
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 my-2 col-md-6">
                <div className="card bg-transparent">
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      Realiza tu transacción
                    </h5>
                    <p className="card-text text-white">
                      Dirígite a realizar tu operación, haciendo
                    </p>
                    <Link to="/user/transferencias" className="btn btn-primary">
                      click aquí
                    </Link>
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
