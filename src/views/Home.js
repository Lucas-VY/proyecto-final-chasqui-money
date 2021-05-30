import { Link } from "react-router-dom";
//import CarrouselNoticias from "../components/CarrouselNotice";
import Conversor from "../components/Conversor";
import "../css/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vector_money from "../assets/vector_money.png";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* CONVERSOR */}
      <div className="container-fluid">

        <div className="row d-flex justify-content-center jumbo">

         
          <div className="col-xs-12 col-md-8 col-lg-8 ">
            <div className="jumbotron text-center border-none bg-transparent jumbo">
              <div className="row">
                <div className="col-xs-12 col-mg-8 col-lg-6">

                    <img
                      className="vector my-3 pt-5 mt-5 "
                      src={vector_money}
                      alt=""
                      id="vector-img"
                    />

                </div>

                <div className="col-xs-12 col-mg-8 col-lg-6">
                    <h1 className="header__title">Consulta Tu Cambio</h1>
                    <p className="header__paragraph">
                      Envía dinero rápido y seguro con la comisión mas baja del
                      mercado
                    </p>
                    <p className="header__paragraph">Comisión del 0,5%</p>
                    <Conversor />
                    <hr className="my-2" />
                  </div>
                </div>

                <Link
                  className="btn btn-counter btn-primary btn-lg mt-4"
                  to="/Registrate"
                  role="button"
                >
                  Regístrate Gratis
              </Link>
              </div>
            </div>

        </div>



        <div className="container-fluid">
          <div className="row">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <h1 className="header__title text-center mt-1 pt-3" id="testimonios">Clientes Satisfechos</h1>
                <div className="carousel-item active">
                  <div className="carousel-caption bg-transparent" id="carousel-color">
                    <p id="testimonios">
                      If Shai Reznik's TDD videos don't convince you to add
                      automated testing your code, I don't know what will.This was
                      the very best explanation of frameworks for brginners that
                      I've ever seen. I don't know what will.This was
                      the very best explanation of frameworks for brginners that
                      I've ever seen.
                </p>{" "}
                    <img src="https://i.imgur.com/lE89Aey.jpg" alt="" />
                    <div id="image-caption">Nick Doe</div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption" id="carousel-color">
                    <p id="testimonios">
                      If Shai Reznik's TDD videos don't convince you to add
                      automated testing your code, I don't know what will.This was
                      the very best explanation of frameworks for brginners that
                      I've ever seen. I don't know what will.This was
                      the very best explanation of frameworks for brginners that
                      I've ever seen.
                </p>{" "}
                    <img
                      src="https://i.imgur.com/QptVdsp.jpg"
                      //className="img-fluid"
                      alt=""
                    />
                    <div id="image-caption">Cromption Greves</div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption" id="carousel-color">
                    <p id="testimonios">
                      If Shai Reznik's TDD videos don't convince you to add
                      automated testing your code, I don't know what will.This was
                      the very best explanation of frameworks for brginners that
                      I've ever seen. I don't know what will.This was
                      the very best explanation of frameworks for brginners that
                      I've ever seen.
                </p>{" "}
                    <img
                      //className="img-fluid"
                      src="https://i.imgur.com/jQWThIn.jpg"
                      alt=""
                    />
                    <div id="image-caption">Harry Mon</div>
                  </div>
                </div>
              </div>{" "}
              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                {" "}
                <i className="fas fa-arrow-left" />{" "}
              </a>{" "}
              <a className="carousel-control-next" href="#demo" data-slide="next">
                {" "}
                <i className="fas fa-arrow-right" />{" "}
              </a>
            </div>
          </div>
        </div>



        {/* BANNERS */}
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-xs-12 col-md-3">
              <div className="card-counter primary">
                <i className="fas fa-coins" />
                <span className="count-numbers">200</span>
                <span className="count-name">Monedas</span>
              </div>
            </div>
            <div className="col-xs-2 col-md-3">
              <div className="card-counter danger">
                <i className="fas fa-handshake" />
                <span className="count-numbers">+1M</span>
                <span className="count-name">Transferencias</span>
              </div>
            </div>
            <div className="col-xs-2 col-md-3">
              <div className="card-counter success">
                <i className="fa fa-database" />
                <span className="count-numbers">+400K</span>
                <span className="count-name">Data</span>
              </div>
            </div>
            <div className="col-xs-2 col-md-3">
              <div className="card-counter info">
                <i className="fa fa-users" />
                <span className="count-numbers">+500K</span>
                <span className="count-name">Usuarios</span>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>
  );
};

export default Home;
