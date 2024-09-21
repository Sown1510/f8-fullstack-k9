import { router } from "../main.js";
import { getMethod, postMethod } from "./utils.js";
import { Posts } from "./views.js";

const onRegister = async () => {
  router.navigate("register");
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
    router.navigate("login");
  } else {
  }
};

const onLogin = async () => {
  router.navigate("login");
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
    localStorage.setItem("email", email);
    router.navigate("");
  }
};

const openUserHome = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");
  const response = await getMethod("post", accessToken);
  if (!accessToken) {
    router.navigate("login");
  }
  if (response.detail == "token expired") {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await postMethod("login/get_new_token", "", "", refreshToken);
    localStorage.setItem("accessToken", response.access);
    localStorage.setItem("refreshToken", response.refresh);
    openUserHome();
  } else {
    Posts(email, response);
  }
};

const createPost = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const data = {
    title: title,
    content: content,
  };
  const response = await postMethod("post", data, accessToken);
  openUserHome();
};

const onSignOut = async () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  openUserHome();
};

const onEdit = (id) => {
  console.log(id);
  alert("Chưa làm bạn ei");
};
const onClear = (id) => {
  console.log(id);
  alert("Chưa làm bạn ei");
};

window.onLogin = onLogin;
window.onSignOut = onSignOut;
window.onRegister = onRegister;
window.onEdit = onEdit;
window.onClear = onClear;
window.createPost = createPost;

export { onRegister, onLogin, openUserHome, createPost, onSignOut, onEdit, onClear };
