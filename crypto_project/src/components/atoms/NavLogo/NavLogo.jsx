import React from "react";
import { Box, Typography } from "@mui/material";

export default function NavLogo({ sx }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, cursor: 'pointer', ...sx }}>
      <Box sx={{
        width: 30,
        height: 30,
        borderRadius: '9px',
        background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '15px',
        flexShrink: 0,
      }}>
        ◈
      </Box>
      <Typography
        variant="h6"
        noWrap
        sx={{
          fontWeight: 700,
          fontSize: '15px',
          letterSpacing: '-0.3px',
          background: 'linear-gradient(90deg, #fff 30%, #aaa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        CryptoTrack
      </Typography>
    </Box>
  );
}
