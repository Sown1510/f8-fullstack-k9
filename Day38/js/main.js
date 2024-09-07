// Lấy phần tử DOM
const endPoint = "https://z2xnld-8080.csb.app/bloggers";
const container = document.querySelector(".container");
let currentPage = 1;
let usersPerPage = 5;

// Hàm lấy dữ liệu
const getData = async (currentPage) => {
  const response = await fetch(
    `${endPoint}?_page=${currentPage}&_limit=${usersPerPage}`
  );
  const data = await response.json();
  return data;
};

// Hàm tạo nội dung từng blog
const createHTML = (blogger) =>
  `
    <!-- BLOG WRAPPER -->
      <div class="blog-wrapper" data-user-id="${blogger.id}">
        <!-- INFO -->
        <div class="info">
          <div class="time-update">
            <p class="day">${blogger.lastUpdate}</p>
            <p class="hour">${blogger.updateHour}</p>
            <p class="minute">${blogger.updateMinute}</p>
          </div>
          <span>${blogger.user}</span>
        </div>
        <!-- /INFO -->
        <!-- ARTICLE -->
        <div class="article">
          <div class="header">
            <div class="avatar"></div>
            <span>${blogger.name}</span>
          </div>
          <div class="content">
            <span class="header">${blogger.header}</span>
            <div class="data">${blogger.content}</div>
          </div>
          <div class="end">
            <div class="hastag">
              <a href="#">${blogger.hastag}</a>
            </div>
            <div class="time-reading">
              <i>${blogger.timeReading}</i>
            </div>
          </div>
        </div>
        <!-- /ARTICLE -->
      </div>
      <!-- /BLOG WRAPPER -->
    `;

// Hàm tạo từng page khi tải thêm
const createBloggerPage = (bloggers) => {
  let page = document.createElement("div");
  let data = "";
  bloggers.forEach((blogger) => {
    data += createHTML(blogger);
  });
  page.innerHTML = data;
  return page;
};

// Hàm render dữ liệu tải trang ban đầu
const render = (async () => {
  const bloggers = await getData(currentPage);
  let header = `
      <!-- HEADER -->
        <div class="header">
          <h1>Blogger</h1>
          <button class="sign-in-btn">Sign in</button>
        </div>
      <!-- /HEADER -->
    `;
  container.innerHTML = header;
  container.append(createBloggerPage(bloggers));
})();

// Hàm render thêm trang blog
const renderMore = async (currentPage) => {
  const bloggers = await getData(currentPage);
  container.append(createBloggerPage(bloggers));
};

// Hàm check cuộn hết trang để tại thêm
window.addEventListener("scroll", () => {
  const documentHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop + viewportHeight >= documentHeight) {
    currentPage++;
    renderMore(currentPage);
  }
});
