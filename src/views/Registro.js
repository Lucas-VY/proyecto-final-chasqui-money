import React, { useState, useContext } from "react";
import { validateInfo } from "../components/ValidateInfo";
import "../css/Registro.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const Registro = (props) => {
  /* const mostrarAlerta = () => {
    swal({
      text: "registro exitoso",
    });
  }; */
  const { actions } = useContext(Context);

  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPassword2, setInputPassword2] = useState("");
  const [inputTerminos, setInputTerminos] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, value);
    if (name === "name") {
      setInputName(value);
    } else if (name === "last_name") {
      setInputLastName(value);
    } else if (name === "email") {
      setInputEmail(value);
    } else if (name === "phone") {
      setInputPhone(value);
    } else if (name === "password") {
      setInputPassword(value);
    } else if (name === "password2") {
      setInputPassword2(value);
    } else if (name === "terminos") {
      setInputTerminos(checked);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting === false) {
      const errores = validateInfo({
        name: inputName,
        last_name: inputLastName,
        email: inputEmail,
        phone: inputPhone,
        password: inputPassword,
        password2: inputPassword2,
      });
      console.log("esta registrando");
      if (Object.keys(errores).length === 0 && inputTerminos === true) {
        setIsSubmitting(true);

        actions
          .registro({
            name: inputName,
            last_name: inputLastName,
            email: inputEmail,
            phone: inputPhone,
            password: inputPassword,
            password2: inputPassword2,
          })
          .then((result) => {
            props.history.push("/inicio-sesion");
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
            <h2 className="text-center text-white mb-1">Reg??strate</h2>
            <hr />
            <div className="form-group">
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
                  placeholder="Ingrese Nombre"
                  //value={inputName}
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
                  placeholder="Ingrese Apellido"
                  //value={inputLastName}
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
                    <span className="far fa-flag" />
                  </span>
                </div>

                {/* EMAIL */}
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Ingrese Email"
                  // value={inputEmail}
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
                  placeholder="N?? de tel??fono codigo de ??rea m??s 9 digitos"
                  // value={inputPhone}
                  onChange={handleChange}
                />
              </div>
              {errors.phone && <p className="parrafo">{errors.phone}</p>}
            </div>
            <p className="text-white">M??nimo 8 caracteres</p>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fa fa-user" />
                  </span>
                </div>

                {/* CONTRASE??A */}
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Ingrese Contrase??a"
                  // value={inputPassword}
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

                {/* CONFIRMACI??N CONTRASE??A */}
                <input
                  className="form-control"
                  type="password"
                  name="password2"
                  placeholder="Confirmar Contrase??a"
                  // value={inputPassword2}
                  onChange={handleChange}
                />
              </div>
              {errors.password2 && (
                <p className="parrafo">{errors.password2}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-check-label mt-2 text-white">
                <input
                  type="checkbox"
                  required="required"
                  name="terminos"
                  checked={inputTerminos}
                  onChange={handleChange}
                />
                He le??do y acepto los <a href="/">T??rminos y condiciones</a>
              </label>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button
                //onClick={() => mostrarAlerta()}
                type="submit"
                className="btn btn-primary btn-lg"
              >
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
