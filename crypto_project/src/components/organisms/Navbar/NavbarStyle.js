import { AppBar, Button, Container, styled } from '@mui/material';

export const NavBar = styled(AppBar)`
  background: rgba(13, 13, 13, 0.75) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: none !important;
  align-items: center;
`;

export const NavContainer = styled(Container)`
  min-width: 99vw;
  padding: 0 24px;
`;

export const NavLink = styled(Button)`
  color: #888;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-transform: none;
  padding: 6px 14px;
  border-radius: 8px;
  min-width: unset;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
  }
`;
