import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Spinner from "../../atoms/Spinner/Spinner";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import PaginationControl from "../../atoms/PaginationControl/PaginationControl";
import CryptoTableHeader from "../../molecules/CryptoTableHeader/CryptoTableHeader";
import CryptoRow from "../../molecules/CryptoRow/CryptoRow";
import { ListContainer } from "./CryptoTableStyle";
import { useCryptoList } from "../../../hooks/useCryptoList";

const PER_PAGE = 20;

function sortList(list, column, direction) {
  return [...list].sort((a, b) => {
    const aVal = a[column];
    const bVal = b[column];
    const cmp = typeof aVal === 'string'
      ? aVal.localeCompare(bVal)
      : aVal - bVal;
    return direction === 'asc' ? cmp : -cmp;
  });
}

export default function CryptoTable() {
  const { cryptoList, isLoading } = useCryptoList();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('market_cap_rank');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
    setPage(1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const processed = useMemo(() => {
    const filtered = cryptoList.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase())
    );
    return sortList(filtered, sortColumn, sortDirection);
  }, [cryptoList, search, sortColumn, sortDirection]);

  const pageCount = Math.ceil(processed.length / PER_PAGE);
  const paginated = processed.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <ListContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90vw', mb: 1 }}>
        <h1 style={{
          margin: 0,
          background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Top Crypto</h1>
        <SearchBar value={search} onChange={handleSearch} />
      </Box>

      {!isLoading && (
        <CryptoTableHeader
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {paginated.length === 0 ? (
            <Typography sx={{ color: '#666', mt: 4 }}>No coins match "{search}"</Typography>
          ) : (
            paginated.map((crypto) => (
              <CryptoRow
                key={crypto.id}
                rank={crypto.market_cap_rank}
                image={crypto.image}
                name={crypto.name}
                price={crypto.current_price}
                change24h={crypto.price_change_percentage_24h}
                changeAud={crypto.price_change_24h}
                marketCap={crypto.market_cap}
                symbol={crypto.symbol}
                onClick={() => navigate(`/crypto/${crypto.id}`)}
              />
            ))
          )}

          {pageCount > 1 && (
            <Box sx={{ mt: 3, mb: 3 }}>
              <PaginationControl
                count={pageCount}
                page={page}
                onChange={(_, value) => setPage(value)}
              />
            </Box>
          )}
        </>
      )}
    </ListContainer>
  );
}
