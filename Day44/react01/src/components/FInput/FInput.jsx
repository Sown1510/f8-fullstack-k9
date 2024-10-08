import { TextField, Button } from "@mui/material";

function FInput({ onInput, onSave, product }) {
  let categories = [
    { id: 1, name: "quan ao", orderNum: 2 },
    { id: 2, name: "dien thoai", orderNum: 1 },
    { id: 3, name: "do an", orderNum: 3 },
  ];
  return (
    <>
      <form action="">
        <TextField id="name" label="Name" variant="outlined" value={product.name} onChange={(e) => onInput(e, "name")} />
        <TextField id="orderNum" label="Order Number" variant="outlined" onChange={(e) => onInput(e, "orderNum")} value={product.orderNum} />
        <Button type="" variant="contained" onClick={(e) => onSave(e)}>
          Save
        </Button>
      </form>
    </>
  );
}

export default FInput;
