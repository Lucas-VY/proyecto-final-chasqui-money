import React from "react";
import { validateInfo } from "../components/ValidateInfo";
import useForm from "../components/UseForms";
import "../css/Registro.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Registro = () => {
  const result = (mensaje, codigo, response) => {
    if (codigo === 200) {
      alert(mensaje);
      //redireccionar al login
    } else {
      alert("No fue posible registrar: " + mensaje);
    }
  };

  const { handleSubmit, handleChange, values, errors } = useForm(
    result,
    validateInfo,
    {
      name: "",
      last_name: "",
      country: "",
      email: "",
      password: "",
      phone: "",
    },
    "user/signup",
    "POST"
  );

  return (
    <>
    <Navbar />


    <div className="container-fluid containerForm">
      <div className="signup-form col-12 col-md-6 ">
        <form onSubmit={handleSubmit} className="form bg-transparent" noValidate>
          <h2 className="text-center text-white mb-4">Regístrate</h2>
          <hr />
          <div className="form-group mt-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user" />
                </span>
              </div>

              {/* NOMBRE  */}
              <input
                className="form-control "
                type="text"
                name="name"
                placeholder="Ingrese tú nombre"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="parrafo">{errors.name}</p>}
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user" />
                </span>
              </div>

              {/* APELLIDO */}
              <input
                className="form-control "
                type="text"
                name="last_name"
                placeholder="Ingrese tú apellido"
                value={values.last_name}
                onChange={handleChange}
              />
            </div>
            {errors.last_name && <p className="parrafo">{errors.last_name}</p>}
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="far fa-flag" />
                </span>
              </div>

            {/* PAIS */}
              <input
                className="form-control "
                type="text"
                name="rut"
                placeholder="Ingrese tú pais"
                value={values.country}
                onChange={handleChange}
              />
            </div>
            {errors.rut && <p className="parrafo">{errors.rut}</p>}
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-paper-plane" />
                </span>
              </div>


              {/* EMAIL */}
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
                  <span className="fas fa-mobile-alt" />
                </span>
              </div>

              {/* CELULAR  */}
              <input
                className="form-control"
                type="texto"
                name="phone"
                placeholder="Nº de teléfono codigo de área más 9 digitos"
                value={values.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && <p className="parrafo">{errors.phone}</p>}
          </div>
          <p className="text-white">Mínimo 8 caracteres</p>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user" />
                </span>
              </div>

              {/* CONTRASEÑA */}
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="ingresa contraseña"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p className="parrafo">{errors.password}</p>}
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user" />
                </span>
              </div>

              {/* CONFIRMACIÓN CONTRASEÑA */}
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
          <div className="form-group">
            <label className="form-check-label mt-4 text-white">
              <input type="checkbox" required="required" /> He leído y acepto
              los <a href="/">Términos y condiciones</a>
            </label>
          </div>
          <div className="form-group d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Registro;
