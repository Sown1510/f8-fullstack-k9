// Hàm dùng chung
//Kiểm tra hàm số nguyên
function checkInteger(array) {
  for (let index in array) {
    if (array[index] % 1 !== 0) {
      return false;
    }
  }
  return true;
}

//Xoá trùng lặp trong hàm
function removeDuplicate(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array = removeElement(array, j);
      }
    }
  }
  return array;
}

//Xoá phần tử trong mảng
function removeElement(array, removePosition) {
  let index = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === removePosition) {
      if (i === array.length - 1) {
        break;
      }
      i++;
    }
    newArray[index] = array[i];
    index++;
  }
  return newArray;
}

//Bài 1: Tìm giao giữa 2 mảng
console.log("--------Bài 1--------");
function arrayIntersection(arrA, arrB) {
  let intersectionArray = [];
  for (let i in arrA) {
    for (let j in arrB) {
      if (arrA[i] === arrB[j]) {
        intersectionArray.push(arrA[i]);
      }
    }
  }
  intersectionArray = removeDuplicate(intersectionArray);
  return intersectionArray;
}

let arrA = [1, 2, 3, 5, 1, 2];
let arrB = [2, 3, 1, 8, 9];
console.log(arrayIntersection(arrA, arrB));

// Bài 2: Làm phẳng mảng
console.log("--------Bài 2--------");
let arr = [1, 2, [2, 3], 3];
function flatArray(array) {
  let newArray = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof array[i] === "number") {
      newArray[index] = array[i];
      index++;
    } else {
      for (let j = 0; j < array[i].length; j++) {
        newArray[index] = array[i][j];
        index++;
      }
    }
  }
  return newArray;
}
console.log(flatArray(arr));

// Bài 3: Tách phần tử mảng theo đúng kiểu dữ liệu
console.log("--------Bài 3--------");

var array = [
  ["a", 1, true],
  ["b", 2, false],
];
let arrayOfTypes = [];
array = array.flat();
array.forEach(function (value) {
  if (!arrayOfTypes.includes(typeof value)) {
    ``;
    arrayOfTypes.push(typeof value);
  }
});

let newArray = [];
arrayOfTypes.forEach(function (type, index) {
  newArray[index] = array.filter(function (value) {
    return typeof value === type;
  });
});

console.log(newArray);

// Bài 4: Đổ dữ liệu lên giao diện
console.log("--------Bài 4--------");
let articles = [
  [
    "https://fastly.picsum.photos/id/256/450/300.jpg?hmac=9vNpxPtspzpwe-6V28qLbFhM4CsAXw_js_x_ozsmjcE",
    "Tiêu đề bài viết 1",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus.",
  ],
  [
    "https://fastly.picsum.photos/id/256/450/300.jpg?hmac=9vNpxPtspzpwe-6V28qLbFhM4CsAXw_js_x_ozsmjcE",
    "Tiêu đề bài viết 2",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus.",
  ],
  [
    "https://fastly.picsum.photos/id/256/450/300.jpg?hmac=9vNpxPtspzpwe-6V28qLbFhM4CsAXw_js_x_ozsmjcE",
    "Tiêu đề bài viết 3",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consectetur iusto tempore. Nisi, incidunt quia aut excepturi debitis ipsam voluptatibus.",
  ],
];

let container = document.getElementById("container");
let content = ``;
articles.forEach(function (article, index) {
  if (index % 2 !== 0) {
    content += `
    <hr>
    <div class='row'>
      <div class='col-4 col-md-12 d-none d-md-block'>
        <img src='${article[0]}'>
      </div>
      <div class='col-8 col-md-12'>
        <h2>${article[1]}</h2>
        <p>${article[2]}</p>
      </div>
      <div class='col-4 col-md-12 d-md-none'>
        <img src='${article[0]}'>
      </div>
    </div>
    <hr>
  `;
  } else {
    content += `
    <div class='row'>
      <div class='col-4 col-md-12'>
        <img src='${article[0]}'>
      </div>
      <div class='col-8 col-md-12'>
        <h2>${article[1]}</h2>
        <p>${article[2]}</p>
      </div>
    </div>

  `;
  }
});
container.innerHTML = content;
