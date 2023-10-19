import { Alert, Box, Checkbox, Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import { StyledButton } from "../../../../styled-components/styledButton";
import { StyledInput } from "../../../../styled-components/styledInput";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../../slices/AuthSlice";
import { AppDispatch } from "../../../../store";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserSignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [alert, setAlert] = useState("");
  const onSubmit = (values: {}) => {
    dispatch(registerUser(values)).then((action) => {
      setAlert(action.payload.message);
    });
  };
  const initialValues = {
    email: "",
    name: "",
    phone: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <Grid container>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        {alert && (
          <Alert severity="success" sx={{ fontSize: "1.4rem", width: "100%" }} className="center-center">
            {alert},{" "}
            <Link to="/signin" style={{ textDecoration: "underline", color: "#3A49F9" }}>
              Sign in
            </Link>
          </Alert>
        )}
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Name
        </Typography>
        <StyledInput required={true} variant="outlined" color="primary" fullWidth {...formik.getFieldProps("name")} required />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Email Address
        </Typography>
        <StyledInput required={true} aria-required variant="outlined" color="primary" fullWidth {...formik.getFieldProps("email")} />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Phone No.
        </Typography>
        <StyledInput required={true} aria-required variant="outlined" type="number" color="primary" fullWidth {...formik.getFieldProps("phone")} />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Box className="justify-space-btw">
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Create Password
          </Typography>
        </Box>
        <StyledInput
          required={true}
          aria-required
          variant="outlined"
          color="primary"
          fullWidth
          type={showPassword ? "text" : "password"}
          {...formik.getFieldProps("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={12} className="align-center" sx={{ gap: ".7rem", marginBottom: "1.5rem" }}>
        <Checkbox sx={{ padding: 0 }} color="primary" />
        <Typography variant="h6" color="info" sx={{ fontWeight: 300 }}>
          I agree to the terms and policy
        </Typography>
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <StyledButton
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Sign Up
        </StyledButton>
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" color="info" sx={{ fontWeight: 400 }}>
          Have an account?{" "}
          <Link to="/signin" style={{ textDecoration: "underline", color: "#3A49F9", fontWeight: 600 }}>
            Sign In
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UserSignUp;
