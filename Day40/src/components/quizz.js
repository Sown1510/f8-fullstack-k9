const Quizz = `
    <div class="quizz-app"></div>
        <!--QUIZZ HEADER -->
        <div class="quizz-header flex bg-black text-white p-2 px-6 justify-between">
          <div class="progress flex gap-10">
            <div class="question-process bg-gray-400 p-1 rounded-sm font-bold"><span class="current-question">1</span>/<span class="total-question">8</span></div>
            <div class="streak-progress content-center">Streak</div>
            <span class="point content-center font-bold">+0</span>
          </div>
          <span class="total-score content-center">800</span>
        </div>
        <!-- /QUIZZ HEADER -->
        <!-- QUIZZ CONTAINER -->
        <div class="quizz-container h-4/5 bg-[url('../images/f8.png')] bg-no-repeat bg-cover pt-[100px] text-white">
          <div class="quizz-box max-w-[1200px] mx-auto">
            <div class="question bg-black bg-opacity-80 h-[200px] text-center content-center rounded-lg"><p class="text-center">Câu hỏi đây</p></div>
            <div class="choices-wrapper flex gap-[20px] justify-between w-full mt-[40px]">
              <div class="answer hover:bg-violet-600 cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80" data-choice="A"><p class="text-center">Chọn A</p></div>
              <div class="answer hover:bg-violet-600 cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80" data-choice="B"><p class="text-center">Chọn A</p></div>
              <div class="answer hover:bg-violet-600 cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80" data-choice="C"><p class="text-center">Chọn A</p></div>
              <div class="answer hover:bg-violet-600 cursor-pointer rounded-lg h-[200px] w-[300px] flex justify-center items-center bg-black bg-opacity-80" data-choice="D"><p class="text-center">Chọn A</p></div>
            </div>
          </div>
        </div>
        <!-- /QUIZZ CONTAINER -->
    </div>
`;

const Start = `
    <div class="start bg-[url('../images/f8.png')] h-screen w-screen bg-no-repeat mx-auto bg-cover">
        <div class="overlay h-screen w-screen flex bg-black bg-opacity-50">
          <button onclick="openQuizzApp()" class="block w-fit m-auto p-[50px] text-white font-bold text-3xl cursor-pointer border-solid border-[3px] border-white hover:bg-black hover:bg-opacity-30">Start</button>
        </div>
    </div>
    `;

const app = document.querySelector("#app");
app.innerHTML = Start;
const openQuizzApp = () => {
  app.innerHTML = Quizz;
};
