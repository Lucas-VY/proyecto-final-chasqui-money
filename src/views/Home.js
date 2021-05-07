import { Link } from "react-router-dom";
//import CarrouselNoticias from "../components/CarrouselNotice";
import Conversor from "../components/Conversor";
import "../css/Home.css";

const Home = () => {
  return (
    <>




      <div className="container-fluid">
        <div className="row d-flex justify-content-center jumbo">
          <main className="main">
            <header className="header">
              <h1 className="header__title">Currency Converter</h1>
              <p className="header__paragraph">
                Fast and secure currency exchange
    </p>
            </header>
            <form className="form js-form">
              <fieldset>
                <legend>
                  From
      </legend>
                <select className="form__select js-firstSelect">
                  <option>PLN</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
                <input className="form__field js-firstInput" type="number" name="buy" defaultValue={100} />
              </fieldset>
              <button className="form__button">&lt;&gt;</button>
              <fieldset>
                <legend>To</legend>
                <select className="form__select js-secondSelect">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>PLN</option>
                </select>
                <div className="form__result js-result">25.23</div>
              </fieldset>
              <button className="form__button js-submit">Exchange</button>
            </form>
          </main>

        </div>
      </div>


      {/* BANNERS */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card-counter primary">
              <i className="fas fa-coins" />
              <span className="count-numbers">200</span>
              <span className="count-name">Monedas</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter danger">
              <i className="fas fa-handshake" />
              <span className="count-numbers">+1M</span>
              <span className="count-name">Transferencias</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter success">
              <i className="fa fa-database" />
              <span className="count-numbers">+400K</span>
              <span className="count-name">Data</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter info">
              <i className="fa fa-users" />
              <span className="count-numbers">+500K</span>
              <span className="count-name">Usuarios</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
