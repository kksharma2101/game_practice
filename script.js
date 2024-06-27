let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGame = document.querySelector(".new-game");

newGame.addEventListener("click", () => {
  location.reload();
});

let player1 = true;

let possiblePatterns = [
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
      box.innerText = "";
      // location.reload();
    });
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of possiblePatterns) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value !== "" && pos2Value !== "" && pos3Value !== "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        console.log("you are win the game");
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
};
