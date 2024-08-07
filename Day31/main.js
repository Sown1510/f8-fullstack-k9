var productsTable = document.querySelector(".table-1");
var productList = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 3000,
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 4000,
  },
  {
    id: 5,
    name: "Sản phẩm 5",
    price: 5000,
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
  input.id = `${product.id}`;
  form.append(input);
  var button = document.createElement("button");
  button.addEventListener("click", handleAddToCart);
  button.innerText = "Thêm vào giỏ";
  form.append(button);
  td.append(form);
  tr.append(td);
  productsTable.append(tr);
});

function handleAddToCart(e) {
  e.preventDefault();
  var productId = Number(e.target.previousElementSibling.id);
  var productQuantity = Number(e.target.previousElementSibling.value);
  product = productList.find((product) => product.id === productId);
  if (cart.some((product) => product.id === productId)) {
    productEdit = cart.find((product) => product.id === productId);
    productEdit.quantity += productQuantity;
  } else {
    product.quantity = productQuantity;
    cart.push(product);
  }
  updateCart();
}

var cartTable = document.querySelector(".table-2");
var notice = document.querySelector(".empty-cart");
function updateCart() {
  if (cart) {
    console.log(notice);
    notice.style.display = "none";
  }
  while (cartTable.rows.length > 1) {
    cartTable.deleteRow(1);
  }
  cart.forEach((product, index) => {
    var tr = document.createElement("tr");
    //stt
    var stt = document.createElement("td");
    stt.innerText = `${index + 1}`;
    tr.append(stt);
    //name
    var productName = document.createElement("td");
    productName.innerText = `${product.name}`;
    tr.append(productName);
    //price
    var productPrice = document.createElement("td");
    productPrice.innerText = `${product.price}`;
    tr.append(productPrice);
    //quantity
    var productQuantity = document.createElement("td");
    var input = document.createElement("input");
    input.type = "number";
    input.id = `${product.id}`;
    input.value = `${product.quantity}`;
    productQuantity.append(input);
    tr.append(productQuantity);
    //priceSum
    var priceSum = document.createElement("td");
    priceSum.innerText = `${product.quantity * product.price}`;
    tr.append(priceSum);
    //deleteButton
    var deleteButton = document.createElement("td");
    var button = document.createElement("button");
    button.innerText = "Xoá";
    deleteButton.append(button);
    tr.append(deleteButton);
    cartTable.append(tr);
  });
}

var cart = [];
