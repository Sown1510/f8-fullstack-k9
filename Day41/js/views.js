function Register() {
  const data = `
        <div id="overlay" class="">
        <div id="register" class="">
          <h2 class="">Create new account</h2>
          <form action="" class="form-register">
            <div id="name" class="">
              <input type="text" id="name-lbl" required />
              <label for="name-lbl">Name</label>
            </div>
            <div id="email" class="">
              <input type="text" id="email-lbl" required />
              <label for="email-lbl">Email</label>
            </div>
            <div id="password" class="">
              <input type="password" id="password-lbl" required />
              <label for="password-lbl">Password</label>
            </div>
            <div id="action">
              <button type="button" onclick="onLogin(false)" id="back-btn">Back</button>
              <button type="submit" onclick="onRegister(true)" id="register-btn">Register</button>
            </div>
          </form>
        </div>
      </div>
    `;
  app.innerHTML = data;
}

function Login() {
  const email = localStorage.getItem("email") ? localStorage.getItem("email") : "";
  const password = localStorage.getItem("password") ? localStorage.getItem("password") : "";
  const data = `
        <div id="overlay" class="">
        <div id="login" class="">
          <h2 class="">Login</h2>
          <form action="" class="form-login">
            <div id="email" class="">
              <input type="text" id="email-lbl" value="${email}" required />
              <label for="email-lbl">Email</label>
            </div>
            <div id="password" class="">
              <input type="password" id="password-lbl" value="${password}" required />
              <label for="password-lbl">Password</label>
            </div>
            <div id="action">
              <button type="button" onclick="onRegister(false)" id="register-btn">Register</button>
              <button type="submit" onclick="onLogin(true)" id="login-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    `;
  app.innerHTML = data;
  localStorage.removeItem("password");
  const loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener("onclick", (e) => {
    e.preventDefault();
  });
}

function Posts(email = "", posts = []) {
  let data = `
    <div class="post-container">
        <div class="header">
          <a class="logo" href="#">F8-Project</a>
          <div class="user">
            <a href="#"><i class="fa-solid fa-user"></i>${email}</a>
            <button onclick="onSignOut()">Sign out</button>
          </div>
        </div>
        <input type=text id="title" placeholder="title" required/>
        <input type=text id="content" placeholder="content" required/>
        <button onclick="createPost()">Post</button>
        <div class="post-list">
          <h2 class="list-header">List Post</h2>
          <table border="1" style="border-collapse: collapse">
            <tr>
              <th>id</th>
              <th>title</th>
              <th>content</th>
              <th colspan="2">action</th>
            </tr>
  `;
  posts.forEach((post) => {
    data += `
            <tr>
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.content}</td>
              <td>
                <div onclick="onEdit(${post.id})" class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
              </td>
              <td>
                <div onclick="onClear(${post.id})" class="clear"><i class="fa-solid fa-trash"></i></div>
              </td>
            </tr>
    `;
  });
  data += `
          </table>
        </div>
    </div>
  `;
  app.innerHTML = data;
}

export { Register, Login, Posts };
