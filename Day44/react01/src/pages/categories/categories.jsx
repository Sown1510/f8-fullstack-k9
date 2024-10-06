import { FCommonTable, CategoryDialog } from "../../components";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function () {
  const products = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [];
  const [categories, setCategories] = useState(JSON.parse(localStorage.getItem("categories")) ? JSON.parse(localStorage.getItem("categories")) : []);
  const [category, setCategory] = useState({
    id: "",
    name: "",
    orderNum: "",
  });

  const [isEditting, setIsEditting] = useState(false);

  const naviate = useNavigate();

  const [showDialog, setShowDialog] = useState(false);

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
      text: "Order Number",
      name: "orderNum",
    },
    {
      text: "Action",
      name: "action",
    },
  ];

  const onInput = (e, key) => {
    setCategory({ ...category, [key]: e.target.value });
  };

  const onClose = () => {
    setShowDialog(false);
  };

  const onOpenDialog = () => {
    setShowDialog(true);
  };

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const onSave = (e) => {
    e.preventDefault();
    const orderNums = categories.map((category) => category.orderNum);
    if (orderNums.find((id) => id == category.orderNum)) {
      alert("Trùng Category Order Number");
      return;
    }
    if (isEditting) {
      setCategories(
        categories.map((item) => {
          if (item.id === category.id) {
            return (item = category);
          }
          return item;
        })
      );
      setIsEditting(false);
    } else {
      setCategories([...categories, { ...category, id: v4() }]);
    }
    setCategory({
      id: "",
      name: "",
      orderNum: "",
    });
    setShowDialog(false);
  };

  const onDelete = (id) => {
    if (products) {
      if (products.find((product) => product.categoryId == id)) {
        alert("Không thể xoá vì Danh mục đang chứa sản phẩm");
        return;
      }
    }
    setCategories(categories.filter((category) => category.id != id));
  };

  const onUpdate = (category) => {
    setCategory(category);
    setShowDialog(true);
    setIsEditting(true);
  };

  const goToHome = () => {
    naviate("/");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Categories</h1>
      <div>
        <Button variant="contained" onClick={goToHome}>
          Home
        </Button>
        <Button variant="contained" onClick={onOpenDialog}>
          Add Category
        </Button>
      </div>
      <CategoryDialog show={showDialog} onClose={onClose} onSave={onSave} onInput={onInput} categories={categories} category={category} />
      <FCommonTable columns={columns} rows={categories} onDelete={onDelete} onUpdate={onUpdate} categories={categories} />
    </>
  );
}
