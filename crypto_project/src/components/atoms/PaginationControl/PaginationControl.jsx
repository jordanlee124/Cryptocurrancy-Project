import React from "react";
import { Pagination } from "@mui/material";

export default function PaginationControl({ count, page, onChange }) {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      shape="rounded"
      sx={{
        '& .MuiPaginationItem-root': { color: '#888', borderColor: 'rgba(255,255,255,0.08)' },
        '& .MuiPaginationItem-root:hover': { background: 'rgba(99,102,241,0.12)', color: '#e2e2e2' },
        '& .Mui-selected': { background: '#6366f1 !important', color: '#fff' },
      }}
    />
  );
}
