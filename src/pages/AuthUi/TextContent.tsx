import { Box, Container, Theme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    text: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  };
});
function TextContent() {
  const classes = useStyles();
  return (
    <Container
      className={`space-btw ${classes.text}`}
      sx={{
        height: "100%",
        flexDirection: "column",
        textAlign: "left !important",
      }}
    >
      {" "}
      <Typography color="white" variant="h3">
        <Link to="/">OneCenter</Link>
      </Typography>
      <Box className={classes.text}>
        <Typography color="white" variant="h2">
          Start Your Journey With Us.
        </Typography>
        <Typography
          color="white"
          variant="body1"
          sx={{ opacity: 1, fontWeight: "200", textAlign: "left" }}
        >
          Experience super voice support agents for your business
        </Typography>
      </Box>
      <div></div>
      {/* <Card />  */}
    </Container>
  );
}

export default TextContent;
