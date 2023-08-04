const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choices = ["rock", "paper", "scissors"];

const getRandomChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `It's a tie!`;
  }

  const winMap = new Map([
    ["rock", "scissors"],
    ["paper", "rock"],
    ["scissors", "paper"],
  ]);
  console.log("userChoice:", userChoice);

  if (winMap.get(userChoice) === computerChoice) {
    return "You win!";
  } else {
    return "Computer win!";
  }
};

const playGame = () => {
  rl.question("Choose rock, paper of scissors: ", (userChoice) => {
    console.log("✋😎👉 ~ userChoice:", userChoice);
    userChoice = userChoice.toLowerCase();

    if (!choices.includes(userChoice)) {
      console.log("Invalid choice. Please choose rock, paper or scissors.");
      playGame();
    }

    const computerChoice = getRandomChoice();
    console.log("Computer choose:", computerChoice);

    const result = determineWinner(userChoice, computerChoice);
    console.log(result);

    rl.question("Do you want to play again? (yes/no): ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        playGame();
      } else {
        console.log("Thanks for playing!");
        rl.close();
      }
    });
  });
};

console.log("Wellcome to Rock-Paper-Scissors Game!");
playGame();
