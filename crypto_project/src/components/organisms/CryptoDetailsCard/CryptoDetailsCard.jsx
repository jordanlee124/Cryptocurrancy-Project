import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, Typography } from "@mui/material";
import Spinner from "../../atoms/Spinner/Spinner";
import BitcoinChart from "../BitcoinChart/BitcoinChart";

const statBox = {
  display: 'flex',
  flexDirection: 'column',
  background: '#161618',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '10px',
  padding: '16px 24px',
};

function Stat({ label, value }) {
  return (
    <Box sx={statBox}>
      <Typography variant="caption" sx={{ color: '#888', mb: 0.5 }}>{label}</Typography>
      <Typography variant="body1" sx={{ color: '#ccc', fontWeight: 600 }}>{value}</Typography>
    </Box>
  );
}

export default function CryptoDetailsCard({ coin, isLoading }) {
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!coin) return null;

  const md = coin.market_data;
  const price     = md.current_price.aud?.toLocaleString();
  const marketCap = md.market_cap.aud?.toLocaleString();
  const change24h    = md.price_change_percentage_24h?.toFixed(2);
  const changeAudRaw = md.current_price.aud * md.price_change_percentage_24h / 100;
  const changeAudAbs = Math.abs(changeAudRaw);
  const changeSign   = changeAudRaw >= 0 ? '+' : '-';
  const changeAudFmt = `${changeSign}$${changeAudAbs >= 1 ? changeAudAbs.toLocaleString(undefined, { maximumFractionDigits: 2 }) : changeAudAbs.toFixed(4)} AUD`;
  const high24h      = md.high_24h.aud?.toLocaleString();
  const low24h       = md.low_24h.aud?.toLocaleString();
  const ath          = md.ath.aud?.toLocaleString();
  const changeColor  = change24h >= 0 ? '#4caf50' : '#f44336';

  const description = coin.description?.en
    ?.replace(/<[^>]+>/g, '')
    .split('. ')
    .slice(0, 3)
    .join('. ') + '.';

  return (
    <Box sx={{ maxWidth: 900, margin: '40px auto', padding: '0 16px' }}>
      <Button onClick={() => navigate(-1)} sx={{ color: '#6366f1', mb: 2, '&:hover': { background: 'rgba(99,102,241,0.1)' } }}>
        ← Back
      </Button>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <img src={coin.image?.large} alt={coin.name} style={{ width: 64, height: 64 }} />
        <Box>
          <Typography variant="h4" sx={{ color: '#ccc', fontWeight: 700 }}>
            {coin.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#888', textTransform: 'uppercase' }}>
            {coin.symbol}
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ ml: 'auto', color: '#ccc', fontWeight: 600 }}>
          ${price} AUD
        </Typography>
      </Box>

      <BitcoinChart
        coinId={coin.id}
        label={`${coin.name} · ${coin.symbol.toUpperCase()}`}
        sx={{ mb: 4 }}
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 4 }}>
        <Stat label="24h Change" value={
          <span style={{ color: changeColor }}>
            {change24h}%
            <span style={{ fontSize: '0.8em', opacity: 0.75, display: 'block' }}>{changeAudFmt}</span>
          </span>
        } />
        <Stat label="Market Cap" value={`$${marketCap} AUD`} />
        <Stat label="24h High" value={`$${high24h} AUD`} />
        <Stat label="24h Low" value={`$${low24h} AUD`} />
        <Stat label="All Time High" value={`$${ath} AUD`} />
        <Stat label="Market Cap Rank" value={`#${coin.market_cap_rank}`} />
      </Box>

      {description && (
        <>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mb: 2 }} />
          <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.8 }}>
            {description}
          </Typography>
        </>
      )}
    </Box>
  );
}
