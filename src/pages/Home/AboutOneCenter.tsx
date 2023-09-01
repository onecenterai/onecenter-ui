import { Box, Button, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    aboutOneCenter: {
      height: "auto",
      backgroundImage: "url(./images/Background.png)",
    },
    dashboardImage: {
      // width: "100%",
      height: "100vh",
      objectFit: "contain",

      // objectPosition: "center",
      // borderRadius: "5rem",
      position: "relative",
      left: 150,
      top: 20,
      [theme.breakpoints.down("sm")]: {
        left: 0,
        objectFit: "contain",
        borderRadius: "0rem",
        margin: "2rem 0rem",
      },
    },
  };
});
function AboutOneCenter() {
  const classes = useStyles();
  return (
    <Box className={classes.aboutOneCenter}>
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid item md={12} sx={{ textAlign: "center", padding: "5rem 0rem" }}>
          <Typography variant="h2" color="white">
            Everything you need to know about OneCenter
          </Typography>
          <Typography variant="body1" color="white">
            Well everything you need if you aren’t that picky about minor details like tax compliance.{" "}
          </Typography>
        </Grid>
        <Grid item md={4} sx={{ display: "flex", justifyContent: "center", gap: "3rem", flexDirection: "column", paddingLeft: "2rem" }}>
          <Typography variant="h3" color="white">
            Something should be here with an action button also
          </Typography>
          <Typography variant="body1" color="white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia perspiciatis, ad officia, minima corrupti esse exercitationem iste ea molestias aperiam sed adipisci rem sint! Nulla aperiam
            accusantium deleniti, velit labore sapiente atque laudantium saepe sequi. Minima quam accusantium nam distinctio repudiandae libero alias aperiam facilis, eligendi atque natus, dicta
            animi.
          </Typography>
          <Button variant="contained" color="error" size="large" sx={{ width: "fit-content", borderRadius: "5rem", textTransform: "none", fontSize: "1.4rem" }}>
            Let's have the conversation!
          </Button>
        </Grid>
        <Grid item md={8} sx={{ overflow: "hidden" }}>
          <img src="./images/dashboard-screenshot.png" className={classes.dashboardImage} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutOneCenter;
