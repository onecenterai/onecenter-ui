import { Box, Checkbox, Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import { StyledButton } from "../../../../styled-components/styledButton";
import { StyledInput } from "../../../../styled-components/styledInput";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../../slices/AuthSlice";
import { AppDispatch } from "../../../../store";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

function UserSignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const onSubmit = (values: {}) => {
    dispatch(registerUser(values));
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
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Name
        </Typography>
        <StyledInput variant="outlined" color="primary" fullWidth {...formik.getFieldProps("name")} />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Email Address
        </Typography>
        <StyledInput variant="outlined" color="primary" fullWidth {...formik.getFieldProps("email")} />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Phone No.
        </Typography>
        <StyledInput variant="outlined" type="number" color="primary" fullWidth {...formik.getFieldProps("phone")} />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Box className="justify-space-btw">
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Create Password
          </Typography>
        </Box>
        <StyledInput
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
        <Typography variant="h6" color="info" sx={{ fontWeight: 300 }}>
          Have an account? Sign In
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UserSignUp;
