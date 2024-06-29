let content = `<h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h1>`;
let newContent = " ";
let count = 0;
let start, end;
let changeContent = [];
for (let i = 0; i < content.length; i++) {
  if (content[i] === " ") {
    count++;
    if (count < 3) {
      if (count === 1) start = i;
      if (count === 2) end = i;
    } else {
      start = end;
      end = i;
    }
    if (start && end) {
      console.log(start, end);
      newContent =
        content.slice(0, start) +
        `<span>` +
        content.slice(start, end) +
        `</span>` +
        content.slice(end);
      changeContent.push(newContent);
    }
  }
}

let time = 0;
let interVal = setInterval(function () {
  if (time >= changeContent.length) {
    time = 0;
  }
  document.getElementById("content-container").innerHTML = changeContent[time];
  time++;
}, 1000);
