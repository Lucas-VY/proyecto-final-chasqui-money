import React, { useEffect, useState } from "react";
import "../components/Conversor.css";

const BASE_URL = "https://free.currconv.com/api/v7";
/* https://free.currconv.com/api/v7 */
const API_KEY = "2f01dcf43562e77ad5d4";

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
      <form>
        <div className="form-group">
          <input
            className="input form-control"
            type="number"
            value={amount}
            onChange={onChangeAmount}
          />
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Opciones
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
    </>
  );
}

/* original */
/* <input
  type="number"
  className="input"
  value={amount}
  onChange={onChangeAmount}
/>
<select value={selectedCurrency} onChange={onChangeCurrency}>
  {currencyOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select> */

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
        setFromCurrency("USD");
        setToCurrency("CLP");
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
    </>
  );
}

export default Conversor;
