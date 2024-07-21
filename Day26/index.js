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
