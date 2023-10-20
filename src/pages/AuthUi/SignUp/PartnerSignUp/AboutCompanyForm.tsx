import { Grid, Typography } from "@mui/material";
import { StyledInput } from "../../../../styled-components/styledInput";
import { StyledButton } from "../../../../styled-components/styledButton";

function AboutCompanyForm({ handleSlideChange, formik }: any) {
  return (
    <Grid container>
      <Grid item md={12} sm={12} xs={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Company Name
        </Typography>
        <StyledInput required={true} variant="outlined" color="primary" fullWidth {...formik.getFieldProps("name")} />
      </Grid>
      <Grid item md={12} sm={12} xs={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Company Email Address
        </Typography>
        <StyledInput required={true} variant="outlined" color="primary" fullWidth {...formik.getFieldProps("email")} />
      </Grid>
      <Grid item md={12} sm={12} xs={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Company Phone
        </Typography>
        <StyledInput required={true} variant="outlined" color="primary" fullWidth {...formik.getFieldProps("phone")} />
      </Grid>

      <Grid item md={12} sm={12} xs={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Company Website
        </Typography>
        <StyledInput required={true} variant="outlined" color="primary" fullWidth {...formik.getFieldProps("website")} />
      </Grid>
      <Grid item md={12} sm={12} xs={12} sx={{ marginBottom: "1.5rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Company Physical Address
        </Typography>
        <StyledInput required={true} variant="outlined" color="primary" fullWidth {...formik.getFieldProps("address")} />
      </Grid>

      <Grid item md={12} sm={12} xs={12} sx={{ marginBottom: "1.5rem" }}>
        <StyledButton variant="contained" color="primary" fullWidth onClick={handleSlideChange}>
          Continue
        </StyledButton>
      </Grid>
    </Grid>
  );
}

export default AboutCompanyForm;
