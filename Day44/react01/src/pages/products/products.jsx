import { FCommonTable, ProductDialog, Loading } from "../../components";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteMethod, getMethod, postMethod, putMethod } from "../../utils";
import "./style.css";
import { readFile } from "../../utils";

function products() {
  const categories = JSON.parse(localStorage.getItem("categories")) ? JSON.parse(localStorage.getItem("categories")) : [];
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : []);
  const initProduct = { id: "", name: "", categoryId: "", orderNum: "", images: [] };
  const [product, setProduct] = useState({ ...initProduct });
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
    getProducts;
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
      text: "Images",
      name: "images",
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
    setProduct({ ...initProduct });
    setShowDialog(false);
    getProducts();
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
    if (columns.find((column) => column.name != "id" && column.name != "action" && !product[column.name])) {
      alert("Vui lòng điền đủ thông tin sản phẩm");
      return;
    }
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
    setProduct({ ...initProduct });
    setShowDialog(false);
  };

  const onDelete = (id) => {
    setProducts(products.filter((product) => product.id != id));
    deleteProduct(id);
  };

  const onUpdate = (product) => {
    console.log(product);
    setProduct(product);
    setShowDialog(true);
    setIsEditting(true);
  };

  const onUploadFile = async (event) => {
    const maxQuantity = 4;
    const maxFileSize = 1; //MB
    const filesSelected = [...event.target.files];
    if (filesSelected.length + product.images.length > 4) {
      alert(`Quá số lượng ảnh, tối đa ${maxQuantity} ảnh`);
      return;
    }
    const validFiles = filesSelected.filter((file) => {
      if (file.size > maxFileSize * 1024 * 1024 - 1) {
        alert(`File ( ${file.name} ) quá giới hạn cho phép, kích thước tối đa ${maxFileSize}MB`);
        return false;
      }
      return true;
    });
    const filePromises = validFiles.map((file) => readFile(file));

    try {
      const payloads = await Promise.all(filePromises);
      setProduct({ ...product, images: product.images.concat(payloads) });
    } catch (error) {
      console.error("Lỗi khi đọc tệp: ", error);
    }
  };

  const onDeleteImg = (e) => {
    const index = Number(e.target.parentElement.dataset.id);
    product.images.splice(index, 1);
    setProduct({ ...product });
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
      <ProductDialog show={showDialog} onClose={onClose} onSave={onSave} product={product} onInput={onInput} categories={categories} onUploadFile={onUploadFile} onDeleteImg={onDeleteImg} />
      <FCommonTable columns={columns} rows={products} onDelete={onDelete} onUpdate={onUpdate} categories={categories} />
    </>
  );
}

export default products;
