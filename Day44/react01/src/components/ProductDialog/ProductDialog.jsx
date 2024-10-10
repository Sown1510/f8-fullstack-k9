import React from "react";
import { DialogContent, TextField, InputLabel, Select, MenuItem, FormControl, Button } from "@mui/material";
import DialogContainer from "../DialogContainer";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function ProductDialog({ show, onClose, onSave, product, onInput, categories = [] }) {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <DialogContainer show={show} onClose={onClose} onSave={onSave}>
        <DialogContent style={{ overflow: "visible" }}>
          <Button style={{ marginBottom: "10px" }} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
            Upload files
            <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
          </Button>
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
          <TextField style={{ display: "block" }} id="orderNum" label="Order Number" variant="outlined" onChange={(e) => onInput(e, "orderNum")} value={product.orderNum} type="number" />
        </DialogContent>
      </DialogContainer>
    </>
  );
}

export default ProductDialog;
