const router = new Navigo("/", { hash: true });

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
