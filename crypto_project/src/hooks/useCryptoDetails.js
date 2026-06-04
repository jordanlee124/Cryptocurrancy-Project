import { useState, useEffect } from "react";

export function useCryptoDetails(id) {
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchCoin = async () => {
      setIsLoading(true);
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      const data = await response.json();
      setCoin(data);
      setIsLoading(false);
    };
    fetchCoin();
  }, [id]);

  return { coin, isLoading };
}
