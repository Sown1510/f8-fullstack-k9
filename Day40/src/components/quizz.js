const app = document.querySelector("#app");
const baseUrl = "https://h3j2ks-8080.csb.app";
const endPoint = "questions";
const totalQuestions = 8;
var currentQuestion = 1;
var streak = 0;
var correctAnswerId = null;
var wrongAnswer = null;
var hiddenAnswer = null;
var rightAnswer = null;
var dataQuestion = null;

const renderStart = () => {
  const start = `
    <div class="start bg-[url('../images/f8.png')] h-screen w-screen bg-no-repeat mx-auto bg-cover">
        <div class="overlay h-screen w-screen flex bg-black bg-opacity-50">
          <button onclick="openQuizzApp()" class="block w-fit m-auto p-[50px] text-white font-bold text-3xl cursor-pointer border-solid border-[3px] border-white hover:bg-black hover:bg-opacity-30">Start</button>
        </div>
    </div>
  `;
  app.innerHTML = start;
};
renderStart();

const getData = async () => {
  try {
    const response = await fetch(`${baseUrl}/${endPoint}?_page=1&_limit=1`);
    data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const renderData = async () => {
  const data = await getData();
  if (data) {
    dataQuestion = data;
    const question = renderQuestion(data);
    correctAnswerId = data[0].correctId[0];
    app.innerHTML = question;
  }
};

const openQuizzApp = () => {
  renderData();
};

const checkAnswer = (idA) => {
  if (idA == correctAnswerId) {
    rightAnswer = correctAnswerId;
  } else {
    wrongAnswer = idA;
    rightAnswer = correctAnswerId;
  }
  const question = renderQuestion(dataQuestion);
  app.innerHTML = question;
  console.log(wrongAnswer);
};

const addClassForAnswer = (idA) => {
  if (!rightAnswer) return;
  if (idA == wrongAnswer) {
    return "wrong-answer";
  }
  if (idA == rightAnswer) {
    return "right-answer";
  }
  return "hidden-answer";
};

const renderQuestion = (data) => {
  return `
    <div class="quizz-app"></div>
        <!--QUIZZ HEADER -->
        <div class="quizz-header flex bg-black text-white p-2 px-6 justify-between">
          <div class="progress flex gap-10">
            <div class="question-process bg-gray-400 p-1 rounded-sm font-bold"><span class="current-question">${currentQuestion}</span>/<span class="total-question">${totalQuestions}</span></div>
            <div class="streak-progress content-center bg-opacity-0">
              <div class="streak-point w-[${}]}">
                <span>Streak</span>
              </div>
            </div>
            <span class="point content-center font-bold">+0</span>
          </div>
          <span class="total-score content-center">800</span>
        </div>
        <!-- /QUIZZ HEADER -->
        <!-- QUIZZ CONTAINER -->
        <div class="quizz-container h-[90%] bg-[url('../images/f8.png')] bg-no-repeat bg-cover pt-[100px] text-white">
          <div class="quizz-box max-w-[1200px] mx-auto">
            <div class="question bg-black bg-opacity-80 h-[200px] text-center content-center rounded-lg"><p class="text-center">${data[0].content}</p></div>
            <div class="choices-wrapper flex gap-[20px] justify-between w-full mt-[40px]">
              <div onclick='checkAnswer(${data[0].answers[0].idA})' class="answer ${rightAnswer ? "" : "hover:bg-violet-600"} cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80 ${addClassForAnswer(data[0].answers[0].idA)}" data-choice="${data[0].answers[0].idA}"><p class="text-center">${data[0].answers[0].content}</p></div>
              <div onclick='checkAnswer(${data[0].answers[1].idA})' class="answer ${rightAnswer ? "" : "hover:bg-violet-600"} cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80 ${addClassForAnswer(data[0].answers[1].idA)}" data-choice="${data[0].answers[1].idA}"><p class="text-center">${data[0].answers[1].content}</p></div>
              <div onclick='checkAnswer(${data[0].answers[2].idA})' class="answer ${rightAnswer ? "" : "hover:bg-violet-600"} cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80 ${addClassForAnswer(data[0].answers[2].idA)}" data-choice="${data[0].answers[2].idA}"><p class="text-center">${data[0].answers[2].content}</p></div>
              <div onclick='checkAnswer(${data[0].answers[3].idA})' class="answer ${rightAnswer ? "" : "hover:bg-violet-600"} cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80 ${addClassForAnswer(data[0].answers[3].idA)}" data-choice="${data[0].answers[3].idA}"><p class="text-center">${data[0].answers[3].content}</p></div>
            </div>
          </div>
          <span class="${wrongAnswer ? "block" : "hidden"} text-center absolute bottom-0 text-white w-full bg-red-500 text-2xl font-extrabold h-[10%] content-center">Incorrect</span>
        </div>
        <!-- /QUIZZ CONTAINER -->
    </div>
  `;
};
