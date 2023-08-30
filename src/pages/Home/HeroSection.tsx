import { PlayArrowRounded } from "@mui/icons-material";
import { Button, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    parentspan: {
      backgroundImage: "url('./icons/marker.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundSize: "100%",
    },
    span: {
      fontFamily: "Lexend",

      color: theme.palette.primary.main,
    },
  };
});
function HeroSection() {
  const classes = useStyles();
  return (
    <div className="flexCenter" style={{ minHeight: "90vh", flexDirection: "column" }}>
      <Container>
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
        <Typography variant="body1" color="secondary" sx={{ textAlign: "center", padding: "2rem 0rem" }}>
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
      </Container>
    </div>
  );
}

export default HeroSection;
