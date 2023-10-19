import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createAgent, getAgents } from "../../../slices/AgentsSlice";
import CreateAgentForm from "./CreateAgentForm";
import { AppDispatch } from "../../../store";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
interface addAgentProps {
  openAgentModal: boolean;
  handleNewAgentModalClose: () => void;
}

function AddAgentModal({ openAgentModal, handleNewAgentModalClose }: addAgentProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [alert, setAlert] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };

  const onSubmit = (values: {}) => {
    dispatch(createAgent(values))
      .then((action: any) => {
        if (action?.payload?.message) {
          setAlert(action.payload.message);
          console.log(alert);
        } else {
          // setAlert("Sign Up was successful");
          // console.log(alert);
        }
      })

      .then(() => {
        dispatch(getAgents());
        handleNewAgentModalClose();
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <Box>
      <Modal open={openAgentModal} onClose={handleNewAgentModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <CreateAgentForm formik={formik} />
        </Box>
      </Modal>
    </Box>
  );
}

export default AddAgentModal;
