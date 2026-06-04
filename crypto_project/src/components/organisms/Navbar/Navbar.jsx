import React, { useState } from "react";
import { Toolbar, Box, Button } from "@mui/material";
import NavLogo from "../../atoms/NavLogo/NavLogo";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import { NavBar, NavContainer } from "./NavbarStyle";

const pages = ['Home', 'Pricing', 'Blog'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpen = (event) => setAnchorElNav(event.currentTarget);
  const handleClose = () => setAnchorElNav(null);

  return (
    <NavBar position="static">
      <NavContainer>
        <Toolbar disableGutters>
          <NavLogo sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} />
          <NavMenu pages={pages} anchorEl={anchorElNav} onOpen={handleOpen} onClose={handleClose} />
          <NavLogo sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleClose}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </NavContainer>
    </NavBar>
  );
}
