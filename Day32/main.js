var spanBtn = document.querySelector(".progress-bar .progress span");
var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress-bar .progress");
var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var timerPopup = progress.previousElementSibling;
var closeKaraoke = document.querySelector(".karaoke-header .close");
var karaokeBox = document.querySelector(".karaoke-box");
var showKaraokeBtn = document.querySelector(".karaoke");
var karaokeInner = document.querySelector(".karaoke-inner");

import { lyric } from "./static/lyric.js";
let isMouseDown = false;
let pointStart = 0;
let rate = 0;
let offsetLeft = 0;

// Xử lý nhấn trên thanh progresBar
progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    progress.style.width = `${(e.offsetX / progressBar.clientWidth) * 100}%`;
    pointStart = e.clientX;
    offsetLeft = e.offsetX;
    let temp = (offsetLeft / progressBar.clientWidth) * audio.duration;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", function () {
      audio.currentTime = temp;
      document.removeEventListener("mousemove", handleDrag);
    });
  }
});

progressBar.addEventListener("mouseover", function () {
  timerPopup.style.display = "block";
  progressBar.addEventListener("mousemove", handleDragTime);
  progressBar.addEventListener("mouseout", function () {
    timerPopup.style.display = "none";
  });
});

spanBtn.addEventListener("mouseover", function (e) {
  e.stopPropagation();
});

function handleDragTime(e) {
  timerPopup.style.left = `${e.offsetX - timerPopup.clientWidth / 2}px`;
  timerPopup.innerHTML = getTimeFormat(
    (e.offsetX / progressBar.clientWidth) * audio.duration
  );
}

// Xử lý kéo
function handleDrag(e) {
  rate =
    ((e.clientX - pointStart + offsetLeft) / progressBar.clientWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  let temp = (rate / 100) * audio.duration;
  progress.style.width = `${rate}%`;
  isMouseDown = true;
  document.addEventListener("mouseup", function () {
    offsetLeft = e.clientX - pointStart;
    audio.currentTime = temp;
    isMouseDown = false;
  });
}

spanBtn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    e.stopPropagation();
    pointStart = e.clientX;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", handleDrag);
    });
    offsetLeft = e.target.offsetLeft;
  }
});

var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("canplay", function () {
  durationEl.innerText = getTimeFormat(audio.duration);
});

playAction.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", function () {
  playAction.classList.replace("fa-play", "fa-pause");
});

audio.addEventListener("pause", function () {
  playAction.classList.replace("fa-pause", "fa-play");
  if (audio.currentTime === audio.duration) {
    audio.currentTime = 0;
  }
});

audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTimeFormat(audio.currentTime);
  var rate = (audio.currentTime / audio.duration) * 100;
  if (!isMouseDown) {
    progress.style.width = `${rate}%`;
  }
});

closeKaraoke.addEventListener("click", function () {
  karaokeBox.style.top = "2000px";
});

showKaraokeBtn.addEventListener("click", function () {
  karaokeBox.style.top = "0";
});
