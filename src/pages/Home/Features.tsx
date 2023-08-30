import { Box, Container, Grid, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import features from "../../data/features.json";
import { useState } from "react";
import partnerships from "../../data/partnerships.json";

const useStyles = makeStyles((theme: Theme) => {
  return {
    features: {
      minHeight: "110vh",
      marginBottom: "10rem",
    },
    paper: {
      height: "40vh",
      padding: "2rem 3rem",
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
function Features() {
  const classes = useStyles();
  const [onMouseOverId, setOnMouseOverId] = useState<string | null>(null);
  const handleMouseEnter = (id: string) => {
    setOnMouseOverId(id);
  };
  const handleMouseLeave = () => {
    setOnMouseOverId(null);
  };
  return (
    <div className={classes.features} id="features">
      <Container>
        <Grid item md={12} sx={{ padding: "5rem 0rem" }}>
          <Typography variant="body1" color="error" sx={{ textAlign: "center" }}>
            We have partnerships with three companies so far
          </Typography>
          <div className="flexCenter" style={{ gap: "2rem", height: "70px" }}>
            {partnerships.map((partner) => {
              return <img src={partner.image} className={classes.partnerImage} />;
            })}
          </div>
        </Grid>
        <Box sx={{ margin: "4rem 0rem" }}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            What makes us special and unique?
          </Typography>
          <Typography variant="body1" color="secondary" sx={{ textAlign: "center", padding: "2rem 0rem" }}>
            Well, there are a lot of things that make us unique and special <br /> but here is some of our favorite.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {features.map((feature) => {
            return (
              <Grid item md={4}>
                <Paper
                  className={classes.paper}
                  onMouseOver={() => {
                    handleMouseEnter(feature.name);
                  }}
                  onMouseOut={handleMouseLeave}
                  sx={{ boxShadow: onMouseOverId === feature.name ? "rgba(100, 100, 111, 0.2) 0px 10px 29px 0px !important" : null, transition: "all ease-in-out .3s" }}
                  elevation={onMouseOverId === feature.name ? 3 : 0}
                >
                  <img src={onMouseOverId === feature.name ? feature.image2 : feature.image} style={{ margin: "1rem 0rem" }} />
                  <Typography variant="h6" color="secondary">
                    {feature.name}
                  </Typography>
                  <Typography variant="h5" color="error" sx={{ padding: "1.5rem 0rem" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    {feature.content}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Features;
