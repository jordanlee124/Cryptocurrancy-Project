# CryptoTrack

A React-based cryptocurrency tracking dashboard that lets users monitor live prices, market data, and price history for the top 250 coins by market cap.

## Features

- **Market Overview** — Bitcoin price chart with 1D / 7D / 1M / 3M period selector alongside a Top Gainers / Top Losers panel
- **Crypto List** — Sortable, filterable, paginated table of the top 250 coins showing rank, price, 24h change (% and AUD value), and market cap
- **Coin Detail Pages** — Per-coin price chart with period selector, key stats (market cap, ATH, 24h high/low, rank), and a short description
- **Live data** — All data sourced from the [CoinGecko public API](https://www.coingecko.com/en/api), displayed in AUD

## Tech Stack

| Layer | Library |
|---|---|
| UI framework | React 18 |
| Component library | MUI v5 (Material UI) |
| Routing | React Router v6 |
| Charts | Recharts |
| Styling | MUI styled-components + global CSS |
| Data | CoinGecko REST API |

## Architecture

The project follows **Atomic Design** principles:

```
src/
├── hooks/               # Data-fetching hooks (useCryptoList, useCryptoDetails, useCoinChart)
├── components/
│   ├── atoms/           # Spinner, CoinImage, NavLogo, SearchBar, PaginationControl
│   ├── molecules/       # CryptoRow, CryptoTableHeader, NavMenu
│   ├── organisms/       # Navbar, CryptoTable, BitcoinChart, TopMovers, MarketOverview, CryptoDetailsCard
│   └── templates/       # MainLayout
└── pages/               # Home, CryptoDetails
```

## Getting Started

```bash
cd crypto_project
npm install
npm start
```

App runs at `http://localhost:3000`.
