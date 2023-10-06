import { Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const useStyles = makeStyles(() => {
  return {
    paper: {
      backgroundColor: "rgba(000,000,000,.1) !important",
      color: "white",
      padding: "2rem",
      borderRadius: "2rem !important",
    },
    image: {
      height: "5rem",
      width: "5rem",
      borderRadius: "1rem",
      backgroundColor: "white",
    },
  };
});
function Card() {
  const classes = useStyles();
  return (
    <Box>
      <Splide
        options={{
          arrows: false,
          autoPlay: true,
          speed: 1000,
          interval: 3000,
          type: "loop",
        }}
      >
        <SplideSlide>
          <Paper className={classes.paper} elevation={0}>
            <Typography color="white" variant="body1" sx={{ opacity: 1, fontWeight: "200" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nulla!
            </Typography>

            <Box className="flex" sx={{ gap: "1rem", margin: "2rem 0rem" }}>
              <img src="" alt="" className={classes.image} />
              <Box>
                <Typography variant="h5" color="white">
                  Abdullah Bature
                </Typography>
                <Typography color="white" variant="h6" sx={{ opacity: 1, fontWeight: "200" }}>
                  Schoola
                </Typography>
              </Box>
            </Box>
          </Paper>
        </SplideSlide>
        <SplideSlide>
          <Paper className={classes.paper} elevation={0}>
            <Typography color="white" variant="body1" sx={{ opacity: 1, fontWeight: "200" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nulla!
            </Typography>

            <Box className="flex" sx={{ gap: "1rem", margin: "2rem 0rem" }}>
              <img src="" alt="" className={classes.image} />
              <Box>
                <Typography variant="h5" color="white">
                  Abdullah Bature
                </Typography>
                <Typography color="white" variant="h6" sx={{ opacity: 1, fontWeight: "200" }}>
                  Schoola
                </Typography>
              </Box>
            </Box>
          </Paper>
        </SplideSlide>
      </Splide>
    </Box>
  );
}

export default Card;
