import { Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import { StyledInput } from "../../../../styled-components/styledInput";
import { StyledButton } from "../../../../styled-components/styledButton";
import { ChevronLeft, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

function AboutAgentForm({ handleSlideChange, formik }: any) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid container>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Name
        </Typography>
        <StyledInput variant="outlined" color="primary" fullWidth {...formik.getFieldProps("agent.name")} />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Email Address
        </Typography>
        <StyledInput variant="outlined" color="primary" fullWidth {...formik.getFieldProps("agent.email")} />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Phone No.
        </Typography>
        <StyledInput variant="outlined" color="primary" fullWidth {...formik.getFieldProps("agent.phone")} />
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Create Password
        </Typography>
        <StyledInput
          variant="outlined"
          color="primary"
          fullWidth
          {...formik.getFieldProps("agent.password")}
          type={showPassword ? "text" : "password"}
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
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <IconButton color="primary" sx={{ border: ".5px solid" }} onClick={handleSlideChange}>
          <ChevronLeft sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Grid>
      <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
        <StyledButton variant="contained" color="primary" fullWidth onClick={formik.handleSubmit}>
          Complete Sign Up
        </StyledButton>
      </Grid>
    </Grid>
  );
}

export default AboutAgentForm;
