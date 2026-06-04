# CLAUDE.md

## Project

CryptoTrack — a React cryptocurrency dashboard. All prices are in AUD via the CoinGecko public API.

## Commands

```bash
npm start      # dev server at localhost:3000
npm run build  # production build
```

## Architecture

Atomic Design. Every UI addition should fit one of these layers:

| Layer | Location | Rule |
|---|---|---|
| Atoms | `src/components/atoms/` | Single-purpose, no business logic, no API calls |
| Molecules | `src/components/molecules/` | Compose atoms, accept data via props |
| Organisms | `src/components/organisms/` | Can own state, call hooks, coordinate molecules |
| Templates | `src/components/templates/` | Layout wrappers only |
| Pages | `src/pages/` | Route entry points — compose templates + organisms |
| Hooks | `src/hooks/` | All API fetching lives here, not in components |

## Key Files

- `src/hooks/useCryptoList.js` — fetches top 250 coins (`/coins/markets?vs_currency=aud&per_page=250`)
- `src/hooks/useCryptoDetails.js` — fetches a single coin by ID (`/coins/:id`)
- `src/hooks/useCoinChart.js` — fetches OHLC price history (`/coins/:id/market_chart`)
- `src/components/organisms/BitcoinChart/BitcoinChart.jsx` — reusable price chart; accepts `coinId`, `label`, `sx` props. Used on both the home page (bitcoin) and every detail page (any coin).
- `src/components/organisms/MarketOverview/MarketOverview.jsx` — home page hero: 60% chart + 40% TopMovers panel
- `src/components/organisms/TopMovers/TopMovers.jsx` — top 4 gainers + top 4 losers in one card
- `src/App.js` — two routes: `/` (Home) and `/crypto/:id` (CryptoDetails)

## Color Palette

| Token | Value | Usage |
|---|---|---|
| bg primary | `#0d0d0d` | Body background |
| bg card | `#161618` | All cards and rows |
| bg hover | `#1e1e28` | Row hover state |
| border | `rgba(255,255,255,0.06)` | All card borders |
| accent | `#6366f1` | Interactive states (pagination active, search focus, sort arrow, period button) |
| accent gradient | `linear-gradient(135deg, #6366f1, #06b6d4)` | Logo, CTA button, heading |
| positive | `#4caf50` | Price gains |
| negative | `#f44336` | Price losses |
| text primary | `#e2e2e2` | Main text |
| text muted | `#888` / `#555` | Labels, captions |

## Conventions

- All monetary values display in AUD with a `$` prefix and `.toLocaleString()` formatting
- 24h change always shows both `%` and the AUD value (e.g. `+2.45%` / `+$1,234.56`)
- `BitcoinChart` needs `minHeight: 380` on its outer Box when used outside a stretch-flex context (e.g. detail pages); the `sx` prop handles this
- Sorting resets to page 1; searching resets to page 1
- `useCryptoList` is called independently in `MarketOverview` and `CryptoTable` — two separate fetches, acceptable for this app's scale
