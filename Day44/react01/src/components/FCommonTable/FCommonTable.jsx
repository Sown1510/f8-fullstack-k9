import "../../styles/FCommonTable.css";
import { TableContainer, Paper, TableCell, TableBody, Table, TableHead, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../../index.css";
import style from "./style.module.css";

const FCommonTable = ({ columns, rows, maxWidth, onUpdate, onDelete, categories = [] }) => {
  return (
    <>
      <TableContainer sx={{ maxWidth: maxWidth, margin: "0 auto" }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell width={column?.width} key={column.name} className={style["text--red"]}>
                  {column.text}{" "}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, ridx) => {
              return (
                <TableRow key={`${ridx}`}>
                  {columns.map((column) => {
                    if (column.name === "categoryId") {
                      const category = categories.find((category) => category.id === row[column.name]);
                      const categoryName = category ? category.name : "Unknown";

                      return <TableCell key={`${ridx}${column.name}`}>{categoryName}</TableCell>;
                    }
                    if (column.name === "action") {
                      return (
                        <TableCell key={`${ridx}${column.name}`}>
                          <EditIcon onClick={() => onUpdate(row)} sx={{ color: "green" }} className="ma-2" />
                          <DeleteOutlineIcon onClick={() => onDelete(row.id)} sx={{ color: "red" }} className="ma-2" />
                        </TableCell>
                      );
                    }
                    return <TableCell key={`${ridx}${column.name}`}>{row[column.name]}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FCommonTable;
