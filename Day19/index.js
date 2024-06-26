// Bài 1: N số Fibonacci
function fibonacci(N, callback) {
  let a = 0;
  let b = 1;
  let count = 1;
  callback(a, b, count, N);
}

function show(a, b, count, N) {
  console.log(b);
  let sum = a + b;
  a = b;
  b = sum;
  if (count === N) {
    return 0;
  }
  count++;
  show(a, b, count, N);
}

fibonacci(5, show);

// Bài 2: Đảo ngược số
function reverse(number) {
  if (number > 0) {
    let result = 0;
    while (number > 0) {
      let temp = number % 10;
      number = Math.floor(number / 10);
      result = result * 10 + temp;
    }
    return result;
  }
  return;
}

console.log(reverse(1236789));

// Bài 3: Chuyển số thành chữ
function numToWords(num) {
  switch (num) {
    case 1:
      return "một";
    case 2:
      return "hai";
    case 3:
      return "ba";
    case 4:
      return "bốn";
    case 5:
      return "năm";
    case 6:
      return "sáu";
    case 7:
      return "bảy";
    case 8:
      return "tám";
    case 9:
      return "chín";
    case 0:
      return "không";
  }
}

function reverseNumber(num) {
  if (num === 0) {
    return 0;
  }
  let result = "";
  while (num > 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}

function hangChuc(num) {
  let numReverse = reverseNumber(num);
  let temp1 = numReverse % 10;
  numReverse = Math.floor(numReverse / 10);
  let temp2 = numReverse % 10;
  if (num < 20) {
    if (num === 10) {
      return "mười";
    }
    return " mười " + numToWords(temp2);
  } else {
    if (temp2 === 0) {
      return numToWords(temp1) + " mươi ";
    } else {
      if (temp2 === 1) {
        return numToWords(temp1) + " mươi mốt";
      } else {
        if (temp1 !== 4 && temp2 === 4) {
          return numToWords(temp1) + " mươi tư";
        }
        if (temp2 === 5) {
          return numToWords(temp1) + " mươi lăm";
        }
        return numToWords(temp1) + " mươi " + numToWords(temp2);
      }
    }
  }
}

function hangTram(num) {
  console.log(num);
  let numReverse = reverseNumber(num);
  let temp1 = numReverse % 10;
  numReverse = Math.floor(numReverse / 10);
  let temp2 = numReverse % 10;
  numReverse = Math.floor(numReverse / 10);
  let temp3 = numReverse % 10;
  if (temp2 === 0 && temp3 === 0) {
    return numToWords(temp1) + " trăm";
  } else if (temp2 === 0) {
    return numToWords(temp1) + " trăm lẻ " + numToWords(temp3);
  } else {
    return numToWords(temp1) + " trăm" + hangChuc(num % 100);
  }
}

function hangNgan(num) {
  let numReverse = reverseNumber(num);
  let temp1 = numReverse % 10;
  numReverse = Math.floor(numReverse / 10);
  let temp2 = numReverse % 10;
  numReverse = Math.floor(numReverse / 10);
  let temp3 = numReverse % 10;
  numReverse = Math.floor(numReverse / 10);
  let temp4 = numReverse % 10;
  if (temp2 === 0 && temp3 === 0 && temp4 === 0) {
    return numToWords(temp1) + " ngàn";
  } else if (temp2 === 0 && temp3 === 0) {
    return numToWords(temp1) + " ngàn" + " không trăm lẻ " + numToWords(temp4);
  } else if (temp2 === 0) {
    return numToWords(temp1) + " ngàn" + " không trăm" + hangChuc(num % 100);
  } else {
    return numToWords(temp1) + " ngàn" + hangTram(num % 1000);
  }
}

function readNum(num) {
  if (num === 0) {
    return "không";
  } else if (num < 10) {
    return numToWords(num);
  } else if (num < 100) {
    return hangChuc(num);
  } else if (num < 1000) {
    return hangTram(num);
  } else if (num < 10000) {
    return hangNgan(num);
  } else {
    return "Chịu";
  }
}

console.log(readNum(2001));
