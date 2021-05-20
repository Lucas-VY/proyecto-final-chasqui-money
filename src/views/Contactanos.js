import React, { useState, useContext } from "react";
import { validateInfo } from "../components/ValidateInfo";
import "../css/Contactanos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../store/appContext";

export const Contactanos = (props) => {
  const { actions } = useContext(Context);

  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTexto, setInputTexto] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "name") {
      setInputName(value);
    } else if (name === "last_name") {
      setInputLastName(value);
    } else if (name === "email") {
      setInputEmail(value);
    } else if (name === "texto") {
      setInputTexto(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting === false) {
      const errores = validateInfo({
        name: inputName,
        last_name: inputLastName,
        email: inputEmail,
        texto: inputTexto,
      });
      console.log("esta registrando");
      if (Object.keys(errores).length === 0) {
        setIsSubmitting(true);

        actions
          .contactanos({
            name: inputName,
            last_name: inputLastName,
            email: inputEmail,
            texto: inputTexto,
          })
          .then((result) => {
            props.history.push("/home");
          });
      }

      setErrors(errores);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid containerForm">
        <div className="signup-form col-12 col-md-6 ">
          <form
            onSubmit={handleSubmit}
            className="form bg-transparent"
            noValidate
          >
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
                  value={inputName}
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
                  value={inputLastName}
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
                  value={inputEmail}
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
                  name="texto"
                  value={inputTexto}
                  onChange={handleChange}
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
