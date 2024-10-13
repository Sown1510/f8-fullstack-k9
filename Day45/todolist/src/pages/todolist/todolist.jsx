import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { getMethod } from "../../utils";

function todolist() {
  const [state, dispatch] = 

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const data = await getMethod("tasks");
      setTasks(data);
    } catch (error) {
      alert("Lỗi khi lấy danh sách nhiệm vụ");
      console.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onSave = () => {};

  const onDone = () => {};

  const onEdit = () => {};

  const onDelete = () => {};

  return (
    <>
      <div style={{ width: "600px", margin: "auto" }}>
        <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>Todolist</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <TextField fullWidth sx={{}} id="outlined-basic" label="Task" variant="outlined" />
          <Button onClick={onSave} sx={{}} variant="contained">
            Save
          </Button>
        </div>
        <ul style={{ listStyle: "none" }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ display: "flex", justifyContent: "space-between", border: "solid", borderWidth: "1px", padding: "5px", borderRadius: "5px", marginTop: "5px", background: `${task.done ? "#b7e3b7" : ""}` }}>
              <span style={{ width: "100%", alignContent: "center" }}>{task.content}</span>
              <div style={{ display: "flex", gap: "5px" }}>
                <DoneIcon onClick={onDone} sx={{ fontSize: "30px", border: "solid", borderColor: "black", borderWidth: "1px", borderRadius: "5px", cursor: "pointer" }} />
                <EditIcon onClick={onEdit} sx={{ fontSize: "30px", border: "solid", borderColor: "black", borderWidth: "1px", borderRadius: "5px", cursor: "pointer" }} />
                <DeleteIcon onClick={onDelete} sx={{ fontSize: "30px", border: "solid", borderColor: "black", borderWidth: "1px", borderRadius: "5px", cursor: "pointer" }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default todolist;
