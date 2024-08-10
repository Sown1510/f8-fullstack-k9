var productsTable = document.querySelector(".table-1");
var productQuantEdit = [];
var cartTable = document.querySelector(".table-2");
var notice = document.querySelector(".empty-cart");
var updateCartBtn = document.querySelector(".updateCart");
var deleteCartBtn = document.querySelector(".deleteCart");
var cart = [];

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

function handleRemoveFromCart(e) {
  let productId = Number(e.target.id);
  cart = cart.filter((product) => product.id != productId);
  updateCart();
}

cartTable.style.display = "none";
updateCartBtn.style.display = "none";
deleteCartBtn.style.display = "none";
function updateCart() {
  if (cart.length != 0) {
    notice.style.display = "none";
    cartTable.style.display = "table";
    while (cartTable.rows.length > 1) {
      cartTable.deleteRow(1);
    }
    let totalQuant = 0;
    let totalPrice = 0;
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
      input.classList = "quant_edit";
      input.value = `${product.quantity}`;
      productQuantity.append(input);
      tr.append(productQuantity);
      totalQuant += product.quantity;
      //priceSum
      var priceSum = document.createElement("td");
      let totalCal = product.quantity * product.price;
      priceSum.innerText = `${totalCal}`;
      tr.append(priceSum);
      totalPrice += totalCal;
      //deleteButton
      var deleteButton = document.createElement("td");
      var button = document.createElement("button");
      button.id = `${product.id}`;
      button.addEventListener("click", handleRemoveFromCart);
      button.innerText = "Xoá";
      deleteButton.append(button);
      tr.append(deleteButton);
      cartTable.append(tr);
    });
    var totalRow = document.createElement("tr");
    //Tiêu đề tổng
    var td = document.createElement("td");
    td.innerText = "Tổng";
    td.colSpan = "3";
    totalRow.append(td);
    //tính tổng
    var td = document.createElement("td");
    td.innerText = `${totalQuant}`;
    totalRow.append(td);
    //Thành tiền
    var td = document.createElement("td");
    td.colSpan = "2";
    td.innerText = `${totalPrice}`;
    totalRow.append(td);
    cartTable.append(totalRow);
    productQuantEdit = document.querySelectorAll(".quant_edit");
    updateCartBtn.style.display = "inline-block";
    deleteCartBtn.style.display = "inline-block";
  } else {
    notice.style.display = "block";
    cartTable.style.display = "none";
    updateCartBtn.style.display = "none";
    deleteCartBtn.style.display = "none";
  }
}

updateCartBtn.addEventListener("click", handleUpdateCart);
deleteCartBtn.addEventListener("click", handleDeleteCart);

function handleDeleteCart() {
  cart = [];
  updateCart();
}

function handleUpdateCart() {
  productQuantEdit.forEach((dataInput) => {
    let dataId = Number(dataInput.id);
    let productEdit = cart.find((product) => product.id === dataId);
    productEdit.quantity = Number(dataInput.value);
    console.log(dataInput.value);
  });
  updateCart();
}
