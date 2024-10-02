import React from "react";
import { DialogTitle, Dialog, DialogContent, DialogActions, Button, DialogContentText, TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";

export default function ({ show, onClose, onSave, category = {}, onInput, categories }) {
  return (
    <>
      <Dialog open={show} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Add Category"}</DialogTitle>
        <DialogContent>
          <TextField style={{ display: "block", marginBottom: "10px" }} id="name" label="Name" variant="outlined" value={category.name} onChange={(e) => onInput(e, "name")} />
          <TextField style={{ display: "block" }} id="orderNum" label="Order Number" variant="outlined" onChange={(e) => onInput(e, "orderNum")} value={category.orderNum} />
        </DialogContent>
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
