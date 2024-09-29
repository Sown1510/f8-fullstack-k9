import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { v4 } from "uuid";
import "./App.css";

// this is component
import { FInput, FButton, FCommonTable } from "./components";

function App() {
  const columns = ["id", "name", "age", "gender", "address", "action"];
  const [isEditting, setIsEditting] = useState(false);
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    id: null,
    name: "",
    age: 0,
    gender: "",
    address: "",
  });

  const onInput = (e, key) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const onSave = () => {
    if (user.name && user.age > 0 && user.gender && user.address) {
      if (isEditting) {
        setUsers(users.map((u) => (u.id === user.id ? { ...user } : u)));
        setIsEditting(false);
        return;
      }
      setUsers([...users, { ...user, id: v4() }]);
      setUser({
        id: null,
        name: "",
        age: 0,
        gender: "",
        address: "",
      });
    } else {
      alert("Thiếu dữ liệu");
      return;
    }
  };

  const onEdit = (selectedUser) => {
    setUser(users.find((user) => user.id == selectedUser));
    setIsEditting(true);
  };

  const onDelete = (selectedUser) => {
    setUsers(users.filter((user) => user.id != selectedUser));
  };

  return (
    <>
      <input className="name-input" type="text" placeholder="name" onChange={(e) => onInput(e, "name")} value={user.name} />
      <input className="age-input" type="number" placeholder="age" onChange={(e) => onInput(e, "age")} value={user.age} />
      <select className="gender-input" name="gender" id="" onChange={(e) => onInput(e, "gender")} value={user.gender}>
        <option value="" disabled>
          Select
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input className="address-input" type="text" placeholder="address" onChange={(e) => onInput(e, "address")} value={user.address} />
      <button onClick={onSave}>{isEditting ? "Update" : "Save"}</button>
      <FCommonTable columns={columns} rows={users} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
}

export default App;
