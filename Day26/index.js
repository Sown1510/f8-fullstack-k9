// Bài 1:
Array.prototype.push2 = function (value) {
  if (!Array.isArray(this)) {
    return;
  }
  this[this.length] = value;
  return this;
};

var array = [1, 2, 3, 4, 5];
array.push2(6);
console.log(array);

// Bài 2
Array.prototype.filter2 = function (callback) {
  if (!Array.isArray(this)) {
    return;
  }
  let newArr = [];
  this.forEach((value) => {
    if (callback(value)) {
      newArr.push(value);
    }
  });
  return newArr;
};

var array = [1, 2, 3, 1, 2, 3, 4];
array2 = array.filter2((value) => {
  return value === 1;
});
console.log(array2);

// Bài 3
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

let data = ``;
function addData(items) {
  if (Array.isArray(items)) {
    items.forEach((item) => {
      addData(item);
    });
  } else {
    data += `<option>${items.name}</option>`;
    if (items.children) {
      addData(items.children);
    }
    return;
  }
}

addData(categories);
console.log(data);

var title = document.querySelector("form select");

title.innerHTML = data;
