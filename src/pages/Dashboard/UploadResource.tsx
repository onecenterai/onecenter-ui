import { Box, Button, Grid, IconButton, Typography, styled } from "@mui/material";
import Layout from "./layout/Layout";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { uploadFile } from "../../slices/UploadSlice";
import { getManuals, postManual } from "../../slices/PostManualSlice";
import { StyledInput } from "../../styled-components/styledInput";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { StyledButton } from "../../styled-components/styledButton";
import { useNavigate } from "react-router-dom";
import { WaveLoader } from "react-loaders-kit";

const VisuallyHiddenInput = styled("input")({
  // clip: "rect(0 0 0 0)",
  // clipPath: "inset(50%)",
  opacity: 0,
  height: "100%",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: "100%",
});
function UploadResource() {
  const initialValues = {
    title: "",
    description: "",
    file: "",
  };

  const navigate = useNavigate();
  const postStatus = useSelector((state: any) => state.Manuals.postManualStatus);
  const loading = postStatus == "loading" ? true : false;

  const loaderProps = {
    loading,
    size: 35,
    duration: 1,
    colors: ["#5e22f0", "#f6b93b"],
  };

  const onSubmit = (values) => {
    dispatch(uploadFile(values.file)).then((action) => {
      if (action.payload) {
        const url = action.payload.url;
        const updatedValues = { ...values, file: url };
        dispatch(postManual(updatedValues));
      }
    });
  };

  const resources = useSelector((state: any) => {
    return state.Manuals.resources;
  });
  console.log(resources);

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const dispatch = useDispatch<AppDispatch>();
  return (
    <Layout>
      <Box sx={{ height: "90vh", width: "100%" }} className="center-center">
        <Grid container sx={{ width: "50rem" }} spacing={2}>
          <Grid item md={12}>
            <Typography variant="h6" sx={{ fontWeight: 300 }}>
              Title
            </Typography>
            <StyledInput fullWidth {...formik.getFieldProps("title")} />
          </Grid>
          <Grid item md={12}>
            <Typography variant="h6" sx={{ fontWeight: 300 }}>
              Description
            </Typography>
            <StyledInput fullWidth multiline rows={3} {...formik.getFieldProps("description")} />
          </Grid>
          <Grid item md={12}>
            <Button sx={{ height: "20rem", width: "100%", borderRadius: "1rem", border: "1px dashed black", margin: "auto !important" }}>
              <Typography variant="h3">{formik.values.file != "" ? "Resource Added" : "Upload Resource"}</Typography>
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => {
                  formik.setFieldValue("file", event?.target?.files[0]);
                }}
              />
            </Button>
          </Grid>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            {!loading ? (
              <StyledButton
                onClick={() => {
                  formik.handleSubmit;
                }}
                fullWidth
                variant="contained"
              >
                Upload
              </StyledButton>
            ) : (
              <WaveLoader {...loaderProps} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default UploadResource;
