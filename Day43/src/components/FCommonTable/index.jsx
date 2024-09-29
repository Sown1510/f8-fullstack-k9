import "../../styles/FCommonTable.css";

const FCommonTable = ({ columns, rows, onEdit, onDelete }) => {
  return (
    <>
      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr>
            {[...columns].map((column, index) => {
              return <th key={index}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {[...rows].map((row, index) => {
            return (
              <tr key={index}>
                {[...columns].map((column, index) => {
                  if (index === columns.length - 1) {
                    return (
                      <td key={index}>
                        <button onClick={() => onEdit(row.id)}>Edit</button>
                        <button onClick={() => onDelete(row.id)}>Delete</button>
                      </td>
                    );
                  }
                  return <td key={index}>{row[column]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FCommonTable;
