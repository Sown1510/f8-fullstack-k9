//Bài 1
// Kiểm tra số nguyên tố
function checkPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Kiểm tra số đối xứng
function checkOpposite(n) {
  n = n.toString();
  let length = n.length;
  for (let i = 0; i < (length - 1) / 2; i++) {
    let j = length - 1 - i;
    //   console.log(i);
    if (n[i] !== n[j]) {
      return false;
    }
  }
  return true;
}

// Tìm số nguyên tố đối xứng nhỏ nhất
function findMinOppositePrime(n) {
  let i = n + 1;
  while (1) {
    if (checkPrime(i)) {
      if (checkOpposite(i)) {
        return i;
      }
    }
    i++;
  }
}

console.log(findMinOppositePrime(1000));

// Bài 2: Tìm trung vị của 2 mảng
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
function findMidpoint(num1, num2) {
  let newNum = num1.concat(num2);
  if (newNum.length % 2 !== 0) {
    return newNum[(newNum.length - 1) / 2];
  } else {
    return (newNum[newNum.length / 2] + newNum[newNum.length / 2 - 1]) / 2;
  }
}
console.log(findMidpoint(num1, num2));

// Bài 3: Tìm số nguyên dương nhỏ ngất không có trong nums
let nums = [7, 8, 9, 11, 12];
function findNumber(nums) {
  let i = 1;
  while (1) {
    if (!nums.includes(i)) {
      return i;
    }
    i++;
  }
}

console.log(findNumber(nums));

function findNumberV2(nums) {
  let setNums = new Set(nums);
  let i = 1;
  while (1) {
    if (!setNums.has(i)) {
      return i;
    }
    i++;
  }
}

console.log(findNumberV2(nums));
