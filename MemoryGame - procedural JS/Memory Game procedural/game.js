const cardsColor = [
  "red",
  "red",
  "green",
  "green",
  "blue",
  "blue",
  "brown",
  "brown",
  "yellow",
  "yellow",
  "gray",
  "gray",
  "cadetblue",
  "cadetblue",
  "violet",
  "violet",
  "lightgreen",
  "lightgreen",
];

let cards = document.querySelectorAll("div");

cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];
const gamePairs = cards.length / 2;
let gameResult = 0;

const clickCard = function () {
  let activeCard = this;
  if (activeCard == activeCards[0]) {
    return;
  }
  activeCard.classList.remove("hidden");

  if (activeCards.length === 0) {
    activeCards[0] = this;
    return;
  } else {
    cards.forEach((card) => card.removeEventListener("click", clickCard));

    activeCards[1] = activeCard;

    setTimeout(function () {
      if (activeCards[0].className === activeCards[1].className) {
        activeCards.forEach((card) => card.classList.add("off"));
        gameResult++;
        cards = cards.filter((card) => !card.classList.contains("off"));

        if (gameResult == gamePairs) {
          const endTime = new Date().getTime();
          const gameTime = (endTime - startTime) / 1000;
          alert(`Wygrałeś! Czas gry to ${gameTime}s`);
          location.reload();
        }
      } else {
        activeCards.forEach((card) => card.classList.add("hidden"));
      }

      activeCard = "";
      activeCards.length = 0;
      cards.forEach((card) => card.addEventListener("click", clickCard));
    }, 1000);
  }
};
const init = function () {
  cards.forEach(function (card) {
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position, 1);
  });

  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 2000);
};

init();