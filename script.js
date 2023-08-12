let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
  if (!timer) {
    timer = setInterval(decrementTime, 1000);
  }
}

function decrementTime() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    timer = null;
    alert("Pomodoro session completed!");
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateTime();
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  minutes = 25;
  seconds = 0;
  updateTime();
}

function updateTime() {
  const timeDisplay = document.getElementById("timer");
  timeDisplay.innerText = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
