const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

playBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

let startTime;
let elapsedTime = 0;
let timeInterval;

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}

function showBtn(btnkey) {
  const btnToShow = btnkey === ("play" ? playBtn : pauseBtn);
  const btnToHide = btnkey === ("play" ? pauseBtn : playBtn);
  btnToShow.style.display = "block";
  btnToHide.style.display = "none";
}

function print(text) {
  document.getElementById("display").innerHTML = text;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showBtn("pause");
}

function pause() {
  clearInterval(timeInterval);
  showBtn("play");
}

function reset() {
  clearInterval(timeInterval);
  print("00:00:00:00");
  elapsedTime = 0;
  showBtn("play");
}
