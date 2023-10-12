import { Box, Container, Divider, Grid, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { useState } from "react";
// import { callPropType, sipPropType } from "react-sip";
import { phoneStore } from "react-sip-phone";
import { StyledButton } from "../../styled-components/styledButton";
import { Edit } from "@mui/icons-material";
const useStyles = makeStyles((theme: Theme) => {
  return {
    paper: {
      height: "40vh",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 10px 29px 0px !important",
      // backgroundColor: `#f1f1f1 !important`,
      width: "100%",
      borderRadius: "2rem !important",
      position: "relative",
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
      <Paper elevation={2} className={classes.paper}>
        <Box sx={{ height: "40%", backgroundImage: "url('./images/schoola.png')", backgroundPositionY: "30%", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></Box>
        <Divider />
        <img
          src="./images/schoola.png"
          className="logoContainer"
          style={{
            height: "10rem",
            width: "10rem",
            position: "absolute",
            border: ".4rem solid #3A49F9",
            bottom: "49%",
            left: "3%",
            objectFit: "contain",
            backgroundColor: "#f1f1f1",
            borderRadius: "50%",
          }}
        />
        <Box sx={{ height: "60%" }}>
          <Container sx={{ padding: "2rem 0rem" }}>
            <Box>
              <Grid container sx={{ position: "relative" }}>
                <Grid item md={3}></Grid>
                <Grid item md={5}>
                  <Typography variant="h4">Schoola</Typography>
                  <Typography variant="h6" sx={{ padding: ".5rem 0rem", color: "#636A7C" }}>
                    EdTech
                  </Typography>
                  {/* <Pill categoryColor={"rgb(13, 91, 225)"} categorybgColor={"rgba(13, 91, 225,0.1)"} category={userData.category} /> */}
                  {/* <Typography
                    variant="h6"
                    sx={{ fontSize: "1.1rem", fontWeight: "400", backgroundColor: "#eff2f6", width: "fit-content", color: "black", padding: "0.5rem 1.5rem", borderRadius: "1rem" }}
                  >
                    {userData.address}
                  </Typography> */}
                </Grid>
                <Grid item md={4} sx={{ display: "flex", justifyContent: "flex-end", height: "fit-content" }}>
                  <StyledButton variant="outlined" sx={{ padding: "0.2rem .5rem", borderColor: "#0000001f", color: "black" }} fullWidth>
                    Call Schoola
                  </StyledButton>
                </Grid>
                <Grid item md={12}>
                  <Typography variant="h6" sx={{ backgroundColor: "#eff2f6", width: "fit-content", color: "black", padding: "0.5rem 1.5rem", borderRadius: "1rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iure dicta animi esse ullam ipsam id repudiandae in impedit? Expedita?
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "2rem 0rem" }}>
                <Grid item md={3}></Grid>
                <Grid item md={6}>
                  <Box className="flex" sx={{ gap: "1rem" }}>
                    {/* <IconContainer img="./icons/mail.png" />
                      <IconContainer img="./icons/instagram.png" />
                      <IconContainer img="./icons/mail.png" />
                      <IconContainer img="./icons/mail.png" /> */}
                  </Box>
                </Grid>
                <Grid item md={3} sx={{ display: "flex", justifyContent: "flex-end", height: "fit-content" }}>
                  {/* <IconContainer img="./icons/save.png" /> */}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        {/* <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "90%" }}>
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
        </Container> */}
      </Paper>
    </Grid>
  );
}

export default Card;
