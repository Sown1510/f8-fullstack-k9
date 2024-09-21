import { openUserHome } from "./js/service.js";
import { Login, Register } from "./js/views.js";

export const router = new Navigo("/Day41/", { hash: true });

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
