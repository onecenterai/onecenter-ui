import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { InfoRounded } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  title: string;
  description: string;
  createdAt: string;
  modifiedAt: string;
}

export default function BasicModal({ title, description, createdAt, modifiedAt }: BasicModalProps) {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleModalOpen} sx={{ width: "100%" }}>
        More Info
      </Button>
      <Modal open={open} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <InfoRounded sx={{ verticalAlign: "middle" }} /> More Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Title: {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Created At: {createdAt}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Modified At: {modifiedAt}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
