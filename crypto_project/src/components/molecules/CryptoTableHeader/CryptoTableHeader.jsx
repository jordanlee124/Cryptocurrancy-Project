import React from "react";
import { CurrencyPaper, CurrencyTypo } from "../CryptoRow/CryptoRowStyle";

export default function CryptoTableHeader() {
  return (
    <CurrencyPaper elevation={8}>
      <CurrencyTypo variant="subtitle1">
        <p style={{ flex: "1 1 0" }}>#no.</p>
        <p style={{ flex: "11 1 0" }}>Coin</p>
        <p style={{ flex: "12 1 0" }}>Price</p>
        <p style={{ flex: "13 1 0" }}>Market Cap</p>
      </CurrencyTypo>
    </CurrencyPaper>
  );
}
