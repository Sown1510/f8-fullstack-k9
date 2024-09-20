const isLocalhost = window.location.hostname === "localhost";
const root = isLocalhost ? "/" : "/f8-fullstack-k9/Day41/";

const router = new Navigo(root);

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
  "/": () => {
    openUserHome();
  },
});

router.resolve();
