import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { v4 } from "uuid";
// import "./App.css";

// this is component
import { FInput, FButton, FCommonTable } from "./components";

function App() {
  // const columns = ["id", "name", "age", "gender", "address", "action"];
  const columns = [
    {
      name: 'id',
      text: 'Id'
    },
    {
      name: 'name',
      text: 'Tên',
     
    },
    {
      name: 'age',
      text: 'Tuổi'
    },
    {
      name: 'gender',
      text: 'Giới tính'
    }, 
    {
      name: 'address',
      text: 'Địa chỉ'
    }, {
      name: 'action',
      text: 'Hành động'
    }
  ]

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
      setUsers([...users, { ...user, id: v4() }]);
      setUser({
        id: null,
        name: "",
        age: 0,
        gender: "",
        address: "",
      });
  };

  const onDelete = (id) => {
    console.log('delete', id);
  }
  const onUpdate = (row) => {
    console.log('update', row);
  }

 

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
      <button onClick={onSave}> Save</button>
      <FCommonTable columns={columns} rows={users} maxWidth={'900px'} onDelete={onDelete} onUpdate={onUpdate}/>
    </>
  );
}

export default App;
