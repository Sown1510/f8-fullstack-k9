//Bài 1: Tìm giao giữa 2 mảng
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

console.log(arrayIntersection([1, 2, 3, 5, 1, 2], [2, 3, 1, 8, 9]));

// Bài 2: Làm phẳng mảng
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
function findAndGroup(array) {
  for (let i = 0; i < array.length; i++) {
    let type = typeof array[i];
    for (let j = i; j < array.length; j++) {
      if (typeof array[j] === type) {
        i++;
        array = changePosition(array, i, j);
      }
    }
  }
}

function changePosition(array, i, j) {}
