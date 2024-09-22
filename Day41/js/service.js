import { router } from "../main.js";
import { deleteMethod, getMethod, postMethod, putMethod } from "./utils.js";
import { Posts } from "./views.js";

const onRegister = async (request = true) => {
  router.navigate("register");
  if (!request) return;
  const name = document.getElementById("name-lbl").value;
  const email = document.getElementById("email-lbl").value;
  const password = document.getElementById("password-lbl").value;
  if (!email || !name || !password) {
    alert("Vui lòng điền đủ thông tin");
    return;
  }
  const data = { email, name, password };
  try {
    const response = await postMethod("master/user", data);
    if (response.id) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      router.navigate("login");
    } else if (response.detail == "Email already exists") {
      alert("Email đã tồn tại, vui lòng thử lại");
    } else {
      alert("Lỗi rồi, vui lòng thử lại sau");
    }
  } catch (error) {
    console.error("Lỗi khi đăng ký tài khoản: ", error);
    alert("Lỗi rồi, vui lòng thử lại sau.");
  }
};

const onLogin = async (request = false) => {
  router.navigate("login");
  if (!request) return;
  const email = document.getElementById("email-lbl").value;
  const password = document.getElementById("password-lbl").value;
  if (!email || !password) {
    alert("Vui lòng điền đủ thông tin");
    return;
  }
  const data = { email, password };
  try {
    const response = await postMethod("login", data);
    if (response.access && response.refresh) {
      localStorage.setItem("accessToken", response.access);
      localStorage.setItem("refreshToken", response.refresh);
      localStorage.setItem("email", email);
      router.navigate("");
    } else if (response.detail == "Wrong username or password") {
      alert("Tài khoản hoặc mật khẩu sai");
    } else {
      alert("Lỗi rồi, vui lòng thử lại sau");
    }
  } catch (error) {
    console.error("Lỗi khi đăng nhập: ", error);
    alert("Lỗi rồi, vui lòng thử lại sau.");
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
    console.log("Đã lấy token access mới");
    openUserHome();
  } else {
    Posts(email, response);
  }
};

const createPost = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  if (!title || !content) {
    alert("Vui lòng điền đủ nội dung");
    return;
  }
  try {
    const data = {
      title: title,
      content: content,
    };
    const response = await postMethod("post", data, accessToken);
    if (response.detail == "token expired") {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await postMethod("login/get_new_token", "", "", refreshToken);
      localStorage.setItem("accessToken", response.access);
      localStorage.setItem("refreshToken", response.refresh);
      console.log("Đã lấy token access mới");
      createPost();
    } else {
      openUserHome();
    }
  } catch (error) {
    console.error("Lỗi khi tạo bài viết mới: ", error);
    alert("Lỗi rồi, vui lòng thử lại sau.");
  }
};

const onSignOut = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  onLogin();
};

const onEdit = (id) => {
  const title = document.querySelector(`[data-id="${id}"] .title`).innerText;
  const content = document.querySelector(`[data-id="${id}"] .content`).innerText;
  const titleInput = document.querySelector("#content-box #title");
  const contentInput = document.querySelector("#content-box #content");
  const saveBtn = document.querySelector("#content-box .post-btn");
  titleInput.value = title;
  contentInput.value = content;
  saveBtn.innerText = "Save";
  const saveData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    try {
      if (!title || !content) {
        alert("Vui lòng điền đủ nội dung");
        return;
      }
      const data = {
        title: title,
        content: content,
      };
      const response = await putMethod(`post/${id}`, data, accessToken);
      if (response.detail == "token expired") {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await postMethod("login/get_new_token", "", "", refreshToken);
        localStorage.setItem("accessToken", response.access);
        localStorage.setItem("refreshToken", response.refresh);
        console.log("Đã lấy token access mới");
        saveData();
      } else {
        openUserHome();
      }
    } catch (error) {
      console.error("Lỗi khi chỉnh sửa: ", error);
      alert("Lỗi rồi, vui lòng thử lại sau.");
    }
  };
  saveBtn.onclick = () => {
    saveData();
  };
};

const onClear = async (id) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await deleteMethod(`post/${id}`, accessToken);
    openUserHome();
  } catch (error) {
    console.error("Lỗi khi xoá: ", error);
    alert("Lỗi rồi, vui lòng thử lại sau.");
  }
};

window.onLogin = onLogin;
window.onSignOut = onSignOut;
window.onRegister = onRegister;
window.onEdit = onEdit;
window.onClear = onClear;
window.createPost = createPost;

export { onRegister, onLogin, openUserHome, createPost, onSignOut, onEdit, onClear };
