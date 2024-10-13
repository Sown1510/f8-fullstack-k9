import React, { useEffect, useReducer, useState } from "react";
import { TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { deleteMethod, getMethod, postMethod, putMethod } from "../../utils";
import CachedIcon from "@mui/icons-material/Cached";
import "./style.css";

function todolist() {
  const initTask = { content: "", done: false };
  const [loading, setLoading] = useState(false);
  const reducer = (state, action) => {
    switch (action.action) {
      case "tasks/onUpdate":
        return { ...state, tasks: action.payload.data };
      case "task/onInput":
        const curTask = { ...state.task };
        curTask.content = action.payload.value;
        return { ...state, task: curTask };
      case "tasks/onSave":
        if (action.payload.task.id) {
          const idEdit = action.payload.task.id;
          const updateEditTasks = state.tasks.map((task) => (task.id == idEdit ? state.task : task));
          return { ...state, tasks: updateEditTasks, task: { ...initTask } };
        } else {
          const newTask = { ...state.task };
          return { ...state, tasks: [...state.tasks, newTask], task: { ...initTask } };
        }
      case "tasks/done":
        const idDone = action.payload.id;
        const updateDoneTasks = state.tasks.map((task) => (task.id == idDone ? { ...task, done: true } : task));
        return { ...state, tasks: updateDoneTasks };
      case "tasks/undone":
        const idUndone = action.payload.id;
        const updateUndoneTasks = state.tasks.map((task) => (task.id == idUndone ? { ...task, done: false } : task));
        return { ...state, tasks: updateUndoneTasks };
      case "tasks/delete":
        const idDelete = action.payload.id;
        const newTasks = state.tasks.filter((task) => task.id != idDelete);
        return { ...state, tasks: newTasks };
      case "tasks/edit":
        const editTask = action.payload.task;
        return { ...state, task: editTask };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { tasks: [], task: { ...initTask } });

  const getTasks = async () => {
    try {
      setLoading(true);
      const data = await getMethod("tasks");
      dispatch({ action: "tasks/onUpdate", payload: { data } });
    } catch (error) {
      alert("Lỗi khi lấy danh sách nhiệm vụ");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onInput = (e) => {
    const { value } = e.target;
    dispatch({ action: "task/onInput", payload: { value } });
  };

  const onSave = async () => {
    if (loading) {
      alert("Bình tĩnh đợi tải dữ liệu đã !!!");
      return;
    }
    if (!state.task.content) {
      alert("Có gì đâu mà lưu ???");
      return;
    }
    dispatch({ action: "tasks/onSave", payload: { task: state.task } });
    try {
      setLoading(true);
      state.task.id ? await putMethod(`tasks/${state.task.id}`, state.task) : await postMethod("tasks", state.task);
      await getTasks();
    } catch (error) {
      alert("Lỗi khi lưu dữ liệu");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onDone = async (task) => {
    if (loading) {
      alert("Bình tĩnh đợi tải dữ liệu đã !!!");
      return;
    }
    const updateTask = { ...task, done: !task.done };
    dispatch({ action: task.done ? "tasks/undone" : "tasks/done", payload: { id: task.id } });
    try {
      setLoading(true);
      await putMethod(`tasks/${task.id}`, updateTask);
    } catch (error) {
      alert("Lỗi khi lưu dữ liệu");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onEdit = (task) => {
    if (loading) {
      alert("Bình tĩnh đợi tải dữ liệu đã !!!");
      return;
    }
    dispatch({ action: "tasks/edit", payload: { task } });
  };

  const onDelete = async (task) => {
    dispatch({ action: "tasks/delete", payload: { id: task.id } });
    try {
      setLoading(true);
      await deleteMethod(`tasks/${task.id}`);
    } catch (error) {
      alert("Lỗi khi xoá dữ liệu");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSave();
    }
  };

  return (
    <>
      <div style={{ width: "600px", margin: "auto" }}>
        <CachedIcon sx={{ visibility: loading ? "visible" : "hidden" }} className="rotate-icon" />
        <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>Todolist</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <TextField onKeyDown={handleKeyDown} onChange={onInput} fullWidth sx={{}} id="outlined-basic" label="Task" variant="outlined" value={state.task.content} />
          <Button onClick={onSave} sx={{}} variant="contained">
            Save
          </Button>
        </div>
        <ul style={{ listStyle: "none" }}>
          {state.tasks.map((task, index) => (
            <li key={`task-${index}`} style={{ display: "flex", justifyContent: "space-between", border: "solid", borderWidth: "1px", padding: "5px", borderRadius: "5px", marginTop: "5px", background: `${task.done ? "#b7e3b7" : ""}` }}>
              <span style={{ width: "100%", alignContent: "center" }}>{task.content}</span>
              <div style={{ display: "flex", gap: "5px" }}>
                <DoneIcon
                  className="action-icon"
                  onClick={() => {
                    onDone(task);
                  }}
                />
                <EditIcon
                  className="action-icon"
                  onClick={() => {
                    onEdit(task);
                  }}
                />
                <DeleteIcon
                  className="action-icon"
                  onClick={() => {
                    onDelete(task);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default todolist;
