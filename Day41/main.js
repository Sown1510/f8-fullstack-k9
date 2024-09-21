import { openUserHome } from "./js/service.js";
import { Login, Register } from "./js/views.js";
const root = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "/" : "/f8-fullstack-k9/Day41/";
export const router = new Navigo(root, { hash: true });

const app = document.getElementById("app");

router.on({
  login: () => {
    console.log("login");
    Login();
  },
  register: () => {
    console.log("register");
    Register();
  },
  "": () => {
    openUserHome();
  },
});

router.resolve();
