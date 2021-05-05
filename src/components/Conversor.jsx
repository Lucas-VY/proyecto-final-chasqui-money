import React, { useEffect, useState } from "react";

const BASE_URL = "https://free.currconv.com/api/v7";
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
    <div>
      <input
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

  return (
    <>
      <div className="col-sm-6">
        <div className="card bg-transparent border-none">
          <div className="card-body">
            <h5 className="card-title">Convierte tu Moneda</h5>
            <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
            />
             <div className="equals">=</div>
             <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
        />
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversor;
