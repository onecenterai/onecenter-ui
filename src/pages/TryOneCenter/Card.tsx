import { Box, Container, Grid, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { phoneStore } from "react-sip-phone";
import { StyledButton } from "../../styled-components/styledButton";
const useStyles = makeStyles((theme: Theme) => {
  return {
    paper: {
      padding: "2rem 0rem",
      height: "33rem",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !Important",
      width: "100%",
      borderRadius: "2rem !important",
    },
    iconContainer: {
      height: "7rem",
      width: "7rem",
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
function Card() {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <Paper elevation={0} className={classes.paper}>
        <Container sx={{ height: "100%" }}>
          <Grid container className="center-space-btw" sx={{ height: "100%" }}>
            <Grid item md={12} className="center-space-btw">
              <Box className="center-center" sx={{ gap: "1rem" }}>
                <Box className={`${classes.iconContainer} center-center`}>
                  <img src="./images/schoola.png" alt="" className="partnerImage" style={{ width: "100%", objectFit: "cover", objectPosition: "center" }} />
                </Box>
                <Box>
                  <Typography variant="h5" className={classes.h4} textAlign="left">
                    Schoola App
                  </Typography>
                  <Typography variant="h6" textAlign="left">
                    schoola.app
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.pill} sx={{ color: "black" }} textAlign="left">
                  EdTech
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography variant="h6" sx={{ backgroundColor: "white", padding: "2rem 1rem", borderRadius: "1rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea soluta reprehenderit consequatur veritatis inventore molestiae eligendi voluptatibus numquam eum eos!
              </Typography>
            </Grid>
            <Grid item md={12} className="center-space-btw">
              <StyledButton variant="contained" color="primary">
                Call Schoola
              </StyledButton>
              <StyledButton variant="outlined" color="primary">
                More Info
              </StyledButton>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Grid>
  );
}

export default Card;
