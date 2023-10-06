import { makeStyles } from "@mui/styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import UserSignUp from "./UserSignUp/UserSignUp";
import PartnerSignUp from "./PartnerSignUp/PartnerSignUp";
import { useRef } from "react";
import FormContainer from "../FormContainer";

const useStyles = makeStyles(() => {
  return {
    signUp: {
      height: "100vh",
    },
  };
});
function Signup() {
  const classes = useStyles();
  const splideRef = useRef(null);

  return (
    <div className={classes.signUp}>
      <FormContainer splideRef={splideRef}>
        <Splide options={{ type: "fade", arrows: false, pagination: false, drag: false }} ref={splideRef}>
          <SplideSlide>
            <PartnerSignUp />
          </SplideSlide>
          <SplideSlide>
            <UserSignUp />
          </SplideSlide>
        </Splide>
      </FormContainer>
    </div>
  );
}

export default Signup;
