let timeRemaining = 60;
let clickCount = 0;
let timer;

const timeDisplay = document.getElementById("time");
const clickButton = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById("clickCount");
const restartButton = document.getElementById("restartButton");


clickButton.addEventListener("click", () => {
  if (!timer) {
    startTimer();
  }
  clickCount++;
  clickCountDisplay.textContent = clickCount;
});

function startTimer() {
  timer = setInterval(() => {
    timeRemaining--;
    timeDisplay.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}
function endGame() {
    clickButton.disabled = true;
    clickButton.textContent = "Game Over!";
    restartButton.classList.remove("hidden");

    const cps = (clickCount / 60).toFixed(2);

    document.getElementById('cpsScore').classList.remove('hidden');
    document.getElementById('cpsCount').textContent = cps;
}

restartButton.addEventListener("click", () => {
    timeRemaining = 60;
    clickCount = 0;
    timer = null;

    timeDisplay.textContent = timeRemaining;
    clickCountDisplay.textContent = clickCount;
    clickButton.disabled = false;
    clickButton.textContent = "CLICK ME!";
    restartButton.classList.add("hidden");
    document.getElementById('cpsScore').classList.add('hidden');
});