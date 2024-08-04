var spanBtn = document.querySelector(".progress-bar .progress span");
var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress-bar .progress");

let pointStart = 0;
let rate = 0;
let offsetLeft = 0;

// Xử lý nhấn trên thanh progresBar
progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    progress.style.width = `${(e.offsetX / progressBar.clientWidth) * 100}%`;
    pointStart = e.clientX;
    offsetLeft = e.offsetX;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", handleDrag);
      audio.currentTime =
        (offsetLeft / progressBar.clientWidth) * audio.duration;
    });
  }
});
var timerPopup = progress.previousElementSibling;
progressBar.addEventListener("mouseover", function () {
  console.log("true2");
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
  progress.style.width = `${rate}%`;
  document.addEventListener("mouseup", function () {
    offsetLeft = e.clientX - pointStart;
    audio.currentTime = (rate / 100) * audio.duration;
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

var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
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
  progress.style.width = `${rate}%`;
});
