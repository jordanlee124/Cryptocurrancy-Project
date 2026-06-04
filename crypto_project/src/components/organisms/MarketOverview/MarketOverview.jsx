import React from "react";
import { Box } from "@mui/material";
import BitcoinChart from "../BitcoinChart/BitcoinChart";
import TopMovers from "../TopMovers/TopMovers";
import { useCryptoList } from "../../../hooks/useCryptoList";

export default function MarketOverview() {
  const { cryptoList, isLoading } = useCryptoList();

  return (
    <Box sx={{
      display: 'flex',
      gap: 2,
      width: '90vw',
      margin: '24px auto 8px',
      alignItems: 'stretch',
    }}>
      <BitcoinChart sx={{ flex: '0 0 60%', minWidth: 0 }} />
      <TopMovers cryptoList={cryptoList} isLoading={isLoading} />
    </Box>
  );
}
