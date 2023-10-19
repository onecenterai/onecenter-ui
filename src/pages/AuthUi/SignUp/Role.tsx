import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { StyledButton } from "../../../styled-components/styledButton";
import { makeStyles } from "@mui/styles";
import { DomainAdd, PersonOutline } from "@mui/icons-material";

const useStyles = makeStyles(() => {
  return {
    icon: {
      height: "1.5rem",
      width: "1.5rem",
      objectFit: "contain",
    },
  };
});
function Role({ splideRef }: any) {
  const classes = useStyles();
  // const splideRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    splideRef.current.go(index);
  };
  return (
    <>
      {" "}
      <Box>
        <Typography variant="h3">Get Started Now</Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 300 }}>
          Enter your credentials to access your account
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: "2rem 0rem" }}>
        <Grid item md={6}>
          <StyledButton
            color="primary"
            fullWidth
            variant={activeSlide == 0 ? "contained" : "outlined"}
            sx={{ fontWeight: 400, fontSize: "1.3rem" }}
            startIcon={<DomainAdd />}
            onClick={() => {
              handleSlideChange(0);
            }}
          >
            Sign Up as Partner
          </StyledButton>
        </Grid>
        <Grid item md={6}>
          <StyledButton
            color="primary"
            fullWidth
            variant={activeSlide == 1 ? "contained" : "outlined"}
            sx={{ fontWeight: 400, fontSize: "1.3rem" }}
            startIcon={<PersonOutline />}
            onClick={() => {
              handleSlideChange(1);
            }}
          >
            Sign Up as User
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Role;
