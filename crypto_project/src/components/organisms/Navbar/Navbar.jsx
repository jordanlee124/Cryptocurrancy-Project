import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import NavLogo from "../../atoms/NavLogo/NavLogo";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import { NavBar, NavContainer, NavLink } from "./NavbarStyle";

const pages = ['Home'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpen  = (event) => setAnchorElNav(event.currentTarget);
  const handleClose = () => setAnchorElNav(null);

  return (
    <NavBar position="sticky">
      <NavContainer>
        <Toolbar disableGutters sx={{ height: 64 }}>

          {/* Logo — desktop */}
          <NavLogo sx={{ mr: 4, display: { xs: 'none', md: 'flex' } }} />

          {/* Mobile: hamburger + logo */}
          <NavMenu pages={pages} anchorEl={anchorElNav} onOpen={handleOpen} onClose={handleClose} />
          <NavLogo sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />

          {/* Nav links — desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {pages.map((page) => (
              <NavLink key={page} onClick={handleClose}>
                {page}
              </NavLink>
            ))}
          </Box>

          {/* Right — CTA */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              borderRadius: '10px',
              padding: '7px 18px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#fff',
              cursor: 'pointer',
              letterSpacing: '0.3px',
              transition: 'opacity 0.15s',
              '&:hover': { opacity: 0.85 },
            }}
          >
            Connect Wallet
          </Box>

        </Toolbar>
      </NavContainer>
    </NavBar>
  );
}
