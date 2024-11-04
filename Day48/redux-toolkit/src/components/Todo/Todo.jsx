import { Checkbox } from "@mui/material";
import { todolistSlice } from "../TodoLists/todolistsSlice";
import { useDispatch } from "react-redux";

export default function Todo({ task }) {
  const dispatch = useDispatch();
  const handleCheckDone = () => {
    dispatch(todolistSlice.actions.checkTask(task));
  };
  return (
    <div>
      <div style={{ display: "flex", border: "1px solid black", borderRadius: "5px", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ margin: "0", padding: "0 10px" }}>{task.name}</p>
        <div style={{ display: "flex" }}>
          <p style={{ background: "gray", padding: "0 10px", margin: "auto", alignContent: "center", borderRadius: "50px", height: "fit-content" }}>{task.priority}</p>
          <Checkbox onChange={handleCheckDone} checked={task.isDone} />
        </div>
      </div>
    </div>
  );
}
