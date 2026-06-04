import React from "react";
import { TableSortLabel } from "@mui/material";
import { CurrencyPaper, CurrencyTypo } from "../CryptoRow/CryptoRowStyle";

const columns = [
  { id: 'market_cap_rank',              label: '#',          flex: '0 0 5%'  },
  { id: 'name',                         label: 'Coin',        flex: '0 0 28%' },
  { id: 'current_price',                label: 'Price',       flex: '0 0 22%' },
  { id: 'price_change_percentage_24h',  label: '24h %',       flex: '0 0 17%' },
  { id: 'market_cap',                   label: 'Market Cap',  flex: '0 0 28%' },
];

const sortLabelSx = {
  color: '#888',
  '&:hover': { color: '#e2e2e2' },
  '&.Mui-active': { color: '#6366f1' },
  '& .MuiTableSortLabel-icon': { color: '#6366f1 !important' },
};

export default function CryptoTableHeader({ sortColumn, sortDirection, onSort }) {
  return (
    <CurrencyPaper elevation={8}>
      <CurrencyTypo variant="subtitle1">
        {columns.map(({ id, label, flex }) => (
          <TableSortLabel
            key={id}
            active={sortColumn === id}
            direction={sortColumn === id ? sortDirection : 'asc'}
            onClick={() => onSort(id)}
            sx={{ ...sortLabelSx, flex }}
          >
            {label}
          </TableSortLabel>
        ))}
      </CurrencyTypo>
    </CurrencyPaper>
  );
}
