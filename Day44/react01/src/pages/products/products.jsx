import { FCommonTable, ProductDialog } from "../../components";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

function products() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : []);
  const categories = JSON.parse(localStorage.getItem("categories")) ? JSON.parse(localStorage.getItem("categories")) : [];

  const [product, setProduct] = useState({
    id: "",
    name: "",
    categoryId: "",
    orderNum: "",
  });

  const [isEditting, setIsEditting] = useState(false);

  const naviate = useNavigate();

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

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

  const onInput = (e, key) => {
    setProduct({ ...product, [key]: e.target.value });
  };

  const onClose = () => {
    setShowDialog(false);
  };

  const onOpenDialog = () => {
    setShowDialog(true);
  };

  const onSave = (e) => {
    e.preventDefault();
    const orderNums = products.map((product) => product.orderNum);
    if (isEditting) {
      setProducts(
        products.map((item) => {
          if (item.id === product.id) {
            if (product.orderNum != item.orderNum) {
              if (orderNums.find((id) => id == product.orderNum)) {
                alert("Trùng Product Order Number");
                return item;
              }
            }
            return (item = product);
          }
          return item;
        })
      );
      setIsEditting(false);
    } else {
      if (orderNums.find((id) => id == product.orderNum)) {
        alert("Trùng Product Order Number");
        return;
      }
      setProducts([...products, { ...product, id: v4() }]);
    }
    setProduct({
      id: "",
      name: "",
      categoryId: "",
      orderNum: "",
    });
    setShowDialog(false);
  };

  const onDelete = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  const onUpdate = (product) => {
    setProduct(product);
    setShowDialog(true);
    setIsEditting(true);
  };

  const goToHome = () => {
    naviate("/");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div>
        <Button variant="contained" onClick={goToHome}>
          Home
        </Button>
        <Button variant="contained" onClick={onOpenDialog}>
          Add Product
        </Button>
      </div>
      <ProductDialog show={showDialog} onClose={onClose} onSave={onSave} product={product} onInput={onInput} categories={categories} />
      <FCommonTable columns={columns} rows={products} onDelete={onDelete} onUpdate={onUpdate} categories={categories} />
    </>
  );
}

export default products;
