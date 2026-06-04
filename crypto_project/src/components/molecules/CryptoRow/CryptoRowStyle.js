import { Paper, styled, Typography } from "@mui/material";

export const CurrencyPaper = styled(Paper)`
  width: 90vw;
  margin: 4px 0;
  padding: 5px;
  color: #e2e2e2;
  background: #161618;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: none;
`;

export const CurrencyTypo = styled(Typography)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;

  & > * {
    margin: 0;
  }
`;
