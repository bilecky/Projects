const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDay = new Date(2022, 9, 1, 23, 30, 0);
const year = futureDay.getFullYear();
const hours = futureDay.getHours();
const minutes = futureDay.getMinutes();
const date = futureDay.getDate();
let month = futureDay.getMonth();
month = months[month];

const weekday = weekdays[futureDay.getDay()];
giveaway.textContent = ` giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`;

// future in ms

const futureTime = futureDay.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms , 1m = 60s, 1hr = 60min, 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculat
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);

  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if(t< 0) {
    clearInterval(countdown)
    // deadline.innerHTML
  }
}
// countdown
let countDown = setInterval(getRemainingTime, 1000)
getRemainingTime();
