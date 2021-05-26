import React, { useState, useContext } from "react";
import { validateInfoContacto } from "../components/ValidateInfo";
import "../css/Contactanos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import emailjs from 'emailjs-com';

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

     const mostrarAlerta = () => {
    swal({
      text: "Mensaje enviado correctamente",
    });
  }; 
    e.preventDefault();

    

    if (isSubmitting === false) {
      const errores = validateInfoContacto({
        name: inputName,
        last_name: inputLastName,
        email: inputEmail,
        texto: inputTexto,
      });
      console.log("esta registrando");
      if (Object.keys(errores).length === 0) {
        setIsSubmitting(true);

        /*  emailjs.sendForm('service_95ngkfb', 'template_957bnbh', e.target, 'user_krKMr1WDCaacehqACU5km')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });  */

        mostrarAlerta()
        setInputName("")
        setInputLastName("")
        setInputTexto("")
        setInputEmail("")
        props.history.push("/");

        /* actions
          .contactanos({
            name: inputName,
            last_name: inputLastName,
            email: inputEmail,
            texto: inputTexto,
          })
          .then((result) => {
            props.history.push("/home");
          }); */
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
                  placeholder="Ingrese Nombre"
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
                  placeholder="Ingrese Apellido"
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
                  placeholder="Ingrese Email"
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
              {errors.texto && <p className="parrafo">{errors.texto}</p>}
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
