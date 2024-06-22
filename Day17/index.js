// Bai 1: Hoán vị 2 số
var a = 2;
var b = 5;
[a, b] = [b, a];
console.log(a, b);

// Bai 2: Thực hiện phép toán
var result = 10 + 20 + 5 ** 10 / 2;
console.log(result);

// Bai 3: Tìm số lớn nhất
var a, b, c;
a = 10;
b = 5;
c = 20;
let max = a;
if (b > max) {
  max = b;
} else if (c > max) {
  max = c;
}
console.log(max);

// Bai 4: Kiểm tra số cùng dấu
var a, b;
a = 10;
b = -5;
if (a * b > 0) {
  console.log("Cùng dấu");
} else {
  console.log("Khác dấu");
}

// Bai 5: Sắp xếp 3 số
var a, b, c;
a = 10;
b = 5;
c = 20;
if (a > b) {
  [a, b] = [b, a];
} else if (a > c) {
  [a, c] = [c, a];
} else if (b > c) {
  [b, c] = [c, b];
}
console.log(a, b, c);
