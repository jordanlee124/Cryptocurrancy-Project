import React from "react";
import CryptoList from "../components/CryptoList/CyptoList";
import Navbar from "../components/Navbar/Navbar";

export default function Home () {

  const requestIt = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <Navbar/>
      <CryptoList/>
    </>
  )
}