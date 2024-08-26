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
        case "Vinhomes Smartcity Tây Mỗ":
          window.open("https://www.google.com/maps");
          handleStatus();
          break;
        default:
          statusPending.classList.remove("active");
          statusError.classList.add("active");
          break;
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
