let content = `<h1> Lorem ipsum dolor sit amet </h1>`;
let newContent = " ";
let count = 0;
let start, end;
let position = [];

for (let i = 0; i < content.length; i++) {
  if (content[i] === " ") {
    position.push(i);
  }
}
console.log(position);

let time = 0;
let show = setInterval(function () {
  if (time >= position.length - 1) {
    time = 0;
  }
  let start = position[time];
  let end = position[time + 1];
  let newContent =
    content.slice(0, start) +
    `<span>` +
    content.slice(start, end) +
    `</span>` +
    content.slice(end);
  document.getElementById("content-container").innerHTML = newContent;
  time++;
}, 1000);
