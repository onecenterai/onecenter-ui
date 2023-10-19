import { Box, MenuItem, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { navigation } from "../../../data/navigation";
import { logOut } from "../../../slices/AuthSlice";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) => {
  return {
    menuItem: {
      gap: "2rem",
      padding: "1rem 2rem !important",
      margin: "0rem 0rem 1rem 0rem !important",
      cursor: "pointer",
      borderRadius: "1rem !important",
      transition: "all ease-in-out .2s",
      color: "white !important",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        transition: "all ease-in-out .2s",
      },
    },
    activeMenuItem: {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      transition: "all ease-in-out .2s",
    },
  };
});

function NavTab() {
  const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Box>
      <Box sx={{ marginTop: "5rem !important" }}>
        {navigation.map((nav) => {
          return (
            <MenuItem
              key={nav.name}
              className={`${classes.menuItem}  align-center ${location.pathname == "/" + nav.name ? classes.activeMenuItem : null}`}
              onClick={() => {
                navigate(`/${nav.name}`);
              }}
            >
              <>
                <img src={location.pathname == "/" + nav.name ? nav.activeIcon : nav.icon} alt={nav.title} style={{ height: "2rem", width: "2rem", objectFit: "contain" }} />
              </>
              <Typography variant="body1" color={location.pathname == "/" + nav.name ? "white" : "white"}>
                {nav.title}
              </Typography>
            </MenuItem>
          );
        })}
      </Box>
      <MenuItem
        className={`${classes.menuItem} align-center`}
        sx={{ marginTop: "20rem !important" }}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        <>
          <img src="./icons/logout.png" alt="log-out" style={{ height: "2rem", width: "2rem", objectFit: "contain" }} />
        </>
        <Typography variant="body1" color="white">
          Log Out
        </Typography>
      </MenuItem>
    </Box>
  );
}

export default NavTab;
