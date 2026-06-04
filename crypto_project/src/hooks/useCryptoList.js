import { useState, useEffect } from "react";

export function useCryptoList() {
  const [cryptoList, setCryptoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud');
      const data = await response.json();
      setCryptoList(data);
      setIsLoading(false);
    };
    fetchList();
  }, []);

  return { cryptoList, isLoading };
}
