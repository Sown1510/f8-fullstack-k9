import React from "react";
import { DialogTitle, Dialog, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import DialogContainer from "../DialogContainer";
import "./style.css";

function CategoryDialog({ show, onClose, onSave, category = {}, onInput, categories }) {
  return (
    <>
      <DialogContainer show={show} onClose={onClose} onSave={onSave}>
        <DialogContent style={{ overflow: "visible" }}>
          <TextField fullWidth sx={{ mb: 2, display: "block", marginBottom: "10px" }} id="name" label="Name" variant="outlined" value={category.name} onChange={(e) => onInput(e, "name")} />
          <TextField fullWidth sx={{ mb: 2, display: "block" }} id="orderNum" label="Order Number" variant="outlined" onChange={(e) => onInput(e, "orderNum")} value={category.orderNum} type="number" />
        </DialogContent>
      </DialogContainer>
    </>
  );
}

export default CategoryDialog;
