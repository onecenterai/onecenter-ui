import { PlayArrowRounded } from "@mui/icons-material";
import { Button, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import partnerships from "../../data/partnerships.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => {
  return {
    heroSection: {
      height: "90vh",
      [theme.breakpoints.down("sm")]: {
        marginTop: "5rem",
      },
    },
    heroSection_subText: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
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
      <Container sx={{ height: "100%", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
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
          <Typography variant="body1" color="secondary" sx={{ textAlign: "center", padding: "4rem 0rem" }} className={classes.heroSection_subText}>
            Enhancing Customer Connections with AI-Powered Care: Discover OneCenter, your key to effortless customer service. <br /> Experience the future of support with our conversational AI
            technology, bridging the gap between organizations and their valued customers.{" "}
          </Typography>
          <Grid className="center-center" sx={{ gap: "2rem", padding: "2rem 0rem" }}>
            <Link to="/tryonecenter">
              <Button variant="contained" color="error" size="large" sx={{ borderRadius: "5rem", textTransform: "none", fontSize: "1.4rem" }}>
                Try OneCenter
              </Button>
            </Link>
            <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: "5rem", textTransform: "none", fontSize: "1.4rem" }}>
              <PlayArrowRounded /> Watch Demo Video
            </Button>
          </Grid>
        </div>
        <Grid item md={12}>
          <Typography variant="body2" color="error" sx={{ textAlign: "center", fontFamily: "lexend" }}>
            We have relationship with some companies
          </Typography>
          <div className="center-center" style={{ gap: "2rem", height: "70px" }}>
            {partnerships.map((partner) => {
              return <img key={partner.image} src={partner.image} className={classes.partnerImage} />;
            })}
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default HeroSection;
