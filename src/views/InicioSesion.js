import React, { useContext, useState, useEffect } from "react";
//import { validateLogin } from "../components/ValidateInfo";
//import useForm from "../components/UseForms";
import { Link } from "react-router-dom";
import "../css/InicioSesion.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../store/appContext";

export const InicioSesion = (props) => {
  const { store, actions } = useContext(Context);

  //const [inputEmail, /* setInputEmail */] = useState("");
  //const [inputPassword2, /* setInputPassword2 */] = useState("");
  const [errors, /* setErrors */] = useState({});
  const [inputRecordar, /* setInputRecordar */] = useState(false);
 // const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    if (store.isLogged) props.history.push("/user/profile");
  }, [props.history, store.isLogged]);

  /* const handleChange = (e) => {
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
 */

  /* const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting === false) {
      const errores = validateLogin({
        email: inputEmail,
        password2: inputPassword2,
      });

      if (Object.keys(errores).length === 0) {
        setIsSubmitting(true);

        actions
          .inicioSesion({
            email: inputEmail,
            password2: inputPassword2,
          })
      }

      setErrors(errores);
    }
  }; */

  useEffect(() => {
    if (store.isLogged) props.history.push("/user/profile");
  }, [props.history, store.isLogged]);
    

  return (
    <>
    
      <Navbar />

      <div className="container-fluid">
        <div className="signup-form col-12 col-md-6">
          <form
            /* onSubmit={handleSubmit} */
            onSubmit={(e) =>
              actions.handleSubmitLogin(e, props.history)
            }
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
                  placeholder="Ingrese email"
                  /* value={inputEmail} */
                  onChange={(e) => actions.handleChange(e)}
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
                  name="password"
                  placeholder="Ingrese contraseña"
                  /* value={inputPassword2} */
                  onChange={(e) => actions.handleChange(e)}
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
                  onChange={(e) => actions.handleChange(e)}
                />{" "}
                Recordar usuario
              </label>
            </div>
            <div className="text-center mb-2">
              <Link className="text-center" to="">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* PRUEBA DE USUARIO DINAMICO  */}
            <div className="form-group d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg"
                type="submit"
                /* to="/user/profile/" */
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
