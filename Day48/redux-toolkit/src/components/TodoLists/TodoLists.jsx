import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getTasks } from "../../store/index.js";
import Todo from "../Todo/Todo.jsx";
import Filters from "../Filters/Filters.jsx";
import { todolistSlice } from "./todolistsSlice.js";

const initTask = { id: "", name: "", priority: "medium", isDone: false };

export default function TodoLists() {
  const tasks = useSelector(getTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("medium");
  const dispatch = useDispatch();

  const handleNewTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const handleNewTaskPriority = (e) => {
    setPriority(e.target.value);
  };

  const handleSave = () => {
    const newTask = { ...initTask, name: taskName, priority: priority };
    dispatch(todolistSlice.actions.addTask(newTask));
    setTaskName("");
  };

  return (
    <div style={{ height: "100vh", alignContent: "center" }}>
      <div style={{ maxWidth: "500px", margin: "auto", border: "1px solid green", padding: "20px", borderRadius: "5px" }}>
        <Filters />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <TextField fullWidth variant="outlined" placeholder="New Task..." value={taskName} onInput={handleNewTaskName} />
          <FormControl variant="outlined">
            <Select value={priority || ""} onChange={handleNewTaskPriority} displayEmpty>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem defaultChecked value="medium">
                Medium
              </MenuItem>
              <MenuItem value="hgih">High</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ marginTop: "5px" }}>
              <Todo task={task} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
