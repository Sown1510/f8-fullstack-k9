import React from "react";
import { DialogTitle, Dialog, DialogContent, DialogActions, Button, TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import DialogContainer from "../DialogContainer";

function ProductDialog({ show, onClose, onSave, product, onInput, categories = [] }) {
  return (
    <>
      <DialogContainer show={show} onClose={onClose} onSave={onSave}>
        <DialogContent style={{ overflow: "visible" }}>
          <TextField style={{ display: "block", marginBottom: "10px" }} id="name" label="Name" variant="outlined" value={product.name} onChange={(e) => onInput(e, "name")} />
          <FormControl fullWidth style={{ marginBottom: "10px" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={product.categoryId} label="Category" onChange={(e) => onInput(e, "categoryId")}>
              {categories.map((category) => {
                return (
                  <MenuItem key={`${category.id}`} value={`${category.id}`}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField style={{ display: "block" }} id="orderNum" label="Order Number" variant="outlined" onChange={(e) => onInput(e, "orderNum")} value={product.orderNum} />
        </DialogContent>
      </DialogContainer>
    </>
  );
}

export default ProductDialog;
