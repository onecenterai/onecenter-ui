import { Box, Container, Grid, IconButton, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { phoneStore } from "react-sip-phone";
import { StyledButton } from "../../styled-components/styledButton";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
const useStyles = makeStyles((theme: Theme) => {
  return {
    paper: {
      padding: "2rem 0rem",
      minHeight: "33rem",
      boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px !important",

      width: "100%",
      borderRadius: "2rem !important",
      transition: "all ease-in-out .5s !important",
      "&:hover": {
        scale: "1.02",
        transition: "all ease-in-out .5s",
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

// const sipAccount = phoneStore.getState().sipAccounts.sipAccount;
// console.log(sipAccount);
// function makeCall(number: number) {
//   const sipAccount = phoneStore.getState().sipAccounts.sipAccount;
//   console.log(sipAccount);
//   if (sipAccount && number) {
//     sipAccount.makeCall(number);
//   }
// }

interface cardProps {
  primaryBtn?: string;
  website?: string;
  primaryFunc?: () => void;
  btnDisable?: boolean;
  iconContainerWidth?: string;
  description?: string;
  name?: string;
  logo?: string;
  category?: string;
}
function Card({ primaryBtn, website, primaryFunc, btnDisable, iconContainerWidth, description, name, logo, category }: cardProps) {
  const classes = useStyles();
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
  console.log(description);

  return (
    // <Grid item md={4}>
    <Paper elevation={0} className={classes.paper}>
      <Container sx={{ height: "100%" }}>
        <Grid container className="center-space-btw" sx={{ height: "100%" }}>
          <Grid item md={12} className="center-space-btw" sx={{ width: "100%" }}>
            <Box>
              <Box className={`${classes.iconContainer} center-center`} sx={{ width: iconContainerWidth }}>
                <img src={logo} alt="" className="partnerImage" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", borderRadius: "1rem" }} />
              </Box>
              <Box>
                <Typography variant="h3" textAlign="left">
                  {name}
                </Typography>
                <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
                  <Typography variant="h4" textAlign="left" color="primary">
                    <IconButton color="primary" disableRipple>
                      <img src="/icons/link.png" style={{ width: "2rem%", height: "2rem", marginRight: ".5rem", objectFit: "contain" }} alt="" /> {website}
                    </IconButton>
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
                  text={description ? description : "no description"}
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
