import React, { useEffect, useState } from "react";
import '../components/Conversor.css';

const BASE_URL = "https://free.currconv.com/api/v7";
/* https://free.currconv.com/api/v7 */
const API_KEY = "2f01dcf43562e77ad5d4";

/* CONVERSOR EN INPUT Y SELECT PARA MONEDAS */
function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <div className="container">
      <input className="input" id="input-conversor" type="number" value={amount} onChange={onChangeAmount}/>

      {/* selector de monedas   */}
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
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
    toAmount = Math.round(amount * exchangeRate);
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
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

<main className="main" id="conversor-home">
        <header className="header">
          <h1 className="header__title">Convierte tu moneda</h1>
          <p className="header__paragraph">
            Rapido y seguro conversor de moneda
          </p>
        </header>
        <form className="form js-form">
          <fieldset>
            <legend>
              Tu envías
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
            <legend>Tu beneficiario recibe</legend>
            <select className="form__select js-secondSelect">
              <option>USD</option>
              <option>EUR</option>
              <option>PLN</option>
            </select>
            <div className="form__result js-result">25.23</div>
          </fieldset>
          <button className="form__button js-submit">registrate gratis</button>
        </form>
      </main>  


         {/* <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
            />
             <br></br>
        <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}/>
 */}
    </>
  );
}

export default Conversor;
