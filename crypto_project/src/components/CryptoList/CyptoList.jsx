import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/Spinner";
import {
  // Paper,
  Typography
} from "@mui/material";
import { CurrencyPaper, CurrencyTypo, ListContainer } from "./CryptoListStyle";

export default function CryptoList () {
  const [loadingList, setLoadingList] = useState(false);
  const [cryptoList, setCryptoList] = useState([]);


  const getCryptoList = async () => {
    setLoadingList(true);
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud');
    const data = await response.json();
    setCryptoList(data);
    console.log(data);
    setLoadingList(false);
  }

  useEffect(() => {
    getCryptoList();
  }, [])

  return (
    <ListContainer>
      <h1>LIST</h1>
      {!loadingList && 
        <CurrencyPaper
          elevation={8}
        >
          <CurrencyTypo variant="subtitle1">
            <p style={{flex: "1 1 0"}}>#no.</p>
            <p style={{flex: "11 1 0"}}>Coin</p>
            <p style={{flex: "12 1 0"}}>Price</p>
            <p style={{flex: "13 1 0"}}>Market Cap</p>
          </CurrencyTypo>
        </CurrencyPaper>
      }
      {loadingList ? <LoadingSpinner/> : cryptoList.map((crypto, i) => (
        <CurrencyPaper
          key={i}
          className={crypto.symbol}
          elevation={8}
        >
          <CurrencyTypo variant="subtitle1">
            <p style={{flex: "1 1 0"}}>{i + 1}</p>
            <div style={{ display: 'flex', alignItems: 'center', flex: '11 1 0' }}>
              <img src={crypto.image} alt="image" style={{ height: '30px', width: '30px', marginRight: '10px'}}/>
              <p style={{flex: '3 1 0'}}>{crypto.name}</p>
            </div>
            <p style={{flex: "12 1 0"}}>{crypto.current_price} AUD</p>
            <p style={{flex: "13 1 0"}}>{crypto.market_cap}</p>
          </CurrencyTypo>
        </CurrencyPaper>
      ))}
    </ListContainer>
  )
}