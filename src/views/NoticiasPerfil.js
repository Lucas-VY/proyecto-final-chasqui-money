//import React, { useEffect, useState } from "react";
import "../css/Noticias.css";

import Sidebar from "../components/Sidebar";

/* API NOTICIAS */
//const BASE_URL = "https://newsapi.org/v2/everything?q=keyword&";
//https://newsapi.org/v2/everything?q=keyword&apiKey=4c12586d6b7041539e2c141a6084b33b
//const API_KEY = "4c12586d6b7041539e2c141a6084b33b";

/* function NoticiasApi() {
  const [Noticia, setNoticia] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/everything?q=keyword&${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        setNoticia(Object.keys(data.url));
      });
  }, []);
} */

const NoticiasPerfil = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9 mt-5 px-5">
            {/* Page Heading */}
            <h1 className="my-4" id="titulo-noticias">
              Noticias de interés
            </h1>
            {/* Noticia One */}
            <div className="row">
              <div className="col-lg-7">
                <a href="/">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="http://placehold.it/700x300"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-5">
                <h3 id="titulo-noticias-individual">Noticia One</h3>
                <p className="text-justify" id="parrafo-noticias">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium veniam exercitationem expedita laborum at
                  voluptate. Labore, voluptates totam at aut nemo deserunt rem
                  magni pariatur quos perspiciatis atque eveniet unde.
                </p>
                <a className="btn btn-primary" href="/">
                  View Noticia
                </a>
              </div>
            </div>
            {/* /.row */}
            <hr />
            {/* Noticia Two */}
            <div className="row">
              <div className="col-lg-7">
                <a href="/">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="http://placehold.it/700x300"
                    alt="/"
                  />
                </a>
              </div>
              <div className="col-lg-5">
                <h3 id="titulo-noticias-individual">Noticia Two</h3>
                <p className="text-justify" id="parrafo-noticias">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                  odit velit cumque vero doloremque repellendus distinctio
                  maiores rem expedita a nam vitae modi quidem similique
                  ducimus! Velit, esse totam tempore.
                </p>
                <a className="btn btn-primary" href="/">
                  View Noticia
                </a>
              </div>
            </div>
            {/* /.row */}
            <hr />
            {/* Noticia Three */}
            <div className="row">
              <div className="col-lg-7">
                <a href="/">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="http://placehold.it/700x300"
                    alt="/"
                  />
                </a>
              </div>
              <div className="col-lg-5">
                <h3 id="titulo-noticias-individual">Noticia Three</h3>
                <p className="text-justify" id="parrafo-noticias">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis, temporibus, dolores, at, praesentium ut unde
                  repudiandae voluptatum sit ab debitis suscipit fugiat natus
                  velit excepturi amet commodi deleniti alias possimus!
                </p>
                <a className="btn btn-primary" href="/">
                  View Noticia
                </a>
              </div>
            </div>
            {/* /.row */}
            <hr />
            {/* Noticia Four */}
            <div className="row">
              <div className="col-lg-7">
                <a href="/">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="http://placehold.it/700x300"
                    alt="/"
                  />
                </a>
              </div>
              <div className="col-lg-5">
                <h3 id="titulo-noticias-individual">Noticia Four</h3>
                <p className="text-justify" id="parrafo-noticias">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, quidem, consectetur, officia rem officiis illum
                  aliquam perspiciatis aspernatur quod modi hic nemo qui soluta
                  aut eius fugit quam in suscipit?
                </p>
                <a className="btn btn-primary" href="/">
                  View Noticia
                </a>
              </div>
            </div>
            {/* /.row */}
            <hr />
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticiasPerfil;
