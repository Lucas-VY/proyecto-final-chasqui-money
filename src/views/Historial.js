import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import '../css/Historial.css';




const Historial = () =>{
    return (
        <>
         <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9 mt-5 px-5">
            <div className="row">
              <div className="col-12 mx-5 my-5">
                <div className="card carta-transferencia bg-transparent">
                  <div className="card-body">
                    <h3 className="header-title pb-3 mt-0 text-white">
                      Historial de Pago
                    </h3>
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr className="align-self-center">
                            <th>Nombre de Benificiario</th>
                            <th>ID Comprobante</th>
                            <th>Día de pago</th>
                            <th>Monto</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt=""
                                className="thumb-sm rounded-circle mr-2"
                              />
                              Kevin Heal
                            </td>
                            <td>Nº {}</td>
                            <td>5/8/2018</td>
                            <td>$15,000</td>
                            <td>
                              <span className="badge badge-boxed badge-soft-warning">
                                Pendiente
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                alt=""
                                className="thumb-sm rounded-circle mr-2"
                              />
                              Frank M. Lyons
                            </td>
                            <td>Nº {}</td>
                            <td>15/7/2018</td>
                            <td>$35,000</td>
                            <td>
                              <span className="badge badge-boxed badge-soft-primary">
                                Aceptado
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                alt=""
                                className="thumb-sm rounded-circle mr-2"
                              />
                              Angelo Butler
                            </td>
                            <td>Nº {}</td>
                            <td>30/9/2018</td>
                            <td>$45,000</td>
                            <td>
                              <span className="badge badge-boxed badge-soft-warning">
                                Pendiente
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                alt=""
                                className="thumb-sm rounded-circle mr-2"
                              />
                              Phillip Morse
                            </td>
                            <td>Nº {}</td>
                            <td>2/6/2018</td>
                            <td>$70,000</td>
                            <td>
                              <span className="badge badge-boxed badge-soft-primary">
                                Aceptado
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                alt=""
                                className="thumb-sm rounded-circle mr-2"
                              />
                              Kevin Heal
                            </td>
                            <td>Nº {}</td>
                            <td>5/8/2018</td>
                            <td>$15,000</td>
                            <td>
                              <span className="badge badge-boxed badge-soft-warning">
                                Pendiente
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                alt=""
                                className="thumb-sm rounded-circle mr-2"
                              />
                              Frank M. Lyons
                            </td>
                            <td>Nº {}</td>
                            <td>15/7/2018</td>
                            <td>$35,000</td>
                            <td>
                              <span className="badge badge-boxed badge-soft-primary">
                                Aceptado
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*end table-responsive*/}
                    <div className="pt-3 border-top text-right">
                      <p className="text-white">confirma con nosotros enviando tu ID de comprobante a través de Whatsapp</p>
                      <a href="https://wa.me/56937410583?text=Hola,%20te%20hago%20envio%20de%20mi%20codigo%20de%20transferencia" className="btn btn-success btn-sm">
                        <i className="fab fa-whatsapp fa-lg"> Confirma Aquí</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Historial;


/* https://wa.me/56937410583?text=Hola,%20te%20hago%20envio%20de%20mi%20codigo%20de%20transferencia */