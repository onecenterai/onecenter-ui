import { SearchOffOutlined } from "@mui/icons-material";
import { IconButton, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    searchInput: {
      width: "92%",
      height: "6rem",
      fontSize: "2rem",

      backgroundColor: `#eff2f6 !important`,
      border: "none",
      borderRadius: "1.5rem",
      padding: "0rem 2rem",
      margin: "2rem 0rem",
      "&::placeholder": {
        color: "black",
        opacity: ".5",
        fontSize: "2rem",
      },
    },
    searchContainer: {
      [theme.breakpoints.down("md")]: {
        marginTop: "4rem",
      },
    },
  };
});

interface searchProps {
  setSearchQuery: any;
}
function Search({ setSearchQuery }: searchProps) {
  const classes = useStyles();
  return (
    <div className={`center-center ${classes.searchContainer}`} style={{ gap: "1rem" }}>
      <input type="text" className={classes.searchInput} placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
      <IconButton sx={{ backgroundColor: "#3A49F9", borderRadius: "1rem", height: "6rem", width: "15%", color: "white" }}>
        <SearchOffOutlined sx={{ fontSize: "3rem", verticalAlign: "center" }} />
      </IconButton>
    </div>
  );
}

export default Search;
