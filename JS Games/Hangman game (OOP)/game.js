import { Quote } from "./quote.js";

class Game {
  currentStep = 0;
  lastStep = 7;

  answers = [
    {
      text: "warsaw",
      category: "European Capitals",
    },
    {
      text: "london",
      category: "European Capitals",
    },
    {
      text: "madrid",
      category: "European Capitals",
    },
    {
      text: "robert lewandowski",
      category: "Polish footballers",
    },
    {
      text: "tomato",
      category: "Vegetable",
    },
    {
      text: "september",
      category: "Month",
    },
    {
      text: "grapefruit",
      category: "Fruit",
    },
    {
      text: "thursday",
      category: "Days of week",
    },
  ];

  constructor({ lettersWrap, categoryWrap, wordWrap, outputWrap }) {
    this.lettersWrap = lettersWrap;
    this.categoryWrap = categoryWrap;
    this.wordWrap = wordWrap;
    this.outputWrap = outputWrap;

    const { text, category } = this.answers[
      Math.floor(Math.random() * this.answers.length)
    ];
    console.log(text);
    console.log(category);
    this.categoryWrap.innerHTML = category;
    this.quote = new Quote(text);
  }

  guess(letter, event) {
    event.target.disabled = true;
    if (this.quote.guess(letter)) {
      this.drawQuote();
    } else {
      this.currentStep++;
      document.getElementsByClassName("step")[
        this.currentStep
      ].style.opacity = 1;
      if (this.currentStep == this.lastStep) {
        this.looser();
      }
    }
    console.log(letter);
    // this.drawQuote();
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const labels = (i + 10).toString(36);

      const button = document.createElement("button");
      button.innerHTML = labels;
      button.addEventListener("click", (event) => this.guess(labels, event));
      this.lettersWrap.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrap.innerHTML = content;
    if (!content.includes("_")) {
      this.winning();
    }
  }

  start() {
    document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;

    this.drawLetters();
    this.drawQuote();
  }
  winning() {
    this.wordWrap.innerHTML = "Congratulations! You Win!";
    this.lettersWrap.innerHTML = "";
  }

  looser() {
    this.wordWrap.innerHTML = "YOU LOST!";
    this.lettersWrap.innerHTML = "";
  }
}
const game = new Game({
  lettersWrap: document.getElementById("letters"),
  categoryWrap: document.getElementById("category"),
  wordWrap: document.getElementById("word"),
  outputWrap: document.getElementById("output"),
});

game.start();
