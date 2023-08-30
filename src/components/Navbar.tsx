import { Button, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    ul: {
      fontSize: "1.4rem",
      fontWeight: 500,
      color: theme.palette.secondary.main,
      display: "flex",
      alignItems: "center",
      gap: "3.5rem",
      listStyle: "none",
      height: "100%",
    },
    navbar: {
      padding: "2rem 0rem",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});
function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <Container>
        <Grid container>
          <Grid item md={6} sx={{ display: "flex", alignItems: "center", gap: "5rem" }}>
            <Typography color="primary" variant="h3">
              One<span style={{ color: "black" }}>Center</span>
            </Typography>
            <ul className={classes.ul}>
              <a href="#features">
                <li>Features</li>
              </a>
              <a href="#reviews">
                <li>Reviews</li>
              </a>

              <li>Pricing</li>
              <li></li>
            </ul>
          </Grid>
          <Grid item md={6} sx={{ display: "flex", justifyContent: "end" }}>
            <ul className={classes.ul}>
              <li>
                <Button variant="text" color="secondary" size="large" sx={{ borderRadius: "5rem", textTransform: "none", fontSize: "1.4rem" }}>
                  Sign in
                </Button>
              </li>
              <li>
                <Button variant="contained" color="primary" size="large" sx={{ borderRadius: "5rem", textTransform: "none", fontSize: "1.4rem" }}>
                  Join Beta Testing
                </Button>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Navbar;
