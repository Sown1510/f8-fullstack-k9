import React from "react";
import { TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

function todolist() {
  return (
    <>
      <div style={{ width: "600px", margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>LIST</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <TextField fullWidth sx={{}} id="outlined-basic" label="Outlined" variant="outlined" />
          <Button sx={{}} variant="contained">
            Contained
          </Button>
        </div>
        <ul style={{ listStyle: "none" }}>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ width: "100%", alignContent: "center", border: "solid", borderWidth: "1px" }}>Product1</span>
            <div style={{ display: "flex", gap: "5px" }}>
              <DoneIcon sx={{ fontSize: "30px", border: "solid", borderColor: "black", borderWidth: "1px", borderRadius: "5px", cursor: "pointer" }} />
              <EditIcon sx={{ fontSize: "30px", border: "solid", borderColor: "black", borderWidth: "1px", borderRadius: "5px", cursor: "pointer" }} />
              <DeleteIcon sx={{ fontSize: "30px", border: "solid", borderColor: "black", borderWidth: "1px", borderRadius: "5px", cursor: "pointer" }} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default todolist;
