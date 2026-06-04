import { useState, useEffect } from "react";

function formatTime(timestamp, days) {
  const date = new Date(timestamp);
  if (days <= 1) return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

export function useCoinChart(coinId, days) {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!coinId) return;
    const fetchChart = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=aud&days=${days}`
      );
      const data = await response.json();
      setChartData(
        data.prices.map(([ts, price]) => ({
          time: formatTime(ts, days),
          price: parseFloat(price.toFixed(6)),
        }))
      );
      setIsLoading(false);
    };
    fetchChart();
  }, [coinId, days]);

  return { chartData, isLoading };
}
