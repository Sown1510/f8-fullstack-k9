import { FCommonTable, ProductDialog, Loading } from "../../components";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteMethod, getMethod, postMethod, putMethod } from "../../utils";
import "./style.css";

function products() {
  const categories = JSON.parse(localStorage.getItem("categories")) ? JSON.parse(localStorage.getItem("categories")) : [];
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : []);
  const [product, setProduct] = useState({ id: "", name: "", categoryId: "", orderNum: "" });
  const [showLoading, setShowLoading] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const naviate = useNavigate();

  const getProducts = async () => {
    try {
      setShowLoading(true);
      const data = await getMethod("products");
      setProducts(data);
    } catch (error) {
      alert("Lỗi khi lấy danh sách sản phẩm");
      console.error(error);
    } finally {
      setShowLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      setShowLoading(true);
      const data = await getMethod("categories");
      localStorage.setItem("categories", JSON.stringify(data));
    } catch (error) {
      alert("Lỗi khi lấy danh mục sản phẩm");
      console.error(error);
    } finally {
      setShowLoading(false);
    }
  };

  const postProduct = async (productData) => {
    try {
      const { id, ...payload } = productData;
      const data = await postMethod("products", payload);
      getProducts();
    } catch (error) {
      alert("Lỗi khi đăng tải sản phẩm");
      console.error(error);
    }
  };

  const putProduct = async (productData) => {
    try {
      const { id, ...payload } = productData;
      const data = await putMethod(`products/${productData.id}`, payload);
      getProducts();
    } catch (error) {
      alert("Lỗi khi sửa sản phẩm");
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const data = await deleteMethod(`products/${id}`);
      getProducts();
    } catch (error) {
      alert("Lỗi khi xoá sản phẩm");
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

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

  const isDuplicated = () => {
    if (products) {
      const orderNums = products.map((product) => product.orderNum);
      if (orderNums.some((id) => id == product.orderNum)) {
        return true;
      }
    }
    return false;
  };

  const onSave = (e) => {
    e.preventDefault();
    if (isEditting) {
      let holdDialog = false;
      setProducts(
        products.map((item) => {
          if (item.id === product.id) {
            if (product.orderNum != item.orderNum) {
              if (isDuplicated()) {
                alert("Trùng Product Order Number");
                holdDialog = true;
                return item;
              } else {
                holdDialog = false;
              }
            }
            putProduct(product);
            return product;
          }
          return item;
        })
      );
      if (holdDialog) return;
      setIsEditting(false);
    } else {
      if (isDuplicated()) {
        alert("Trùng Product Order Number");
        return;
      }
      setProducts([...products, product]);
      postProduct(product);
    }
    setProduct({ id: "", name: "", categoryId: "", orderNum: "" });
    setShowDialog(false);
  };

  const onDelete = (id) => {
    setProducts(products.filter((product) => product.id != id));
    deleteProduct(id);
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
      <Loading showLoading={showLoading} />
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div className="button-container">
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
