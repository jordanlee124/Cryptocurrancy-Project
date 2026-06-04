import React from "react";
import CoinImage from "../../atoms/CoinImage/CoinImage";
import { CurrencyPaper, CurrencyTypo } from "./CryptoRowStyle";

const col = {
  rank:      { flex: '0 0 5%' },
  coin:      { flex: '0 0 28%', display: 'flex', alignItems: 'center', minWidth: 0 },
  price:     { flex: '0 0 22%' },
  change24h: { flex: '0 0 17%' },
  marketCap: { flex: '0 0 28%' },
};

function fmtAud(val) {
  if (val == null) return null;
  const abs = Math.abs(val);
  const sign = val >= 0 ? '+' : '-';
  return `${sign}$${abs >= 1 ? abs.toLocaleString(undefined, { maximumFractionDigits: 2 }) : abs.toFixed(4)}`;
}

export default function CryptoRow({ rank, image, name, price, change24h, changeAud, marketCap, symbol, onClick }) {
  const changeColor = change24h >= 0 ? '#4caf50' : '#f44336';
  const changeLabel = change24h != null
    ? `${change24h >= 0 ? '+' : ''}${change24h.toFixed(2)}%`
    : '—';

  return (
    <CurrencyPaper className={symbol} elevation={8} onClick={onClick} sx={{ cursor: 'pointer', '&:hover': { background: '#1e1e28', borderColor: 'rgba(99,102,241,0.2)' } }}>
      <CurrencyTypo variant="subtitle1">
        <p style={col.rank}>{rank}</p>
        <div style={col.coin}>
          <CoinImage src={image} name={name} />
          <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
        </div>
        <p style={col.price}>${price} AUD</p>
        <div style={{ ...col.change24h }}>
          <p style={{ color: changeColor, margin: 0 }}>{changeLabel}</p>
          {changeAud != null && (
            <p style={{ color: changeColor, margin: 0, fontSize: '0.78em', opacity: 0.75 }}>{fmtAud(changeAud)}</p>
          )}
        </div>
        <p style={col.marketCap}>${marketCap.toLocaleString()} AUD</p>
      </CurrencyTypo>
    </CurrencyPaper>
  );
}
