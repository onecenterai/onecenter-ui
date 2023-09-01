import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";
const breakpoints = createBreakpoints({});
const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h1: {
      fontFamily: "Lexend",
      fontSize: "7rem",
      fontWeight: 500,
      [breakpoints.down("sm")]: {
        fontSize: "5rem",
      },
    },
    h2: {
      fontFamily: "Lexend",
      fontSize: "4.5rem",
      fontWeight: 700,
      [breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontFamily: "Lexend",
      fontSize: "2.5rem",
      fontWeight: 700,
      [breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
    h5: {
      fontFamily: "Lexend",
      fontSize: "1.85rem",
      fontWeight: 400,
      [breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
    h6: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.7rem",
      fontWeight: 400,
      lineHeight: "3.5rem",
      [breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
    body2: {
      fontSize: "1.7rem",
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#3A49F9",
    },
    secondary: {
      main: "#4B5563",
    },
    error: {
      main: "#111928",
    },
  },
});

export default theme;
