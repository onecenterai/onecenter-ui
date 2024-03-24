import { Grid, Modal, Typography } from "@mui/material";
import { StyledInput } from "../../../styled-components/styledInput";
import { StyledButton } from "../../../styled-components/styledButton";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createAction, getActions } from "../../../slices/ActionsSlice";
import { AppDispatch } from "../../../store";
import { ValuesProps } from "./Actions";
import { useState } from "react";
import { WaveLoader } from "react-loaders-kit";
import CodeEditor from "@uiw/react-textarea-code-editor";

function ActionModal({ open, handleClose }: { open: boolean; handleClose: () => void }) {
  const dispatch = useDispatch<AppDispatch>();
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    height: 800,
    bgcolor: "background.paper",
    border: "0",
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
  };

  const initialValues = {
    name: "",
    description: "",
    example_request: "",
    example_response: "",
  };
  const onSubmit = (values: ValuesProps) => {
    console.log(values);
    setLoading(true);

    dispatch(createAction(values))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((action: any) => {
        handleClose();
        if (action?.payload?.message) {
          setAlert(action.payload.message);
          console.log(alert);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .then(() => {
        dispatch(getActions());
      });
  };
  const loaderProps = {
    loading,
    size: 35,
    duration: 1,
    colors: ["#5e22f0", "#f6b93b"],
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Grid container spacing={1} sx={style}>
        <Grid item md={12}>
          <Typography variant="h3">Create Actions!</Typography>
          <Typography variant="h6" sx={{ margin: "2rem 0rem 0rem 0rem" }}>
            Let OneCenter completely solve your customer problems for you. <br /> How? Simple! Give OneCenter access to your API and Watch it do magic.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            API Url
          </Typography>

          <StyledInput required={true} variant="outlined" color="primary" fullWidth placeholder="Enter API url" {...formik.getFieldProps("name")} />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Description
          </Typography>

          <StyledInput required={true} variant="outlined" color="primary" fullWidth placeholder="What is this endpoint for?" {...formik.getFieldProps("description")} />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Request Body Sample
          </Typography>
          <CodeEditor
            language="js"
            placeholder="Please enter sample request body. eg: `curl https://api.test.com/posts`"
            {...formik.getFieldProps("example_request")}
            padding={15}
            style={{
              fontWeight: "bold",
            }}
            data-color-mode="light"
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Response Body Sample
          </Typography>
          <CodeEditor
            language="js"
            data-color-mode="light"
            placeholder='Please enter sample response body. eg: {id: 1, post: "this is the post body"}'
            {...formik.getFieldProps("example_response")}
            padding={15}
            style={{
              fontWeight: "bold",
            }}
          />
        </Grid>

        <Grid item md={2} sx={{ marginBottom: "1.5rem" }} className="justify-center">
          {!loading ? (
            <StyledButton
              sx={{ height: "fit-content" }}
              variant="contained"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Save Action
            </StyledButton>
          ) : (
            <WaveLoader {...loaderProps} />
          )}
        </Grid>
      </Grid>
    </Modal>
  );
}

export default ActionModal;
