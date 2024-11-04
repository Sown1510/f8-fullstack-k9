import { Checkbox, FormControlLabel, FormGroup, InputAdornment, Radio, RadioGroup, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getCategory, getPriority, getSearchStr } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { filterSlice } from "./filterSlice";

export default function Filters() {
  const priority = useSelector(getPriority);
  const searchStr = useSelector(getSearchStr);
  const category = useSelector(getCategory);

  const dispatch = useDispatch();

  const onChangeSearchStr = (event) => {
    const newSearchStr = event.target.value;
    dispatch(filterSlice.actions.searchStr(newSearchStr));
  };

  const onChangeCategory = (event) => {
    const newCategory = event.target.value;
    dispatch(filterSlice.actions.category(newCategory));
  };

  const onChangePriority = (event) => {
    const newPriority = event.target.value;
    dispatch(filterSlice.actions.priority(newPriority));
  };

  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={searchStr}
        onInput={onChangeSearchStr}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <p>Category</p>
      <RadioGroup row aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" onChange={onChangeCategory} value={category}>
        <FormControlLabel value="" control={<Radio />} label="All" />
        <FormControlLabel value="finish" control={<Radio />} label="Finish" />
        <FormControlLabel value="task" control={<Radio />} label="To do" />
      </RadioGroup>
      <p>Priority</p>
      <FormGroup row onChange={onChangePriority}>
        <FormControlLabel control={<Checkbox checked={priority.includes("low")} value={"low"} />} label="Low" />
        <FormControlLabel control={<Checkbox checked={priority.includes("medium")} value={"medium"} />} label="Medium" />
        <FormControlLabel control={<Checkbox checked={priority.includes("high")} value={"high"} />} label="High" />
      </FormGroup>
    </div>
  );
}
