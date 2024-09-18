const onRegister = async () => {
  const name = document.getElementById("name-lbl").value;
  const email = document.getElementById("email-lbl").value;
  const password = document.getElementById("password-lbl").value;
  const data = {
    email: email,
    name: name,
    password: password,
  };
  const response = await postMethod("master/user", data);
  if (response.id) {
    router.navigate("/login");
  } else {
  }
};

const onLogin = async () => {
  const email = document.getElementById("email-lbl").value;
  const password = document.getElementById("password-lbl").value;
  const data = {
    email: email,
    password: password,
  };
  const response = await postMethod("login", data);
  if (response.access && response.refresh) {
    localStorage.setItem("accessToken", response.access);
    localStorage.setItem("refreshToken", response.refresh);
    router.navigate("/");
  }
};

const openUserHome = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await getMethod("post", accessToken);
  Posts(response);
  console.log(response);
};
