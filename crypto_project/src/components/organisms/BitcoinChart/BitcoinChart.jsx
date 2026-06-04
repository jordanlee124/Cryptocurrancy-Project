import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { useCoinChart } from "../../../hooks/useCoinChart";
import Spinner from "../../atoms/Spinner/Spinner";

const periods = [
  { label: '1D', days: 1  },
  { label: '7D', days: 7  },
  { label: '1M', days: 30 },
  { label: '3M', days: 90 },
];

function formatYAxis(v) {
  if (v >= 1000) return `$${(v / 1000).toFixed(0)}k`;
  if (v >= 1)    return `$${v.toFixed(2)}`;
  return `$${v.toFixed(4)}`;
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <Box sx={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: '6px', padding: '8px 12px' }}>
      <Typography variant="body2" sx={{ color: '#ccc', fontWeight: 600 }}>
        ${payload[0].value.toLocaleString()} AUD
      </Typography>
      <Typography variant="caption" sx={{ color: '#888' }}>
        {payload[0].payload.time}
      </Typography>
    </Box>
  );
}

export default function BitcoinChart({
  coinId = 'bitcoin',
  label  = 'Bitcoin · BTC',
  sx     = {},
}) {
  const [days, setDays] = useState(7);
  const { chartData, isLoading } = useCoinChart(coinId, days);

  const priceChange  = chartData.length > 1 ? chartData[chartData.length - 1].price - chartData[0].price : 0;
  const currentPrice = chartData[chartData.length - 1]?.price;
  const changeColor  = priceChange >= 0 ? '#4caf50' : '#f44336';
  const changeSign   = priceChange >= 0 ? '+' : '';
  const gradientId   = `gradient-${coinId}`;

  return (
    <Box sx={{ background: '#161618', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', minHeight: 380, ...sx }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="overline" sx={{ color: '#666', letterSpacing: 2 }}>
            {label}
          </Typography>
          {currentPrice != null && (
            <Typography variant="h4" sx={{ color: '#ccc', fontWeight: 700, lineHeight: 1.2 }}>
              ${currentPrice.toLocaleString()} AUD
            </Typography>
          )}
          {chartData.length > 1 && (
            <Typography variant="body2" sx={{ color: changeColor, mt: 0.5 }}>
              {changeSign}{priceChange.toLocaleString(undefined, { maximumFractionDigits: 2 })} AUD
              ({changeSign}{((priceChange / chartData[0].price) * 100).toFixed(2)}%)
            </Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {periods.map(({ label: l, days: d }) => (
            <Button
              key={l}
              onClick={() => setDays(d)}
              size="small"
              sx={{
                color: days === d ? '#fff' : '#666',
                background: days === d ? '#6366f1' : 'transparent',
                minWidth: '40px',
                fontSize: '12px',
                '&:hover': { background: 'rgba(99,102,241,0.15)', color: '#ccc' },
              }}
            >
              {l}
            </Button>
          ))}
        </Box>
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Spinner />
        </Box>
      ) : (
        <ResponsiveContainer width="100%" height="100%" style={{ flex: 1, minHeight: 0 }}>
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={changeColor} stopOpacity={0.25} />
                <stop offset="95%" stopColor={changeColor} stopOpacity={0}    />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              tick={{ fill: '#555', fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: '#555', fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatYAxis}
              domain={['auto', 'auto']}
              width={60}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke={changeColor}
              strokeWidth={2}
              fill={`url(#${gradientId})`}
              dot={false}
              activeDot={{ r: 4, fill: changeColor, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
}
