// Lấy phần tử DOM
const voiceBtn = document.querySelector(".btn");
const listeningEl = document.querySelector(".listening");
const listenedEl = document.querySelector(".listened");
const statusPending = document.querySelector(".status.pending");
const statusDone = document.querySelector(".status.done");
const statusError = document.querySelector(".status.error");
const keyWordEl = document.querySelector(".pending span");

// Thêm sự kiện vào
voiceBtn.addEventListener("click", handleListening);

// Hàm Xử lý nghe
function handleListening() {
  listeningEl.classList.add("active");
  listenedEl.classList.remove("active");
  statusDone.classList.remove("active");
  statusPending.classList.remove("active");
  statusError.classList.remove("active");
  if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    var keySearch = "";
    const Speechrecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new Speechrecognition();

    recognition.lang = "vi-VN";
    recognition.interimResults = false;

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      keySearch = transcript;
      statusError.classList.remove("active");
      statusDone.classList.remove("active");
      statusPending.classList.add("active");
      listeningEl.classList.remove("active");
      listenedEl.classList.add("active");
      keyWordEl.innerText = keySearch;
    };

    recognition.onend = (e) => {
      var keywordsMap = ["chỉ đường", "chỉ đường tới", "tới", "đường tới"];
      var keywordsMusic = ["bài hát", "mở bài hát", "nghe bài hát"];
      var keywordsVideo = ["video", "mở video", "xem video"];
      switch (keySearch) {
        case "Google":
          window.open("https://www.google.co.uk/");
          handleStatus();
          break;
        case "Facebook":
          window.open("https://www.facebook.com/");
          handleStatus();
          break;
        case "YouTube":
          window.open("https://www.youtube.com/");
          handleStatus();
          break;
        case "Google Drive":
          window.open("https://www.google.com/drive/");
          handleStatus();
          break;
        case "Google Maps":
          window.open("https://www.google.com/maps");
          handleStatus();
          break;
        default:
          if (
            keywordsMap.some((keyword) =>
              keySearch.toLowerCase().includes(keyword)
            )
          ) {
            keywordsMap.forEach((keyword) => {
              keySearch.replace(keyword, "");
            });
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${keySearch.replace(
                " ",
                "+"
              )}`
            );
            handleStatus();
            break;
          } else if (
            keywordsMusic.some((keyword) =>
              keySearch.toLowerCase().includes(keyword)
            )
          ) {
            keywordsMusic.forEach((keyword) => {
              keySearch.replace(keyword, "");
            });
            window.open(
              `https://zingmp3.vn/tim-kiem/tat-ca?q=${keySearch.replace(
                " ",
                "+"
              )}`
            );
            handleStatus();
            break;
          } else if (
            keywordsVideo.some((keyword) =>
              keySearch.toLowerCase().includes(keyword)
            )
          ) {
            keywordsVideo.forEach((keyword) => {
              keySearch.replace(keyword, "");
            });
            window.open(
              `https://www.youtube.com/results?search_query=${keySearch.replace(
                " ",
                "+"
              )}`
            );
            handleStatus();
            break;
          } else {
            statusPending.classList.remove("active");
            statusError.classList.add("active");
            break;
          }
      }
    };

    recognition.start();
  } else {
    console.log("Không hỗ trợ");
  }
}

function handleStatus() {
  statusPending.classList.remove("active");
  statusDone.classList.add("active");
}
