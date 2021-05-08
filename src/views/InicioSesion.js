//import React, { useContext } from "react";
import { validateLogin } from "../components/ValidateInfo";
import useForm from "../components/UseForms";
import { Link } from "react-router-dom";
import "../css/InicioSesion.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const InicioSesion = () => {
  const result = (mensaje, codigo, json) => {
    if (codigo === 200) {
      alert("Bienvenido " + json.user.name);
      //redireccionar al login
    } else {
      alert("No fue posible registrar: " + mensaje);
    }
  };
  const { handleSubmit, handleChange, values, errors } = useForm(
    result,
    validateLogin,
    {
      email: "",
      password: "",
    },
    "user/signin",
    "POST"
  );

  return (
    <>
  <Navbar />

    <div className="container-fluid containerForm">
      <div className="signup-form col-12 col-md-6">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h2 className="text-center mb-4">Ingresa</h2>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-paper-plane" />
                </span>
              </div>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="ingrese email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="parrafo">{errors.email}</p>}
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user" />
                </span>
              </div>
              <input
                className="form-control"
                type="password"
                name="password2"
                placeholder="confirma contraseña"
                value={values.password2}
                onChange={handleChange}
              />
            </div>
            {errors.password2 && <p className="parrafo">{errors.password2}</p>}
          </div>
          <div className="form-group" style={{ marginLeft: "100px" }}>
            <label className="form-check-label mt-4">
              <input type="checkbox" required="required" /> Recordar usurario
            </label>
          </div>
          <div className="text-center mb-2">
            <Link className="text-center" to="">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="form-group d-flex justify-content-center">
            <button className="btn btn-primary btn-lg" to="/UserView2" type="submit" >
              Ingresar
            </button>
          </div>
          <div className="text-center mt-5">
            <p className="mb-0">¿No estas registrado?</p>
            <Link className="text-center mt-0" to="/registrate">
              Regístrate aqui!
            </Link>
          </div>
        </form>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default InicioSesion;
