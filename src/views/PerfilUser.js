import React, { useState, useEffect } from "react";
//import { useLocalStorage } from "../components/useLocalStorage";

import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

import "../css/PerfilUser.css";
import avatar_mono from "../assets/avatar_mono.png";
import Sidebar from "../components/Sidebar";


/* cambiar a funcion para usar los hooks */
const PerfilUser = () => {
  const { store } = useContext(Context);
  const [ user , setUser] = useState("");

   useEffect(() => {
    if (store.currentUser !== null) {
      let usuario = store.currentUser.resultado;
      setUser(usuario);
      console.log(usuario)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[] ) 




  /* HOOK PERSONALIZADO guarda texto en Local STORAGE se usa aplicandoselo a un value */
  /*   const [text, setText] = useLocalStorage("fullname", "");
   */
  /* ACTUALIZA VALORES DEL PERFIL y guarda en LOCALSTORAGE*/
  /*  USAR EL STATE EN EL LUGAR DONDE SE Quiere CAMBIAR  */
  /* const [fullName, setFullName] = useLocalStorage('fullname', '');
  const [country, setCountry] = useLocalStorage('country', '')
  const [movil, setMovil] = useLocalStorage('movil', '')
  const [address, setAddress] = useLocalStorage("address", '')
  const [email, setEmail] = useLocalStorage('email', '') */

  

  return(
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
                    <h3 className="text-white">Bienvenido a tú Perfil</h3>
                    <img
                      src={avatar_mono}
                      alt="Admin"
                      className="rounded-circle bg-transparent"
                      width={150}
                      height={135}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* DATOS DE USUARIO */}

            <div className="col-12 my-2 col-lg-7 col-xl-8">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div className="row">
                    <div className="inputbox col-12 mt-4 text-white">
                      <h5>Nombre: {user.name}</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="inputbox col-12 mt-4 text-white">
                      <h5>Apellido: {user.last_name}</h5>
                    </div>
                  </div>

                  <div className="row">
                    <div className="inputbox col-12 mt-3">
                      <p className="text-white mb-1">
                        Teléfono: {user.phone}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="inputbox col-12 mt-4">
                      <p className="text-white mb-1">
                        Email: {user.email}
                      </p>
                    </div>
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
                      <i className="material-icons text-white mr-2">
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
                    <i className="material-icons text-white mr-2">
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
                    <i className="material-icons text-white mr-2">
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
  )

};

export default PerfilUser;







