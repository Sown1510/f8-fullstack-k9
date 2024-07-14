//Bài 1:
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(error) {
  let parts = error.split(".");
  let current = errors;
  if (parts.length === 1) {
    return current[parts].required;
  }
  for (let part of parts) {
    if (current[part]) {
      current = current[part];
    } else {
      return "Lỗi không xác định";
    }
  }
  return current;
}

console.log(getError("email"));

//Bài 2
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  return customers
    .map((customer) => {
      const { name, age, address } = customer;
      let nameParts = customer.name.split(" ");
      let shortName = [nameParts[0], nameParts[nameParts.length - 1]].join(" ");
      return { name, age, address, shortName };
    })
    .sort((a, b) => a.age - b.age);
}

const result = createCustomers(customers);
console.log(result);

// Bài 3
const data = [];
const handleRegister = (name, password, email) => {
  let newUser = { name, password, email, role: "user" };
  data.push(newUser);
};

const handleLogin = (email, password) => {
  let user = data.find((user) => user.email === email);
  if (!user) {
    return "Người dùng không tồn tại";
  }
  if (user.password !== password) {
    return "Mật khẩu không chính xác";
  }
  return user;
};

handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
console.log(data);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);
