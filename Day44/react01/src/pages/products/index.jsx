import { FCommonTable, FInput } from "../../components";
import { useState } from "react";

export default function () {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    id: '', 
    name: '',
    categoryId: '',
    orderNum: ''
  })

  const columns = [
    {
      text: "Id",
      name: "id",
    },
    {
      text: "Name",
      name: "name",
    },
    {
      text: "Category",
      name: "categoryId",
    },
    {
      text: "Order Number",
      name: "orderNum",
    },
    {
      text: "Action",
      name: "action",
    },
  ];

  // const products = [
  //   { id: 1, name: "Iphone 14", categoryId: 1, orderNum: 1 },
  //   { id: 2, name: "Ipad 5", categoryId: 2, orderNum: 1 },
  //   { id: 3, name: "Macbook 2022", categoryId: 3, orderNum: 1 },
  // ];

  const onDelete = (id) => {
    console.log("Delete", id);
  };

  const onUpdate = (id) => {
    console.log("Edit", id);
  };

  return (
    <>
      <h1>Products</h1>
      <FInput/>
      <FCommonTable columns={columns} rows={products} onDelete={onDelete} onUpdate={onUpdate}/>
    </>
  );
}
