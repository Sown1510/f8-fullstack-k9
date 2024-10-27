import { useNavigate } from "react-router-dom";

const onShowDetail = () => {
  const navigate = useNavigate();
  return (product) => navigate(`/product-detail?id=${product.id}`);
};

export { onShowDetail };
