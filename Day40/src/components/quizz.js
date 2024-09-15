const app = document.querySelector("#app");
const baseUrl = "https://h3j2ks-8080.csb.app";
const endPoint = "questions";
const totalQuestions = 8;
var currentQuestion = 1;
var streak = 0;
var correctAnswerId = null;
var wrongAnswer = null;
var rightAnswer = null;
var dataQuestion = null;
var score = 0;
var streakPoint = 100;
var pointPerQuestion = 300;
var countStreak = 0;
var countCorrectAnswer = 0;
var countIncorrectAnswer = 0;
var page = 1;
var nextPage = true;

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
  showLoading();
  try {
    const response = await fetch(`${baseUrl}/${endPoint}?_page=${page}&_limit=1`);
    data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    hideLoading();
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

const checkAnswer = (idA) => {
  nextPage = false;
  if (idA == correctAnswerId) {
    rightAnswer = correctAnswerId;
    if (streak < 3) {
      streak++;
    }
    if (streak === 3) {
      countStreak++;
    }
    countCorrectAnswer++;
    score += pointPerQuestion + streakPoint * streak;
  } else {
    streak = 0;
    wrongAnswer = idA;
    rightAnswer = correctAnswerId;
    countIncorrectAnswer++;
  }
  const question = renderQuestion(dataQuestion);
  app.innerHTML = question;
  currentQuestion++;
  page++;
  if (currentQuestion > totalQuestions) {
    showResult();
  } else {
    setTimeout(() => nextQuestion(), 2000);
  }
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
              <div class="streak-point" style="width:${streak > 0 ? (streak / 3) * 100 : 0}%;">
                <span>Streak</span>
              </div>
            </div>
            <span class="point content-center font-bold">+${streakPoint * streak}</span>
          </div>
          <span class="total-score content-center font-bold">${score}</span>
        </div>
        <!-- /QUIZZ HEADER -->
        <!-- QUIZZ CONTAINER -->
        <div class="quizz-container h-[85%] bg-[url('../images/f8.png')] bg-no-repeat bg-cover pt-[100px] text-white">
          <div class="quizz-box max-w-[1200px] mx-auto">
            <div class="question bg-black bg-opacity-80 h-[200px] text-center content-center rounded-lg"><p class="text-center">${data[0].content}</p></div>
            <div class="choices-wrapper flex gap-[20px] justify-between w-full mt-[40px]">
              <div ${nextPage ? `onclick='checkAnswer(${data[0].answers[0].idA})'` : ""} class="answer ${rightAnswer ? "" : "hover:bg-violet-600"} cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80 ${addClassForAnswer(data[0].answers[0].idA)}" data-choice="${data[0].answers[0].idA}"><p class="text-center">${data[0].answers[0].content}</p></div>
              <div ${nextPage ? `onclick='checkAnswer(${data[0].answers[1].idA})'` : ""} class="answer ${rightAnswer ? "" : "hover:bg-violet-600"} cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80 ${addClassForAnswer(data[0].answers[1].idA)}" data-choice="${data[0].answers[1].idA}"><p class="text-center">${data[0].answers[1].content}</p></div>
              <div ${nextPage ? `onclick='checkAnswer(${data[0].answers[2].idA})'` : ""} class="answer ${rightAnswer ? "" : "hover:bg-violet-600"} cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80 ${addClassForAnswer(data[0].answers[2].idA)}" data-choice="${data[0].answers[2].idA}"><p class="text-center">${data[0].answers[2].content}</p></div>
              <div ${nextPage ? `onclick='checkAnswer(${data[0].answers[3].idA})'` : ""} class="answer ${rightAnswer ? "" : "hover:bg-violet-600"} cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80 ${addClassForAnswer(data[0].answers[3].idA)}" data-choice="${data[0].answers[3].idA}"><p class="text-center">${data[0].answers[3].content}</p></div>
            </div>
          </div>
          <span class="${rightAnswer ? "block" : "hidden"} ${wrongAnswer ? "bg-red-500" : "bg-green-500"} text-center absolute bottom-0 text-white w-full text-2xl font-extrabold h-[10%] content-center">${wrongAnswer ? "Incorrect" : "Correct"}</span>
        </div>
        <!-- /QUIZZ CONTAINER -->
    </div>
  `;
};

const openQuizzApp = () => {
  renderData();
};

const nextQuestion = () => {
  nextPage = true;
  wrongAnswer = null;
  rightAnswer = null;
  dataQuestion = null;
  renderData();
};

const showResult = () => {
  const result = `
    <div class="result bg-[url('../images/f8.png')] h-screen w-screen bg-no-repeat mx-auto bg-cover">
        <div class="overlay h-screen w-screen bg-black bg-opacity-50">
          <div class="result-box text-white bg-black bg-opacity-55 m-auto h-screen flex flex-col items-center justify-center w-[400px] ">
            <span class="text-lg font-bold">Game Performance</span>
            <div class="accuracy bg-black w-full p-2 rounded-lg mt-[30px]">
              <span class="text-center block">Accuracy</span>
              <div class="process h-[30px] w-[90%] bg-red-500 rounded-full mx-auto relative overflow-hidden flex items-center justify-center">
                <span class="${countCorrectAnswer == 0 ? "block" : "hidden"}">0%</span>
                <div style="width:${((countCorrectAnswer / totalQuestions) * 100).toFixed(0)}%;" class="processing h-[30px] bg-green-500 rounded-full left-0 top-0 absolute flex items-center justify-center ${countCorrectAnswer == 0 ? "hidden" : "block"}">
                  <span>${((countCorrectAnswer / totalQuestions) * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>
            <div class="result-wrapper mt-[20px]">
              <div class="result-line flex gap-[30px] mt-[15px]">
                <div class="score bg-black flex flex-col items-center justify-center w-[120px] h-[90px] rounded-lg">
                  <span>${score}</span>
                  <span>Score</span>
                </div>
                <div class="streak bg-black flex flex-col items-center justify-center w-[120px] h-[90px] rounded-lg">
                  <span>${countStreak}</span>
                  <span>Streak</span>
                </div>
              </div>
              <div class="result-line flex gap-[30px] mt-[15px]">
                <div class="correct bg-black flex flex-col items-center justify-center w-[120px] h-[90px] rounded-lg">
                  <span>${countCorrectAnswer}</span>
                  <span>Correct</span>
                </div>
                <div class="incorrect bg-black flex flex-col items-center justify-center w-[120px] h-[90px] rounded-lg">
                  <span>${countIncorrectAnswer}</span>
                  <span>Incorrect</span>
                </div>
              </div>
            </div>
            <button onclick="playAgain()" class="w-full bg-violet-700 font-bold mt-[20px] py-[10px] rounded-xl hover:bg-opacity-80">Play Again</button>
          </div>
        </div>
      </div>
  `;
  app.innerHTML = result;
};

const playAgain = () => {
  currentQuestion = 1;
  streak = 0;
  correctAnswerId = null;
  wrongAnswer = null;
  rightAnswer = null;
  dataQuestion = null;
  score = 0;
  streakPoint = 100;
  pointPerQuestion = 300;
  countStreak = 0;
  countCorrectAnswer = 0;
  countIncorrectAnswer = 0;
  page++;
  nextPage = true;
  renderStart();
};

function showLoading() {
  document.getElementById("loading").style.display = "flex";
}

function hideLoading() {
  document.getElementById("loading").style.display = "none";
}
