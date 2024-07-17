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
