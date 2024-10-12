import React from "react";
import { DialogTitle, Dialog, DialogActions, Button } from "@mui/material";

function DialogContainer({ show, onClose, onSave, children }) {
  return (
    <>
      <Dialog
        open={show}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="xs" // Đặt maxWidth, nhưng mình sẽ ghi đè bằng sx bên dưới
        sx={{ "& .MuiDialog-paper": { width: "100%", maxWidth: "500px" } }}
      >
        <DialogTitle id="alert-dialog-title">{"Add Category"}</DialogTitle>
        {children}
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogContainer;
