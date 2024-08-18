// Lấy Phần tử DOM
var textAreaInput = document.querySelector(".text-input .textarea");
var countCharacter = document.querySelector(".count-text .character");
var countWord = document.querySelector(".count-text .word");
var boldTypeButton = document.querySelector(".text-format-wrapper .bold");
var underlineTypeButton = document.querySelector(
  ".text-format-wrapper .underline"
);
var italicTypeButton = document.querySelector(".text-format-wrapper .italic");
var colorTypeButton = document.querySelector(".text-format-wrapper .color");
var saveFileButton = document.querySelector(
  ".file-save-wrapper .save-file-button"
);
var saveFileTypeContainer = document.querySelector(
  ".file-save-wrapper .save-file-type"
);
var textInputValue;
var textInputSelected;

// Lắng nghe sự kiện ở DOM
textAreaInput.addEventListener("keyup", handleCountText);
saveFileButton.addEventListener("click", handleSaveFile);
document.addEventListener("click", handleClickOutSaveFileContainer);
boldTypeButton.addEventListener("click", handleBoldType);
italicTypeButton.addEventListener("click", handleItalicType);
underlineTypeButton.addEventListener("click", handleUnderlineType);
textAreaInput.addEventListener("select", grabTextHighlight);
boldTypeButton.addEventListener("mousedown", (e) => {
  e.preventDefault();
});
italicTypeButton.addEventListener("mousedown", (e) => {
  e.preventDefault();
});
underlineTypeButton.addEventListener("mousedown", (e) => {
  e.preventDefault();
});
colorTypeButton.addEventListener("mousedown", (e) => {
  e.preventDefault();
});
document.addEventListener("mouseup", grabTextHighlight);
// document.addEventListener("keyup", grabTextHighlight);

// Hàm xử lý đếm từ và ký tự
function handleCountText() {}

// Hàm xử lý lưu file
function handleSaveFile() {
  saveFileTypeContainer.classList.toggle("active");
}

// Hàm xử lý khi ấn ra ngoài mục lưu file
function handleClickOutSaveFileContainer(e) {
  if (
    !(
      saveFileTypeContainer.contains(e.target) ||
      saveFileButton.contains(e.target)
    )
  ) {
    saveFileTypeContainer.classList.remove("active");
  }
}

// Hàm xử lý lấy chữ được highlight
function grabTextHighlight() {
  var seclection = document.getSelection();
  console.log(seclection.rangeCount);
}

// Xử lý bôi đậm
function handleBoldType(e) {}

// Xử lý gạch chân
function handleUnderlineType(e) {}

// Xử lý chữ nghiêng
function handleItalicType(e) {}
