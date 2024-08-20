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
var createNewButton = document.querySelector(".save-file-type .type-new");
var exportTXTbutton = document.querySelector(".save-file-type .type-txt");
var exportPDFbutton = document.querySelector(".save-file-type .type-pdf");
var fileNameInput = document.querySelector(".file-save-wrapper .file-name");

// Lắng nghe sự kiện ở DOM
textAreaInput.addEventListener("keyup", handleCountText);
saveFileButton.addEventListener("click", handleSaveFile);
document.addEventListener("click", handleClickOutSaveFileContainer);
boldTypeButton.addEventListener("click", handleBoldType);
italicTypeButton.addEventListener("click", handleItalicType);
underlineTypeButton.addEventListener("click", handleUnderlineType);
colorTypeButton.addEventListener("click", handleColorType);
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
createNewButton.addEventListener("click", handleCreateNew);
exportTXTbutton.addEventListener("click", exportTXT);
exportPDFbutton.addEventListener("click", exportPDF);

// Hàm xử lý đếm từ và ký tự
function handleCountText() {
  var textContent = textAreaInput.innerText;
  var textWithoutSpace = textContent.replace(/\s+/g, "");
  var characterCount = textWithoutSpace.length;
  var cleanContent = textContent
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  var wordCount = cleanContent ? cleanContent.split(" ").length : 0;
  countCharacter.innerText = characterCount;
  countWord.innerText = wordCount;
}

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
function handleBoldType() {
  document.execCommand("bold");
}

// Xử lý gạch chân
function handleUnderlineType() {
  document.execCommand("underline");
}

// Xử lý chữ nghiêng
function handleItalicType() {
  document.execCommand("italic");
}

// Xử lý màu chữ
function handleColorType() {
  colorTypeButton.addEventListener("input", function () {
    document.execCommand("foreColor", false, colorTypeButton.value);
  });
}

// Hàm xử lý tạo mới
function handleCreateNew() {
  textAreaInput.innerText = "";
  colorTypeButton.value = "#000000";
  fileNameInput.value = "untitled";
  handleCountText();
  saveFileTypeContainer.classList.remove("active");
}

// Hàm xuất txt
function exportTXT() {
  var data = textAreaInput.innerText;
  var blob = new Blob([data], { type: "text/plain" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileNameInput.value}.txt`;
  link.click();
}

// Hàm xuất pdf
function exportPDF() {
  const options = {
    margin: 1,
    filename: `${fileNameInput.value}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(textAreaInput).set(options).save();
}

// Xử lý sự kiện paste để chỉ dán văn bản thuần
textAreaInput.addEventListener("paste", function (e) {
  e.preventDefault();
  var text = (e.clipboardData || window.clipboardData).getData("text");
  document.execCommand("insertText", false, text);
});
