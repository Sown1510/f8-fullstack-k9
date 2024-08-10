import { lyric } from "./static/lyric.js";
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
var karaokeInnerLine1 = document.querySelector(".karaoke-inner .line1");
var karaokeInnerLine2 = document.querySelector(".karaoke-inner .line2");
var lastSentence = "";
let i = 1;

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
    let handleMouseUp = () => {
      audio.currentTime = temp;
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mouseup", handleMouseUp);
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
  let handleMouseUp = () => {
    offsetLeft = e.clientX - pointStart;
    audio.currentTime = temp;
    isMouseDown = false;
    document.removeEventListener("mouseup", handleMouseUp);
  };
  document.addEventListener("mouseup", handleMouseUp);
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

karaokeInnerLine1.innerText = lyric.name;
karaokeInnerLine2.innerText = `Ca sĩ: ${lyric.singer}`;
let showInfo = true;
var lastTime = 0;
audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;

  currentTimeEl.innerText = getTimeFormat(currentTime);

  if (!isMouseDown) {
    var rate = (currentTime / audio.duration) * 100;
    progress.style.width = `${rate}%`;
  }
  if (currentTime - lastTime < 0.25) return;
  var currentTimeMiliseconds = currentTime * 1000;
  lastTime = currentTime;
  lyric.data.sentences.forEach((sentence) => {
    var words = sentence.words;
    var startSentence = words[0].startTime;
    var endSentence = words[words.length - 1].endTime;
    if (
      currentTimeMiliseconds > startSentence &&
      currentTimeMiliseconds < endSentence
    ) {
      var currentSentence = sentence.words.map((word) => word.data).join(" ");
      if (lastSentence !== currentSentence) {
        if (showInfo) {
          karaokeInnerLine1.innerText = "";
          karaokeInnerLine2.innerText = "";
          showInfo = false;
        }
        lastSentence = currentSentence;
        i++;
        var targetLine = i % 2 === 0 ? karaokeInnerLine1 : karaokeInnerLine2;
        targetLine.innerText = lastSentence;
      }
    }
  });
});

closeKaraoke.addEventListener("click", function () {
  karaokeBox.style.top = "2000px";
});

showKaraokeBtn.addEventListener("click", function () {
  karaokeBox.style.top = "0";
});
