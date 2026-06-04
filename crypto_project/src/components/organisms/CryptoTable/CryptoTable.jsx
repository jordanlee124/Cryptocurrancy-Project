import React from "react";
import Spinner from "../../atoms/Spinner/Spinner";
import CryptoTableHeader from "../../molecules/CryptoTableHeader/CryptoTableHeader";
import CryptoRow from "../../molecules/CryptoRow/CryptoRow";
import { ListContainer } from "./CryptoTableStyle";
import { useCryptoList } from "../../../hooks/useCryptoList";

export default function CryptoTable() {
  const { cryptoList, isLoading } = useCryptoList();

  return (
    <ListContainer>
      <h1>LIST</h1>
      {!isLoading && <CryptoTableHeader />}
      {isLoading ? (
        <Spinner />
      ) : (
        cryptoList.map((crypto, i) => (
          <CryptoRow
            key={crypto.id}
            rank={i + 1}
            image={crypto.image}
            name={crypto.name}
            price={crypto.current_price}
            marketCap={crypto.market_cap}
            symbol={crypto.symbol}
          />
        ))
      )}
    </ListContainer>
  );
}
