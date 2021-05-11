import React from "react";
import { validateInfo } from "../components/ValidateInfo";
import useForm from "../components/UseForms";
import "../css/Contactanos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Contactanos = () => {
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
      rut: "",
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
            <h2 className="text-center text-white mb-4">Contáctanos</h2>
            <hr />
            <div className="form-group mt-5">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fa fa-user" />
                  </span>
                </div>
                <input
                  className="form-control "
                  type="text"
                  name="name"
                  placeholder="ingrese nombre"
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
                <input
                  className="form-control "
                  type="text"
                  name="last_name"
                  placeholder="ingrese apellido"
                  value={values.last_name}
                  onChange={handleChange}
                />
              </div>
              {errors.last_name && (
                <p className="parrafo">{errors.last_name}</p>
              )}
            </div>

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
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-comment"></i>
                  </div>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Envianos tu Mensaje"
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contactanos;
