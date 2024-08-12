import { lyric } from "./static/lyric.js";

// Lấy phần tử DOM
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

// Xử lý hiện timer tooltip
progressBar.addEventListener("mouseover", function () {
  timerPopup.style.display = "block";
  progressBar.addEventListener("mousemove", handleDragTime);
  progressBar.addEventListener("mouseout", function () {
    timerPopup.style.display = "none";
  });
});

// Ngăn sự kiên mouseover lan ra ngoài
spanBtn.addEventListener("mouseover", function (e) {
  e.stopPropagation();
});

// Xử lý di chuyển hiện thời gian tooltip
function handleDragTime(e) {
  timerPopup.style.left = `${e.offsetX - timerPopup.clientWidth / 2}px`;
  timerPopup.innerHTML = getTimeFormat(
    (e.offsetX / progressBar.clientWidth) * audio.duration
  );
}

// Xử lý kéo thanh progressBar để thay đổi thời gian phát nhạc
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

// Xử lý nhấn chuột xuống trên nút span
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

// Đinh dạng thời gian từ giây sang phút:giây
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

// Cập nhật thời gian tổng của audio
audio.addEventListener("canplay", function () {
  durationEl.innerText = getTimeFormat(audio.duration);
});

// Xử lý click phát/tạm dừng nhạc
playAction.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Cập nhật icon play
audio.addEventListener("play", function () {
  playAction.classList.replace("fa-play", "fa-pause");
});

// Cập nhật icon pause
audio.addEventListener("pause", function () {
  playAction.classList.replace("fa-pause", "fa-play");
  if (audio.currentTime === audio.duration) {
    audio.currentTime = 0;
  }
});

// Hiện thông tin bài hát
karaokeInnerLine1.innerText = lyric.name;
karaokeInnerLine2.innerText = `Ca sĩ: ${lyric.singer}`;
let showInfo = true;
var lastTime = 0;

// Cập nhật thời gian hiện tại và lời bài hát
audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;

  currentTimeEl.innerText = getTimeFormat(currentTime);

  if (!isMouseDown) {
    var rate = (currentTime / audio.duration) * 100;
    progress.style.width = `${rate}%`;
  }
  if (Math.abs(currentTime - lastTime) < 0.25) return;
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

// Đóng karaoke
closeKaraoke.addEventListener("click", function () {
  karaokeBox.style.top = "2000px";
});

// Mở karaoke
showKaraokeBtn.addEventListener("click", function () {
  karaokeBox.style.top = "0";
});
