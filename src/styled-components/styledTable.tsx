import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  width: "auto",
  padding: "1rem",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
    fontWeight: 400,
    // backgroundColor: "teal",
  },
  "&: last-child": {
    width: "50px",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export const StyledTablePagination = styled(TablePagination)(({}) => ({
  fontSize: "1rem",
  "& .MuiTablePagination-selectLabel": {
    fontSize: "1rem",
  },
}));
