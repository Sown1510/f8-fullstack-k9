// Bài 1: Tính tiền taxi
let taxiPrice = 0;
let distance = 121;
if (distance > 0) {
  if (distance <= 1) {
    taxiPrice = 15000;
  } else if (distance > 1 && distance <= 5) {
    taxiPrice = distance * 135000;
  } else if (distance > 5 && distance <= 120) {
    taxiPrice = distance * 11000;
  } else {
    taxiPrice = distance * 11000 - distance * 11000 * (10 / 100);
  }
  console.log(`Tien taxi quang duong ${distance} la: ${taxiPrice}`);
} else {
  console.log("Khong hop le");
}

// Bài 2: Tính tiền điện
var bac1, bac2, bac3, bac4, bac5, bac6, tienDien;
bac1 = 1678;
bac2 = 1734;
bac3 = 2014;
bac4 = 2536;
bac5 = 2834;
bac6 = 2927;
var dienTieuThu = 100;
if (dienTieuThu > 0) {
  if (dienTieuThu <= 50) {
    tienDien = dienTieuThu * bac1;
  } else if (dienTieuThu > 50 && dienTieuThu <= 100) {
    tienDien = dienTieuThu * bac2;
  } else if (dienTieuThu > 100 && dienTieuThu <= 200) {
    tienDien = dienTieuThu * bac3;
  } else if (dienTieuThu > 200 && dienTieuThu <= 300) {
    tienDien = dienTieuThu * bac4;
  } else if (dienTieuThu > 300 && dienTieuThu <= 400) {
    tienDien = dienTieuThu * bac5;
  } else {
    tienDien = dienTieuThu * bac6;
  }
  console.log(`Gia dien tieu thu ${dienTieuThu} la: ${tienDien}`);
} else {
  console.log("Khong hop le");
}

// Bài 3: Tính giá trị biểu thức
var n = 20;
let s = 0;
for (let i = 1; i <= n; i++) {
  s += i * (i + 1);
}
console.log(s);

// Bai 4: Viết hàm kiểm tra số nguyên tố
const checkPrime = (number) => {
  if (number > 1) {
    let isPrime = true;
    if (number !== 2) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      console.log(`${number} la so nguyen to`);
    } else {
      console.log(`${number} khong phai so nguyen to`);
    }
  } else {
    console.log(`${number} khong phai so nguyen to`);
  }
};
checkPrime(4);

// Bài 5: Vẽ tam giác số
var N = 10;
let count = 1;
for (let i = 1; i <= N; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += `${count} `;
    count++;
  }
  console.log(line);
}

// Bài 6: Vẽ bàn cờ vua
function createTable() {
  var table = document.getElementById("table");

  for (let i = 0; i < 8; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 8; j++) {
      var cell = document.createElement("td");
      if ((i + j) % 2 === 0) {
        cell.style.backgroundColor = "white";
      } else {
        cell.style.backgroundColor = "black";
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
window.onload = createTable;
