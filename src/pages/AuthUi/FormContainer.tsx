import { Box, Container, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextContent from "./TextContent";
import Role from "./SignUp/Role";

const useStyles = makeStyles((theme: Theme) => {
  return {
    signUp: {
      backgroundColor: "#eff2f6",
      minHeight: "100vh",
      padding: "2rem",
    },
    signUpForm: {
      backgroundColor: "white",
      padding: "2rem",
      minHeight: "93vh",
      borderRadius: "3rem 0rem 0rem 3rem",
    },
    textContent: {
      backgroundColor: theme.palette.primary.main,
      padding: "2rem",
      minHeight: "93vh",
      borderRadius: "0rem 3rem 3rem 0rem",
    },
    logoContainer: {
      height: "4rem",
      width: "4rem",
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
    },
    icon: {
      height: "1.5rem",
      width: "1.5rem",
      objectFit: "contain",
    },
  };
});
function FormContainer({ children, splideRef }: any) {
  const classes = useStyles();
  return (
    <Box className={classes.signUp}>
      <Container>
        <Grid container>
          <Grid item md={6} className={classes.signUpForm}>
            <Box className={classes.logoContainer}></Box>
            <Container sx={{ padding: "0rem 7rem !important" }}>
              <Role splideRef={splideRef} />

              {children}
            </Container>
          </Grid>
          <Grid item md={6} className={classes.textContent}>
            <TextContent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FormContainer;
