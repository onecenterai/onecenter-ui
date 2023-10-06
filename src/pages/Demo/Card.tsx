import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { useState } from "react";
// import { callPropType, sipPropType } from "react-sip";
import { phoneStore } from "react-sip-phone";
const useStyles = makeStyles(() => {
  return {
    paper: {
      width: "25.7rem",
      height: "20.8rem",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 10px 29px 0px !important",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
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
      <Paper className={classes.paper} elevation={10}>
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "90%" }}>
          <img src="./images/schoola.png" style={{ width: "90%", height: "fit-content", margin: "0 auto", position: "relative", bottom: "2rem" }} alt="" />
          <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: "column", height: "100%" }}>
            <Box>
              <Typography variant="body2" color="primary">
                Schoola App
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 300 }} color="error">
                Gamified Learning App
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h5">Call Schoola</Typography>
              <Box
                sx={{ border: "1px solid #111928", borderRadius: "50%", height: "3.5rem", width: "3.5rem", padding: ".5rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                // onClick={() => {
                //   makeCall("+16189238685");
                // }}
              >
                <img src="./icons/telephone.png" style={{ width: "2rem" }} alt="" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Grid>
  );
}

export default Card;
