import React from "react";
import { TextField } from "@mui/material";

export default function SearchBar({ value, onChange }) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder="Search coins..."
      variant="outlined"
      size="small"
      sx={{
        width: '280px',
        background: '#161618',
        borderRadius: '8px',
        '& .MuiOutlinedInput-root': {
          color: '#e2e2e2',
          borderRadius: '8px',
          '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
          '&:hover fieldset': { borderColor: 'rgba(99,102,241,0.5)' },
          '&.Mui-focused fieldset': { borderColor: '#6366f1' },
        },
        '& input::placeholder': { color: '#555', opacity: 1 },
      }}
    />
  );
}
