import React from "react";
import CoinImage from "../../atoms/CoinImage/CoinImage";
import { CurrencyPaper, CurrencyTypo } from "./CryptoRowStyle";

export default function CryptoRow({ rank, image, name, price, marketCap, symbol }) {
  return (
    <CurrencyPaper className={symbol} elevation={8}>
      <CurrencyTypo variant="subtitle1">
        <p style={{ flex: "1 1 0" }}>{rank}</p>
        <div style={{ display: 'flex', alignItems: 'center', flex: '11 1 0' }}>
          <CoinImage src={image} name={name} />
          <p style={{ flex: '3 1 0' }}>{name}</p>
        </div>
        <p style={{ flex: "12 1 0" }}>{price} AUD</p>
        <p style={{ flex: "13 1 0" }}>{marketCap}</p>
      </CurrencyTypo>
    </CurrencyPaper>
  );
}
