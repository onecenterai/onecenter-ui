import { Box, Container, Grid, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { phoneStore } from "react-sip-phone";
import { StyledButton } from "../../styled-components/styledButton";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
const useStyles = makeStyles((theme: Theme) => {
  return {
    paper: {
      padding: "2rem 0rem",
      height: "33rem",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !Important",
      width: "100%",
      borderRadius: "2rem !important",
      transition: "all ease-in-out .2s",
      "&:hover": {
        scale: "1.02",
        transition: "all ease-in-out .2s",
      },
    },
    iconContainer: {
      height: "7rem",
      borderRadius: "50%",
      backgroundColor: "white",
      padding: "0.5rem",
    },
    h4: {
      color: "#1f1f1f",
      fontWeight: "700",
      fontSize: "1rem",
    },

    pill: {
      backgroundColor: "rgba(58,73,249, .1)",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "2rem",
      color: "black",
      width: "fit-content",
      padding: ".2rem 1.5rem",
    },
  };
});

const sipAccount = phoneStore.getState().sipAccounts.sipAccount;
console.log(sipAccount);
// function makeCall(number: number) {
//   const sipAccount = phoneStore.getState().sipAccounts.sipAccount;
//   console.log(sipAccount);
//   if (sipAccount && number) {
//     sipAccount.makeCall(number);
//   }
// }
function Card({ primaryBtn, website, primaryFunc, btnDisable, iconContainerWidth, description, name, logo, category }) {
  const classes = useStyles();
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

  return (
    // <Grid item md={4}>
    <Paper elevation={0} className={classes.paper}>
      <Container sx={{ height: "100%" }}>
        <Grid container className="center-space-btw" sx={{ height: "100%" }}>
          <Grid item md={12} className="center-space-btw">
            <Box>
              <Box className={`${classes.iconContainer} center-center`} sx={{ width: iconContainerWidth }}>
                <img src={logo} alt="" className="partnerImage" style={{ width: "100%", objectFit: "cover", objectPosition: "center" }} />
              </Box>
              <Box>
                <Typography variant="h3" textAlign="left">
                  {name}
                </Typography>
                <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
                  <Typography variant="h4" textAlign="left">
                    {website}
                  </Typography>
                </a>
              </Box>
            </Box>
            <Box>
              <Typography variant="h6" className={classes.pill} sx={{ color: "black" }} textAlign="left">
                {category}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={12}>
            <Typography variant="h6" sx={{ backgroundColor: "white", padding: "2rem 1rem", borderRadius: "1rem" }}>
              {location.pathname == "/tryonecenter" ? (
                <ResponsiveEllipsis
                  text={description}
                  maxLine="5" // Number of lines to display
                  ellipsis="..." // Ellipsis character(s)
                  trimRight
                  basedOn="words"
                />
              ) : (
                description
              )}
            </Typography>
          </Grid>
          <Grid item md={12} className="center-space-btw">
            {primaryBtn ? (
              <StyledButton variant="contained" color="primary" onClick={primaryFunc} disabled={btnDisable}>
                {primaryBtn}
              </StyledButton>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </Paper>
    // </Grid>
  );
}

export default Card;
