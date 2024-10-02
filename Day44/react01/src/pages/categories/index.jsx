import { FCommonTable, CategoryDialog } from "../../components";
import { useState } from "react";
import { Button } from "@mui/material";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function () {
  const lastCategories = JSON.parse(localStorage.getItem("categories"));
  const [categories, setCategories] = useState(lastCategories ? lastCategories : []);

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

  const onSave = (e) => {
    e.preventDefault();
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
    localStorage.setItem("categories", JSON.stringify(categories));
  };

  const onDelete = (id) => {
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
