//Hàm Dùng chung
function checkInteger(array) {
  for (let index in array) {
    if (array[index] % 1 !== 0) {
      return false;
    }
  }
  return true;
}

// Bài 1: Tìm Min Max
var number = [2, 3, 10, 5, 8, 9];
function minMax() {
  let max = number[0];
  let min = number[0];
  let maxIndex = 0;
  let minIndex = 0;
  for (let i = 1; i < number.length; i++) {
    if (max < number[i]) {
      max = number[i];
      maxIndex = i;
    }
    if (min > number[i]) {
      min = number[i];
      minIndex = i;
    }
  }
  return { max: max, maxIndex: maxIndex, min: min, minIndex: minIndex };
}
if (checkInteger(number)) {
  console.log(
    `so lon nhat: ${minMax().max} o vi tri ${minMax().maxIndex}, so nho nhat: ${
      minMax().min
    } o vi tri ${minMax().minIndex}`
  );
} else {
  console.log("Invalid Array");
}

// Bài 2: Tính trung bình các số nguyên tố
var num = [2, 3, 5, 10, 20, 13, 15];
function isPrime(x) {
  if (x === 2) {
    return true;
  }
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

function primeAverage() {
  let count = 0;
  let sum = 0;
  for (var i = 0; i < num.length; i++) {
    if (isPrime(num[i])) {
      sum += num[i];
      count++;
    }
  }
  if (count === 0) {
    return "Không có số nguyên tố";
  } else {
    return `Trung bình của ${count} số nguyên tố là: ${sum / count}`;
  }
}

if (checkInteger(num)) {
  console.log(primeAverage());
} else {
  console.log("Invalid Array");
}

// Bài 3: Lọc phần tử trùng
let array = [2, 3, 2, 1, 4, 3, 2, 1, "a", "a", "a", "b", "a"];
function searchDuplicate() {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array = removeElement(j, array);
        j = i;
      }
    }
  }
  return array;
}

function removeElement(index, array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      for (let j = i + 1; j < array.length; j++) {
        newArray.push(array[j]);
      }
      break;
    }
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(searchDuplicate());

// Bài 4: Sắp xếp mảng và thêm phần tử
function changePosition(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
}
function insertToArray(array, insertNumber, index) {
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (i < index) {
      newArray[i] = array[i];
    } else {
      if (i === index) {
        newArray[i] = insertNumber;
      } else {
        newArray[i] = array[i - 1];
      }
    }
  }
  return newArray;
}
function sortAndInsert(array, insertNumber) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        array = changePosition(array, i, j);
      }
    }
  }
  for (var index = 0; index < array.length; index++) {
    if (insertNumber <= array[index]) {
      array = insertToArray(array, insertNumber, index);
      break;
    }
  }
  return array;
}
console.log(sortAndInsert([2, 5, 1, 4], 5));
