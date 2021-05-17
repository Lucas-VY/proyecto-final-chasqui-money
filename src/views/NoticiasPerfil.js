import React, { useEffect, useState } from "react";
import "../css/Noticias.css";

import Sidebar from "../components/Sidebar";

const NoticiasPerfil = () => {
  const apiKey = "4c12586d6b7041539e2c141a6084b33b";

  const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`;
  const [noticias, setNoticias] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setNoticias(responseJSON.articles);
    console.log(responseJSON.articles);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div>
            {!noticias
              ? "Cargando..."
              : noticias.map((noticia, index) => {
                  return (
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <a href="/">
                            <img
                              className="img-fluid rounded mb-3 mb-md-0"
                              src={noticia.urlToImage}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-md-6">
                          <h3 id="titulo-noticias-individual">
                            {noticia.title}
                          </h3>
                          <p className="text-justify" id="parrafo-noticias">
                            {noticia.description}
                          </p>
                          <a className="btn btn-primary" href={noticia.url}>
                            Ver Noticia
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticiasPerfil;
