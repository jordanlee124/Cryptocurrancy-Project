import React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

export default function NavMenu({ pages, anchorEl, onOpen, onClose }) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpen}
        color="inherit"
      />
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={Boolean(anchorEl)}
        onClose={onClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={onClose}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
