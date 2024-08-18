// Lấy Phần tử DOM
var textAreaElement = document.querySelector(".text-input textarea");
var countCharacter = document.querySelector(".count-text .character");
var countWord = document.querySelector(".count-text .word");

textAreaElement.addEventListener("keyup", handleCountText);

function handleCountText() {
  var stringValue = textAreaElement.value;
  var wordInput = stringValue.split(" ");
  var characterInput = wordInput.join("");
  countCharacter.innerText = `${characterInput.length}`;
  countWord.innerText = `${wordInput[0] === "" ? 0 : wordInput.length}`;
}
