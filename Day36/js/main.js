// Lấy phần tử DOM
const voiceBtn = document.querySelector(".btn");
const listeningEl = document.querySelector(".listening");
const listenedEl = document.querySelector(".listened");
const statusPending = document.querySelector(".status.pending");
const statusDone = document.querySelector(".status.done");
const keyWordEl = document.querySelector(".pending span");

// Thêm sự kiện vào
voiceBtn.addEventListener("click", handleListening);

// Hàm Xử lý nghe
function handleListening() {
  listeningEl.classList.add("active");
}

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const Speechrecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new Speechrecognition();

  recognition.lang = "vi-VN";
  recognition.interimResults = false;

  recognition.onresult = (e) => {
    const transcript = e.result[0][0].transcript;
    console.log("Bạn đã nói: ", transcript);
  };

  recognition.onend = (e) => {
    console.log("kết thúc");
  };

  recognition.start();
} else {
  console.log("Không hỗ trợ");
}
