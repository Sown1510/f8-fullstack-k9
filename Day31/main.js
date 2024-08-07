var productsTable = document.querySelector(".table-1");
var productList = [
  {
    name: "Sản phẩm 1",
    price: 1000,
  },
  {
    name: "Sản phẩm 2",
    price: 2000,
  },
  {
    name: "Sản phẩm 3",
    price: 3000,
  },
  {
    name: "Sản phẩm 4",
    price: 4000,
  },
];
productList.forEach((product, index) => {
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerText = `${index + 1}`;
  tr.append(td);
  var td = document.createElement("td");
  td.innerText = `${product.name}`;
  tr.append(td);
  var td = document.createElement("td");
  td.innerText = `${product.price}`;
  tr.append(td);
  var td = document.createElement("td");
  var form = document.createElement("form");
  var input = document.createElement("input");
  input.value = 1;
  input.type = "number";
  input.id = `product-${index + 1}`;
  form.append(input);
  var button = document.createElement("button");
  button.innerText = "Thêm vào giỏ";
  form.append(button);
  td.append(form);
  tr.append(td);
  productsTable.append(tr);
});
