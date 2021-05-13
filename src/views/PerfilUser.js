import React, { useState } from "react";
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

import { useLocalStorage } from "../components/useLocalStorage";

import "../css/PerfilUser.css";
import IMG_1020 from "../assets/IMG_1020.JPG";
import Sidebar from "../components/Sidebar";

/* cambiar a funcion para usar los hooks */
const PerfilUser = () => {
  const { store, actions } = useContext(Context);

  /* HOOK PERSONALIZADO guarda texto en Local STORAGE se usa aplicandoselo a un value */
  /* const [text, setText] = useLocalStorage("fullname", ""); */


  /* ACTUALIZA VALORES DEL PERFIL y guarda en LOCALSTORAGE*/
  /*  USAR EL STATE EN EL LUGAR DONDE SE Quiere CAMBIAR  */
/*   const [fullName, setFullName] = useLocalStorage('fullname', '');
  const [country, setCountry] = useLocalStorage('country', '')
  const [movil, setMovil] = useLocalStorage('movil', '')
  const [address, setAddress] = useLocalStorage("address", '')
  const [email, setEmail] = useLocalStorage('email', '') */

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR COMPONENTE CON RESPONSIVE  */}
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

                      {/* poner FOTO ó AVATAR?  */}
                      <img
                        src={IMG_1020}
                        alt="Admin"
                        className="rounded-circle"
                        width={150}
                      />


                  {/* MAPING  */}
                  {!!store.profile && store.profile.map((value, i) =>{
                    return (
                      <>
                      <div className="mt-3 text-white" key={i}>
                        <h5>Nombre: {value.name}</h5>
                        <h5>Apellido: {value.last_name}</h5>
                        <hr />
                        <p className="text-white mb-1">
                          Pais: {value.country}
                        </p>
                        <hr />
                        <p className="text-white mb-1">
                          Teléfono: {value.movil}
                        </p>
                        <hr />
                        <p className="text-white mb-1">
                          Direccion: {value.address}
                        </p>
                        <hr />
                        <p className="text-white mb-1">
                          Email: {value.email}
                        </p>
                        {/*  <br></br> */}
                      </div>
                      </>
                  );
                })}
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
                        {/* valores deben guardarse en un state */}
                        <input
                          /* onChange={e => setFullName(e.target.value)} */
                          /* value={fullName} */
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
                      <div className="inputbox col-12 mt-3">
                        <input
                          /* onChange={e => setCountry(e.target.value)} */
                          placeholder="Pais de residencia"
                          type="text"
                          /* en name request.json.get // en backend */
                          name="country"
                          className="form-control"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox col-12 mt-3">
                        <input
                          /* onChange={e => setEmail(e.target.value)} */
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
                      <div className="inputbox col-12 mt-3">
                        <input
                          /* onChange={e => setMovil(e.target.value)} */
                          placeholder="Teléfono Móvil"
                          type="text"
                          name=""
                          className="form-control"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputbox col-12 mt-3">
                        <input
                          /* onChange={e => setAddress(e.target.value)} */
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
                      <div className="inputbox col-12 mt-4">
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
                      <div className="inputbox col-12 mt-3">
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
                      <button className="btn btn-primary mx-3 mt-3">
                        Actualizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>



              {/* CARDS CON BARRAS ACTIVIDADES FRECUENTES */}
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

              {/* BARRA ACTIVIDADES FRECUENTES  */}
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

              {/*BARRAS DE ACTIVIDADES FRECUENTES TRANSFERENCIAS  */}
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

              {/* CARDS DE ABAJO 1 */}
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

              {/* CARDS DE ABAJO 2 */}
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
}

export default PerfilUser;
