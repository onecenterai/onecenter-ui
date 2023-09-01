import { PlayArrowRounded } from "@mui/icons-material";
import { Button, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import partnerships from "../../data/partnerships.json";

const useStyles = makeStyles((theme: Theme) => {
  return {
    heroSection: {
      height: "100vh",
    },
    parentspan: {
      backgroundImage: "url('./icons/marker.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundSize: "100%",
      [theme.breakpoints.down("sm")]: {
        backgroundImage: "none",
      },
    },

    span: {
      fontFamily: "Lexend",

      color: theme.palette.primary.main,
    },
    partnerImage: {
      width: "150px",
      height: "auto",
      filter: "grayscale(100%)",
      [theme.breakpoints.down("sm")]: {
        width: "100px",
      },
    },
  };
});
function HeroSection() {
  const classes = useStyles();
  return (
    <div className={classes.heroSection}>
      <Container sx={{ height: "100%", display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
        <div>
          <Typography variant="h1" color="error" sx={{ textAlign: "center" }}>
            Customer Service made simple for
            <span className={classes.parentspan}>
              <span className={classes.span}> organisations</span>{" "}
              <span className={classes.span} style={{ color: "#111928" }}>
                and
              </span>
              <span className={classes.span}> customers.</span>
            </span>
          </Typography>
          <Typography variant="body1" color="secondary" sx={{ textAlign: "center", padding: "4rem 0rem" }}>
            Most book-keeping software is accurate, but hard to use. We make the <br /> opposite trade-off, and hope you don’t get audited.
          </Typography>
          <Grid className="flexCenter" sx={{ gap: "2rem", padding: "2rem 0rem" }}>
            <a href="#waitlist">
              <Button variant="contained" color="error" size="large" sx={{ borderRadius: "5rem", textTransform: "none", fontSize: "1.4rem" }}>
                Join the waitlist
              </Button>
            </a>
            <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: "5rem", textTransform: "none", fontSize: "1.4rem" }}>
              <PlayArrowRounded /> Watch Demo Video
            </Button>
          </Grid>
        </div>
        <Grid item md={12} sx={{ padding: "5rem 0rem" }}>
          <Typography variant="body2" color="error" sx={{ textAlign: "center", fontFamily: "lexend" }}>
            We have partnerships with three companies so far
          </Typography>
          <div className="flexCenter" style={{ gap: "2rem", height: "70px" }}>
            {partnerships.map((partner) => {
              return <img src={partner.image} className={classes.partnerImage} />;
            })}
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default HeroSection;
