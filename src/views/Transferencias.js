import React, { useEffect, useState } from "react";
import "../components/Conversor.css";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import "../css/Transferencias.css";

const BASE_URL = "https://free.currconv.com/api/v7";
/* https://free.currconv.com/api/v7 */
const API_KEY = "dfc9992e0825057dddf8";
//2f01dcf43562e77ad5d4
function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <>
      <div classNameName="container-fluid">
        <div classNameName="row">
          <div classNameName="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="col-xs-12 col-md-8 col-lg-4 ">
            <form>
              <div className="form-group">
                <input
                  className="input-calculo form-control"
                  type="number"
                  value={amount}
                  onChange={onChangeAmount}
                />
                <div className="input-group-calculo mb-2">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Moneda
                    </label>
                  </div>
                  <select
                    className="custom-select text-success"
                    id="inputGroupSelect01"
                    value={selectedCurrency}
                    maxLength={5}
                    onChange={onChangeCurrency}
                  >
                    {currencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>

          {/* Cierre etiquetas sidebar */}
        </div>
      </div>
    </>
  );
}

function Conversor() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount =
      Math.round(amount * exchangeRate) * 0.05 * -1 +
      Math.round(exchangeRate * amount);
  }

  useEffect(() => {
    fetch(`${BASE_URL}/currencies?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setCurrencyOptions(Object.keys(data.results));
        setFromCurrency("CLP");
        setToCurrency("USD");
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `${BASE_URL}/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data[`${fromCurrency}_${toCurrency}`]));
    }
  }, [fromCurrency, toCurrency]);
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }
  /*  ARREGLAR QUE LAS SELECCIONES DE MONEDAS NO SEAN GIGANTES Y SE PUEDAN HACER SCROLL DE FORMA MAS ACOTADA */
  return (
    <>
      <div className="col-12 col-md-9 mt-5 px-5">
        <div className="card-calculo text-center bg-white">
          <div className="card-calculo-header"></div>
          <div className="card-calculo-body">
            <h5 className="card-calculo-title pt-2">
              Realiza el cálculo de tu envío
            </h5>
            <form action="">
              <legend>Tu envías</legend>
              <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
              />
              <br></br>
              <legend>Tu beneficiario recibe</legend>
              <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={(e) => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
              />
            </form>
            <Link
              to="/user/transferencias/registro-beneficiario"
              className="btn btn-counter btn-primary btn-lg mb-4"
            >
              Continua tu operación
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversor;
