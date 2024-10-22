import React, { memo } from "react";
import { DialogContent, TextField, InputLabel, Select, MenuItem, FormControl, Button } from "@mui/material";
import DialogContainer from "../DialogContainer";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function ProductDialog({ show, onClose, onSave, product, onInput, categories = [], onUploadFile, onDeleteImg }) {
  console.log("render-productDialog");
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

  const DeleteButton = styled("button")({
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "#000",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    cursor: "pointer",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  });

  return (
    <>
      <DialogContainer show={show} onClose={onClose} onSave={onSave}>
        <DialogContent style={{ overflow: "visible" }}>
          <Button style={{ marginBottom: "10px" }} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
            Upload files
            <VisuallyHiddenInput type="file" onChange={onUploadFile} multiple />
          </Button>
          <ul style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            {product.images.map((image, index) => (
              <li key={index} data-id={index} style={{ position: "relative", display: "inline-block" }}>
                <img src={image} alt="image" style={{ height: "50px", display: `${image ? "block" : "none"}`, borderRadius: "5px" }} />
                <DeleteButton onClick={onDeleteImg}>X</DeleteButton>
              </li>
            ))}
          </ul>
          <TextField fullWidth sx={{ mb: 2, display: "block", marginBottom: "10px" }} id="name" label="Name" variant="outlined" value={product.name} onChange={(e) => onInput(e, "name")} />
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
          <TextField
            fullWidth // Để input co giãn 100% theo Dialog
            sx={{ mb: 2, display: "block" }}
            id="orderNum"
            label="Order Number"
            variant="outlined"
            onChange={(e) => onInput(e, "orderNum")}
            value={product.orderNum}
            type="number"
          />
        </DialogContent>
      </DialogContainer>
    </>
  );
}

export default memo(ProductDialog);
