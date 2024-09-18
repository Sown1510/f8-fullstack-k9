function Register() {
  const data = `
        <div id="overlay" class="">
        <div id="register" class="">
          <h2 class="">Create new account</h2>
          <div action="" class="form-register">
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
              <button id="back-btn">Back</button>
              <button onclick="onRegister()" id="register-btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    `;
  app.innerHTML = data;
}

function Login(email, password) {
  const data = `
        <div id="overlay" class="">
        <div id="login" class="">
          <h2 class="">Login</h2>
          <div action="" class="form-login">
            <div id="email" class="">
              <input type="text" id="email-lbl" value="${email}" required />
              <label for="email-lbl">Email</label>
            </div>
            <div id="password" class="">
              <input type="password" id="password-lbl" value="${password}" required />
              <label for="password-lbl">Password</label>
            </div>
            <div id="action">
              <button id="register-btn">Register</button>
              <button onclick="onLogin()" id="login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    `;
  app.innerHTML = data;
}

function Posts(posts) {
  const data = `
        <div class="post-container">
        <div class="header">
          <a class="logo" href="#">F8-Project</a>
          <div class="user">
            <a href="#"><i class="fa-solid fa-user"></i>Username</a>
          </div>
        </div>
        <div class="post-list">
          <h2 class="list-header">List Post</h2>
          <table border="1" style="border-collapse: collapse">
            <tr>
              <th>stt</th>
              <th>title</th>
              <th>content</th>
              <th colspan="2">action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>title test 1</td>
              <td>content test</td>
              <td>
                <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
              </td>
              <td>
                <div class="clear"><i class="fa-solid fa-trash"></i></div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `;
  app.innerHTML = data;
}
