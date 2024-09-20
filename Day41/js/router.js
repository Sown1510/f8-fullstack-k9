const router = new Navigo("/f8-fullstack-k9/", { hash: true });

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
    openUserHome();
  },
});

router.resolve();
