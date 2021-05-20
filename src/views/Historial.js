//import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../css/Historial.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import astronaut from "../assets/astronaut.gif";

const Historial = () => {
  const { store } = useContext(Context);

  const url = `http://127.0.0.1:5000/user/card/${store.currentUser.resultado.id}`;
  const [historial, setHistorial] = useState();
  const fetchApi = async (url) => {
    const response = await fetch(url);
    console.log(response);
    const responseJSON = await response.json();
    setHistorial(responseJSON.resultado);
    //console.log(responseJSON);
    //console.table(responseJSON);
  };

  useEffect(() => {
    fetchApi(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* DATOS DEL BACKEND de transferencia */
  /* card= Card()
                card.full_name=full_name
                card.country=country
                card.bank_payment=bank_payment
                card.account_number=account_number
                card.money_send=money_send
                card.transaction_code=transaction_code
                card.date=date
                card.number_transfer=number_transfer
                card.user_id= user_id
                #card.addressee_id=addressee_id
                card.save()*/

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
                    {/* HEADER DE LA TABLA */}
                    <h3 className="header-title pb-3 mt-0 text-white">
                      Historial de Pago
                    </h3>
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr className="align-self-center">
                            <th>Beneficiario</th>
                            <th>Nº Comprobante</th>
                            <th>Fecha</th>
                            <th>Divisa</th>
                            <th>Monto</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        {/* TABLE BODY  */}
                        {!!historial ? (
                          historial.map((historial, index) => {
                            return (
                              <>
                                <tbody key={index}>
                                  <tr>
                                    <td>
                                      {/* FOTO AVATAR  */}
                                      <img
                                        className="thumb-sm rounded-circle mr-2"
                                        src={astronaut}
                                        alt=""
                                      />
                                      {historial.full_name}
                                    </td>
                                    <td>Nº{historial.number_transfer}</td>
                                    <td>{historial.date}</td>
                                    <td>{historial.money}</td>
                                    <td>${historial.money_send}</td>
                                    <td>
                                      <span className="badge badge-boxed badge-soft-primary">
                                        Aceptado
                                      </span>
                                    </td>
                                  </tr>
                                  {/*  */}
                                </tbody>
                              </>
                            );
                          })
                        ) : (
                          <tbody>
                            <tr>
                              <td>
                                No Hay transferencias realizadas de momento...
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        )}
                        ;
                      </table>
                    </div>
                    {/*end table-responsive*/}
                    <div className="pt-3 border-top text-right">
                      <p className="text-white">
                        confirma con nosotros enviando tu ID de comprobante a
                        través de Whatsapp
                      </p>
                      <a
                        href="https://wa.me/56937410583?text=Hola,%20te%20hago%20envio%20de%20mi%20codigo%20de%20transferencia"
                        className="btn btn-success btn-sm"
                      >
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
  );
};

export default Historial;

/* https://wa.me/56937410583?text=Hola,%20te%20hago%20envio%20de%20mi%20codigo%20de%20transferencia */

// eslint-disable-next-line no-lone-blocks
{
  /* {!!store.historial &&
                      store.historial.results.map((valor, i) => { */
}
// eslint-disable-next-line no-lone-blocks
{
  /*                              <tr>
                                    <td>
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                        alt=""
                                        className="thumb-sm rounded-circle mr-2"
                                      />
                                      {historial.full_name}
                                    </td>
                                    <td>Nº { }</td>
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
                                      {historial.full_name}
                                    </td>
                                    <td>Nº { }</td>
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
                                      {historial.full_name}
                                    </td>
                                    <td>Nº { }</td>
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
                                      {historial.full_name}
                                    </td>
                                    <td>Nº { }</td>
                                    <td>15/7/2018</td>
                                    <td>$35,000</td>
                                    <td>
                                      <span className="badge badge-boxed badge-soft-primary">
                                        Aceptado
                              </span>
                                    </td>
                                  </tr> */
}
