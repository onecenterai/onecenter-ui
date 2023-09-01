import { Button, Grid, TextField, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postUserData } from "../../slices/WaitListSlice";
import { AppDispatch } from "../../store";
import Mic from "../../utilities/Mic";
const useStyles = makeStyles((theme: Theme) => {
  return {
    waitlist: {
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    span: {
      color: theme.palette.primary.main,
      fontFamily: "Lexend",
    },
  };
});
function WaitList() {
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();
  const initialValues = {
    email: "",
    name: "",
    company: "",
  };
  const validationSchema = Yup.object({
    first_name: Yup.string(),
    last_name: Yup.string(),
  });
  const onSubmit = (values: object) => {
    console.log(values);
    dispatch(postUserData(values));
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className={classes.waitlist} id="waitlist">
      <Typography variant="h2" color="error" sx={{ textAlign: "center" }}>
        Join our waitlist now for exclusive beta testing <br /> with <span className={classes.span}>customers</span> <span style={{ fontFamily: "Lexend" }}>and</span>{" "}
        <span className={classes.span}>companies.</span>{" "}
      </Typography>
      <Typography variant="h5" color="secondary" sx={{ textAlign: "center", paddingTop: "2rem" }}>
        Be one of the first to lay hands on our customer care solution <br /> and tell us what you think!
      </Typography>
      <Typography variant="h6" color="error" sx={{ textAlign: "center", padding: "2rem 0rem" }}>
        To join our waitlist, tell us an experience, good or bad you have had <br /> with a customer service agent of any company.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Grid item md={5} sm={11} xs={11} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
            <TextField variant="outlined" color="primary" label="Full Name" fullWidth {...formik.getFieldProps("name")} />
            <TextField variant="outlined" color="primary" label="Email" fullWidth {...formik.getFieldProps("email")} />
            <TextField variant="outlined" color="primary" label="The Company" fullWidth {...formik.getFieldProps("company")} />
            <Button variant="contained" color="primary" size="large" fullWidth sx={{ fontSize: "1.7rem", textTransform: "none", padding: "1.2rem 0rem" }} type="submit">
              Join Now
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* <div style={{ display: "none" }}>
        <RecordAudio record={recorder} />
      </div> */}
      <Mic />
    </div>
  );
}

export default WaitList;
