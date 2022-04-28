import {
  Paper,
  styled,
  Typography,
  Box
} from "@mui/material";

export const CurrencyPaper = styled(Paper)`
  width: 90vw;
  margin: 5px;
  padding: 5px;
  color: #ccc;
  background: #202020;
`;

export const CurrencyTypo = styled(Typography)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 10px 0 10px
`;

export const ListContainer = styled(Box)`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;