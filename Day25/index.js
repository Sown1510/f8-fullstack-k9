// Bài 1:
function total(...numbers) {
  let check = true;
  let result = numbers.reduce((prev, current) => {
    if (typeof current !== "number") {
      check = false;
    }
    return prev + current;
  }, 0);
  if (check) {
    return result;
  }
  return "Invalid parameter";
}
console.log(total(1, 2, 3, 4, "hi"));

//Bài 2:
Object.prototype.getCurrency = function (unit) {
  let str = String(this);
  let result = "";
  for (let i = str.length - 1, j = 1; i >= 0; i--, j++) {
    result = str.charAt(i) + result;
    if (j % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }
  return `${result} ${unit}`;
};

let price = 100000;
console.log(price.getCurrency("đ"));

// Bài 3:
let categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

const map = {};
categories.forEach((category) => {
  map[category.id] = { id: category.id, name: category.name, children: [] };
});
let roots = [];
categories.forEach((category) => {
  if (category.parent === 0) {
    roots.push(map[category.id]);
  } else {
    if (map[category.parent]) {
      map[category.parent].children.push(map[category.id]);
      console.log(map);
    }
  }
});

console.log(roots);
