import { Container, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    drawer: {
      width: "25%",
      height: "100vh",
    },
    paper: {
      width: "250px",
      height: "100px",
      backgroundColor: "#F6F6FA !important",
      transition: "all ease-in-out .5s !important",
      color: "#52537A !important",
      "&:hover": {
        backgroundColor: "#52537A !important",
        transition: "all ease-in-out .5s",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 10px 29px 0px !important",
        color: "#F6F6FA !important",
      },
    },
  };
});

function Drawer() {
  const classes = useStyles();
  return (
    <div className={classes.drawer}>
      <Container>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h3">Ed Tech</Typography>
          <img src="./icons/Edu-Icon.svg" alt="" />
        </Paper>
      </Container>
    </div>
  );
}

export default Drawer;
