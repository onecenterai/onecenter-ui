import { Menu } from "@mui/icons-material";
import { Button, Container, Grid, IconButton, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    mobileNavbar: {
      padding: "2rem 0rem",
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
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
  };
});
function MobileNavbar() {
  const classes = useStyles();
  return (
    <div className={classes.mobileNavbar}>
      <Container>
        <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid item md={6} sx={{ display: "flex", alignItems: "center", gap: "5rem" }}>
            <Typography color="primary" variant="h3">
              One<span style={{ color: "black" }}>Center</span>
            </Typography>
            {/* <ul className={classes.ul}>
              <a href="#features">
                <li>Features</li>
              </a>
              <li>Testimonial</li>
              <li>Pricing</li>
              <li></li>
            </ul> */}
          </Grid>
          <Grid item md={6} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
            <Button variant="contained" color="primary" size="large" sx={{ borderRadius: "5rem", textTransform: "none", fontSize: "1.4rem" }}>
              Beta Testing
            </Button>
            <IconButton>
              <Menu color="error" sx={{ fontSize: "3rem" }} />
            </IconButton>
          </Grid>

          {/* <Grid item md={6} sx={{ display: "flex", justifyContent: "end" }}>
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
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

export default MobileNavbar;
