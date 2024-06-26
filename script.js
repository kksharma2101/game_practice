let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");

let player1 = true;

let possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player1) {
      box.innerHTML = "O";
      player1 = false;
    } else {
      box.innerHTML = "X";
      player1 = true;
    }
    box.disabled = true;
    resetBtn.addEventListener("click", () => {
      box.innerHTML = "";
    });
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of possibleWins) {
    let player1Value = boxes[pattern[0]].innerText;
    let player2Value = boxes[pattern[1]].innerText;
    let player3Value = boxes[pattern[2]].innerText;

    if (player1Value !== "" && player2Value !== "" && player3Value !== "") {
      if (player1Value === player2Value && player2Value === player3Value) {
        console.log("you win the game");
      }
    }
  }
};
