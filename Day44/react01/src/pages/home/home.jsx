import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function () {
  const naviate = useNavigate();
  const goToProducts = () => {
    naviate("/products");
  };

  const goToCategories = () => {
    naviate("/categories");
  };

  return (
    <>
      <Button onClick={goToProducts}>products</Button>
      <Button onClick={goToCategories}>categories</Button>
    </>
  );
}
