import AboutCompanyForm from "./AboutCompanyForm";
import AboutAgentForm from "./AboutAgentForm";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { registerPartner } from "../../../../slices/AuthSlice";

function PartnerSignUp() {
  const splideRef = useRef(null);
  const [alert, setAlert] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const handleSlideChange = (index: number) => {
    (splideRef.current as any)?.go(index);
  };
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    logo: "",
    website: "",
    agent: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  };

  const onSubmit = (values: {}) => {
    dispatch(registerPartner(values)).then((action) => {
      if (action?.payload?.message) {
        setAlert(action.payload.message);
      } else if (action?.payload) {
        setAlert("Sign up sucessful.");
        console.log(alert);
      } else {
        setAlert("An error occured, please try again");
      }
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Splide
      options={{
        type: "fade",
        pagination: false,
        arrows: false,
        drag: false,
      }}
      ref={splideRef}
    >
      <SplideSlide>
        <AboutCompanyForm
          formik={formik}
          handleSlideChange={() => {
            handleSlideChange(1);
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <AboutAgentForm
          formik={formik}
          alertMessage={alert}
          handleSlideChange={() => {
            handleSlideChange(0);
          }}
        />
      </SplideSlide>
    </Splide>
  );
}

export default PartnerSignUp;
