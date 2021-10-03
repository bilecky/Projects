let ms = 0;
let second = 0;
let minute = 0;
let hour = 0;
let lessSeconds = 0;
let lessMinutes = 0;
let lessHours = 0;
let startInterval = null;

let status = "stopped";


timer = () => {
  ms += 10;
  if (ms / 1000 === 1) {
    ms = 0;

    second++;
  }
  if (second / 60 === 1) {
    second = 0;
    minute++;
    if (minute / 60 === 1) {
      minute = 0;
      hour++;
    }
  }
  const miliSeconds = ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms;

  if (second < 10) {
    lessSeconds = `0${second}`;
  } else lessSeconds = second;
  if (minute < 10) {
    lessMinutes = `0${minute}`;
  } else lessMinutes = minute;
  if (hour < 10) {
    lessHours = `0${hour}`;
  } else lessHours = hour;

  document.getElementById("display");
  display.innerHTML = `${lessHours}:${lessMinutes}:${lessSeconds}.<span style = "font-size: 40px">${miliSeconds
    .toString()
    .slice(0, -1)}</span>`;
};

const startstop = document.getElementById("startStop");

startstop.addEventListener("click", Start);

function Start() {
  if (status === "stopped") {
    startInterval = window.setInterval(timer, 10);
    startstop.innerHTML = "STOP";
    status = "true";
  } else {
    window.clearInterval(startInterval);
    startstop.innerHTML = "START";
    status = "stopped";
  }
}

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  clearInterval(startInterval);

  second = 0;
  minute = 0;
  hour = 0;
  display.innerHTML = `00:00:00.<span style = "font-size: 40px">00</span>`;
});
