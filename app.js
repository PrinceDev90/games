let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let count = 0;
let turnO = true;
const WinPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const drawGame = (count) => {
  console.log(count);
  if (count == 8) {
    msg.innerText = `Game is Draw`;
    msgContainer.classList.remove("hide");
    disabelboxes();
  }
};
const resetGame = () => {
  turnO = true;
  enabelboxes();
  msgContainer.classList.add("hide");
  count = 0;
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    drawGame(count++);
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabelboxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enabelboxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner} `;
  msgContainer.classList.remove("hide");
  disabelboxes();
};
const checkWinner = () => {
  for (let pattern of WinPatterns) {
    pos1Val = boxes[pattern[0]].innerText;
    pos2Val = boxes[pattern[1]].innerText;
    pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos2Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
