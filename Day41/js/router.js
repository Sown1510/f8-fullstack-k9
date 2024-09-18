const router = new Navigo("/");

const app = document.getElementById("app");

router.on({
  "/login": () => {
    console.log("login");
    Login();
  },
  "/register": () => {
    console.log("register");
    Register();
  },
  "/": () => {
    console.log("post");
    Posts();
  },
});
