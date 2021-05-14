import React, { useContext, useState } from "react";
import { validateLogin } from "../components/ValidateInfo";
//import useForm from "../components/UseForms";
import { Link } from "react-router-dom";
import "../css/InicioSesion.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../store/appContext";

export const InicioSesion = (props) => {
  const { actions } = useContext(Context);

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword2, setInputPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [inputRecordar, setInputRecordar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, value);
    if (name === "email") {
      setInputEmail(value);
    } else if (name === "password2") {
      setInputPassword2(value);
    } else if (name === "recordar") {
      setInputRecordar(checked);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting === false) {
      const errores = validateLogin({
        email: inputEmail,
        password2: inputPassword2,
      });

      console.log("esta registrando");
      if (Object.keys(errores).length === 0) {
        setIsSubmitting(true);

        actions
          .inicioSesion({
            email: inputEmail,
            password2: inputPassword2,
          })
          .then((result) => {
            props.history.push("/user/profile/");
          });
      }

      setErrors(errores);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid containerForm">
        <div className="signup-form col-12 col-md-6">
          <form
            onSubmit={handleSubmit}
            className="form bg-transparent"
            noValidate
          >
            <h2 className="text-center text-white mb-4">Ingresa</h2>
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
                  value={inputEmail}
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
                  placeholder="confirmar contraseña"
                  value={inputPassword2}
                  onChange={handleChange}
                />
              </div>
              {errors.password2 && (
                <p className="parrafo">{errors.password2}</p>
              )}
            </div>
            <div className="form-group" style={{ marginLeft: "100px" }}>
              <label className="form-check-label mt-4 text-white">
                <input
                  type="checkbox"
                  required="required"
                  name="recordar"
                  checked={inputRecordar}
                  onChange={handleChange}
                />{" "}
                Recordar usuario
              </label>
            </div>
            <div className="text-center mb-2">
              <Link className="text-center" to="">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg"
                to="/user/profile"
                type="submit"
              >
                Ingresar
              </button>
            </div>
            <div className="text-center mt-5 text-white">
              <p className="mb-0 text-white">¿No estas registrado?</p>
              <Link className="text-center mt-0" to="/registrate">
                Regístrate aqui
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
