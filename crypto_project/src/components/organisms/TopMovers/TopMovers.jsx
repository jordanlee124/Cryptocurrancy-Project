import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Spinner from "../../atoms/Spinner/Spinner";

function fmtAud(val) {
  if (val == null) return null;
  const abs = Math.abs(val);
  const sign = val >= 0 ? '+' : '-';
  return `${sign}$${abs >= 1 ? abs.toLocaleString(undefined, { maximumFractionDigits: 2 }) : abs.toFixed(4)}`;
}

function MoverRow({ coin, navigate }) {
  const change = coin.price_change_percentage_24h;
  const changeColor = change >= 0 ? '#4caf50' : '#f44336';
  return (
    <Box
      onClick={() => navigate(`/crypto/${coin.id}`)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: '9px',
        px: '8px',
        mx: '-8px',
        borderRadius: '8px',
        cursor: 'pointer',
        '&:hover': { background: 'rgba(255,255,255,0.04)' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
        <img src={coin.image} alt={coin.name} style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0 }} />
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="body2" sx={{ color: '#e2e2e2', fontWeight: 600, lineHeight: 1.2 }}>
            {coin.symbol.toUpperCase()}
          </Typography>
          <Typography variant="caption" noWrap sx={{ color: '#555', display: 'block' }}>
            {coin.name}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0, ml: 1 }}>
        <Typography variant="body2" sx={{ color: '#e2e2e2', fontWeight: 600 }}>
          ${coin.current_price.toLocaleString()}
        </Typography>
        <Box sx={{ textAlign: 'right', minWidth: '70px' }}>
          <Typography variant="caption" sx={{ color: changeColor, fontWeight: 700, display: 'block' }}>
            {change >= 0 ? '+' : ''}{change.toFixed(2)}%
          </Typography>
          <Typography variant="caption" sx={{ color: changeColor, opacity: 0.7, display: 'block' }}>
            {fmtAud(coin.price_change_24h)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function SectionLabel({ color, label }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
      <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: color, flexShrink: 0 }} />
      <Typography variant="overline" sx={{ color, letterSpacing: 1.5, fontSize: '11px', fontWeight: 700 }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function TopMovers({ cryptoList, isLoading }) {
  const navigate = useNavigate();

  const sorted = (dir) => [...cryptoList]
    .filter(c => c.price_change_percentage_24h != null)
    .sort((a, b) => dir === 'asc'
      ? a.price_change_percentage_24h - b.price_change_percentage_24h
      : b.price_change_percentage_24h - a.price_change_percentage_24h
    )
    .slice(0, 4);

  const gainers = sorted('desc');
  const losers  = sorted('asc');

  return (
    <Box sx={{
      flex: 1,
      background: '#161618',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '12px',
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
    }}>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Spinner />
        </Box>
      ) : (
        <>
          <SectionLabel color="#4caf50" label="Top Gainers" />
          {gainers.map(coin => <MoverRow key={coin.id} coin={coin} navigate={navigate} />)}

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', my: 1.5 }} />

          <SectionLabel color="#f44336" label="Top Losers" />
          {losers.map(coin => <MoverRow key={coin.id} coin={coin} navigate={navigate} />)}
        </>
      )}
    </Box>
  );
}
